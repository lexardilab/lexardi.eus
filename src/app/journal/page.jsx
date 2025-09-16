import { client } from "@/app/lib/sanity";
import JournalCard from "../../components/JournalCard";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    subtitle,
    slug,
    mainImage,
  }`;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <div className="pb-6">
        <div className="grid grid-cols-3">
          {posts.map((post) => (
            <JournalCard key={post.slug.current} post={post} />
          ))}
        </div>
      </div>
      <div className="flex h-screen bg-red-100">prueba</div>
    </>
  );
}
