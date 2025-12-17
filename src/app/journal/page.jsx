import { sanityClient, urlFor } from '../../lib/sanityClient'
import Link from 'next/link'
import Image from 'next/image'

export default async function JournalPage() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      mainImage
    }
  `)

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map(post => (
          <li key={post.slug} className="">
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
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
