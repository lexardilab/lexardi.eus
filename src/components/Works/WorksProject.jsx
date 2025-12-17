"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { sanityClient, urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import GallerySlider from "@/components/GallerySlider";

const components = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          width={600}
          height={400}
          className="w-full h-auto rounded-md"
        />
      </div>
    ),
    imageRow: ({ value }) => (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {value.images.map((img, i) => (
          <Image
            key={i}
            src={urlFor(img).width(800).url()}
            alt={img.alt || ""}
            width={600}
            height={400}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
    ),
  },
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="italic my-6 text-gray-600">
        {children}
      </blockquote>
    ),
    center: ({ children }) => <p className="text-center mb-4">{children}</p>, // <-- centrado
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4">{children}</ol>
    ),
  },
};

const query = `
  *[_type == "project" && slug.current == $slug][0]{
    title,
    body,
    gallery[]{
      asset->{
        url
      }
    }
  }
`;

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!slug) return;
    sanityClient.fetch(query, { slug }).then(setProject).catch(console.error);
  }, [slug]);

  if (!slug || !project) return <p className="p-6">Loading...</p>;

  return (
    <div className="px-4 pb-6">
      <div className="flex items-center mx-auto pt-12">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      </div>

      {/* Body enriquecido */}
      <div className="mb-8">
        <PortableText value={project.body} components={components} />
      </div>

      {/* Galería */}
      <div className="space-y-6">
        {project.gallery && <GallerySlider images={project.gallery} />}
      </div>
    </div>
  );
}
