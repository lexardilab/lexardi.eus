'use client'
import Header from '@/components/Header'  
import { useState } from 'react'
import { motion } from 'framer-motion'


export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await new Promise(r => setTimeout(r, 1000))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
<Header />
      <section className="flex flex-col w-full min-h-screen bg-white md:flex-row">
        {/* Imagen lado izquierdo */}
        <div className="w-full overflow-hidden md:w-1/2">
          <motion.img
            src="https://res.cloudinary.com/dxkxg2ivb/image/upload/v1753086813/blog.lexardi.xyz/IMG_6623_lf65pq.webp"
            alt="Imagen contacto"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="object-cover w-full h-[60vh] md:h-screen"
          />
        </div>

        {/* Formulario lado derecho */}
        <div className="flex flex-col justify-center w-full p-16 bg-white md:w-1/2">
          <h1 className="mb-10 font-mono text-5xl font-bold leading-tight text-gray-900">
            Contáctanos
          </h1>
          <p className="max-w-lg mb-12 font-mono text-lg leading-relaxed text-gray-700">
            ¿Tienes alguna pregunta o proyecto en mente? Cuéntanos y nos pondremos en contacto contigo.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-10 font-mono">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg text-gray-700">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full py-3 text-lg text-gray-900 placeholder-gray-500 transition bg-transparent border-b border-gray-400 outline-none focus:border-black"
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-lg text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full py-3 text-lg text-gray-900 placeholder-gray-500 transition bg-transparent border-b border-gray-400 outline-none focus:border-black"
                placeholder="tu@email.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-lg text-gray-700">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="7"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full py-3 text-lg text-gray-900 placeholder-gray-500 transition bg-transparent border-b border-gray-400 outline-none resize-none focus:border-black"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={status === 'sending'}
              className="px-12 py-4 font-semibold text-white transition bg-black rounded-md hover:bg-gray-900 max-w-max"
            >
              {status === 'sending' ? 'Enviando...' :
               status === 'success' ? '¡Enviado!' :
               status === 'error' ? 'Error, inténtalo' :
               'Enviar mensaje'}
            </motion.button>
          </form>
        </div>
      </section>
    </>
  )
}
