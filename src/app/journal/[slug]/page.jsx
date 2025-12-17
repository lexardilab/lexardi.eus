'use client' // ⚠️ Esto hace que sea un Client Component

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { sanityClient, urlFor } from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

export default function JournalPostPage() {
  const { slug } = useParams() // Recogemos el slug de la URL
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

  if (loading) return <p>Cargando post...</p>
  if (!post) return <p>Post no encontrado</p>

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {post.mainImage && (
        <div className="w-full h-64 relative mb-6">
          <Image
            src={urlFor(post.mainImage).width(800).height(400).url()}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <PortableText value={post.body} />
    </main>
  )
}
