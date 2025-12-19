'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { sanityClient, urlFor } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default function JournalPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    setLoading(true)
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          mainImage,
          publishedAt
        }`,
        { slug }
      )
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <p className="p-8">Cargando post...</p>
  if (!post) return <p className="p-8">Post no encontrado</p>

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <PortableText value={post.body} />

      {post.mainImage && (
        <div className="my-10">
          <Image
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            width={1200}
            height={1800}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      )}
    </main>
  )
}
