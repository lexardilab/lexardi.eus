import { client, urlFor } from "../lib/sanity";
import HorizontalGallery from "@/components/HorizontalGallery";

export default async function StudioPage() {
  // 👇 Aquí pones el _id de la galería que quieras mostrar en esta página
  const galleryId = "eff754e1-634f-45c5-a08d-2fef6620acf4";

  // Query: traer solo la galería por _id
  const query = `*[_type == "gallery" && _id == $id][0]{
    _id,
    title,
    images[]->{
      _id,
      alt,
      image
    }
  }`;

  const gallery = await client.fetch(query, { id: galleryId });

  if (!gallery) {
    return (
      <main className="p-10">
        <p>No se encontró la galería con id {galleryId}</p>
      </main>
    );
  }

  // Formatear imágenes para el componente
  const formattedImages = gallery.images.map((img) => ({
    _id: img._id,
    url: urlFor(img.image).url(),
    alt: img.alt || "",
  }));

  return (
    <main className="py-6">
      <h2 className="text-2xl font-bold mb-4 pl-4">{gallery.title}</h2>
      <HorizontalGallery images={formattedImages} />
      <div className="flex h-screen bg-red-100">prueba</div>
    </main>
  );
}
