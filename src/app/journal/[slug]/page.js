import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client' // Ajusta el path si es distinto
import Image from 'next/image'
import { notFound } from 'next/navigation'

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage {
      asset-> {
        url
      }
    },
    body
  }
`

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`)
  return posts.map(post => ({
    slug: post.slug.current
  }))
}

export default async function PostPage({ params }) {
  const post = await client.fetch(query, { slug: params.slug })

  if (!post) return notFound()

  return (
    <article className="p-4 mx-auto prose">
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.title}
          width={800}
          height={400}
        />
      )}
      <div>
        {/* Aquí podrías usar PortableText para mostrar el contenido formateado */}
      </div>
    </article>
  )
}
