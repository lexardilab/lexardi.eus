import { client, urlFor } from "../lib/sanity";
import HorizontalGallery from "@/components/HorizontalGallery";

export default async function StudioPage() {
  // Fetch de imágenes desde Sanity
  const query = `*[_type == "galleryImage"]{_id, image, alt}`;
  const images = await client.fetch(query);

  // Mapear las imágenes con URL usable
  const galleryImages = images.map((img) => ({
    _id: img._id,
    url: urlFor(img.image).url(),
    alt: img.alt || "",
  }));

  return (
    <main>
      <div className="p-10">
        <HorizontalGallery images={galleryImages} />
      </div>
      <div className="flex h-screen bg-red-100">prueba</div>
    </main>
  );
}
