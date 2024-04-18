import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Lexardi Lab",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getJournalBySlug(slug) {
  const journal = await client.fetch(
    groq`*[_type == "journal" && slug.current == $slug]{
      _id,
      title,
      slug,
      subtitle,
      description,
      descriptionOne,
      "image": image.asset->url,
      "introimage": introimage.asset->url,
      "firstimage": firstimage.asset->url,
      "secondimage": secondimage.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
    }`,
    { slug },
    {
      next: {
        revalidate: 1, //revalidate every 30 days
      },
    }
  );

  return journal; // Assuming you expect a single product, not an array
}

export async function getAllJournals() {
  const journals = await client.fetch(
    groq`*[_type == "journal"]{
      _id,
      title,
      slug,
      subtitle,
      description,
      descriptionOne,
      "image": image.asset->url,
      "introimage": introimage.asset->url,
      "firstimage": firstimage.asset->url,
      "secondimage": secondimage.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
    }`,
    {
      next: {
        revalidateTag: 1, //revalidate every hour
      },
    }
  );

  return journals;
}

export async function getJournals() {
  const journals = await client.fetch(
    groq`*[_type == "journal"] |  [0...6] {
      _id,
      title,
      slug,
      subtitle,
      description,
      descriptionOne,
      "image": image.asset->url,
      "introimage": introimage.asset->url,
      "firstimage": firstimage.asset->url,
      "secondimage": secondimage.asset->url,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
    }`,
    { next: { revalidateTag: 1 } } // revalidate every hour
  );

  return journals;
}
