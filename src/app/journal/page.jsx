import { sanityClient, urlFor } from "../../lib/sanityClient";
import Link from "next/link";
import Image from "next/image";


export default async function JournalPage() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      title,
      subtitle,
      "slug": slug.current,
      mainImage
    }
  `);

  return (
    <main className="p-4 max mx-auto bg-[#A7AEB1] h-screen">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <li key={post.slug} className="">
            <h2 className="text-lg font-semibold mb-1 text-[#1d1d1d]">{post.title}</h2>
            <Link href={`/journal/${post.slug}`} className="block">
              {post.mainImage && (
                <div className="w-full flex items-center justify-center bg-gray-100">
                  <Image
                    src={urlFor(post.mainImage).width(1000).height(1500).url()}
                    alt={post.title}
                    width={1000}
                    height={800}
                    className=""
                  />
                </div>
              )}
              <div className="mt-1"><h2 className="font-poppins text-sm text-[#1d1d1d]">{post.subtitle}</h2></div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
