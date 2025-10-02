import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/sanity";

// Helper para generar URLs de imágenes de Sanity
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Array de colores de fondo para el hover
const hoverColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
];

export default async function ProjectsPage() {
  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    category,
    mainImage,
    "slug": slug.current
  }`);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-4xl font-bold mb-12">Nuestros Proyectos</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Selecciona un color del array de forma cíclica
            const hoverColor = hoverColors[index % hoverColors.length];

            return (
              <li key={project._id} className="relative">
                <Link href={`/projects/${project.slug}`}>
                  <div className="group relative w-full aspect-[4/5] overflow-hidden">
                    {/* Imagen de fondo */}
                    {project.mainImage && (
                      <Image
                        src={urlFor(project.mainImage).url()}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}

                    {/*
                      Capa de superposición. El color de fondo es dinámico
                      y se aplica al hacer hover.
                    */}
                    <div
                      className={`absolute inset-0 ${hoverColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4`}
                    >
                      <p className="text-xl font-bold text-white">
                        {project.title}
                      </p>
                      <p className="text-white">{project.category}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <div className="flex h-screen bg-red-100">prueba</div>
    </div>
  );
}
