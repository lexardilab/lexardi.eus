"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { sanityClient } from "@/lib/sanityClient";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

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

  if (!slug) return <p></p>;
  if (!project) return <p></p>;

  return (
    <>
      <div className="flex items-center mx-auto pt-12 px-4">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      </div>
      <div className="px-4 pb-6">
            <PortableText value={project.body} />
          </div>
      <div className="flex items-center mx-auto">
        

        <div className="space-y-6 px-4">
          {project.gallery?.map((img, i) => (
            <Image
              key={i}
              src={img.asset.url}
              alt=""
              width={900}
              height={600}
            />
          ))}
        </div>
      </div>
    </>
  );
}
