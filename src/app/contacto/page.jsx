'use client'
import Header from '@/components/Header'  
import { useState } from 'react'
import { motion } from 'framer-motion'
import Accordion from '@/components/ContactAcordion'


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
      <section className="min-h-screen w-full flex flex-col md:flex-row bg-white">
        {/* Imagen lado izquierdo */}
        <div className="md:w-1/2 w-full overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Imagen contacto"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="object-cover w-full h-[60vh] md:h-screen"
          />
        </div>

        {/* Formulario lado derecho */}
        <div className="md:w-1/2 w-full bg-gray-100 flex flex-col justify-center p-16">
          <h1 className="text-5xl font-mono font-bold mb-10 text-gray-900 leading-tight">
            Contáctanos
          </h1>
          <p className="mb-12 text-gray-700 max-w-lg font-mono text-lg leading-relaxed">
            ¿Tienes alguna pregunta o proyecto en mente? Cuéntanos y nos pondremos en contacto contigo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10 max-w-lg w-full font-mono">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700 text-lg">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 focus:border-black text-gray-900 text-lg py-3 placeholder-gray-500 outline-none transition"
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700 text-lg">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 focus:border-black text-gray-900 text-lg py-3 placeholder-gray-500 outline-none transition"
                placeholder="tu@email.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700 text-lg">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="7"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 focus:border-black text-gray-900 text-lg py-3 placeholder-gray-500 outline-none resize-none transition"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={status === 'sending'}
              className="bg-black text-white font-semibold px-12 py-4 rounded-md hover:bg-gray-900 transition max-w-max"
            >
              {status === 'sending' ? 'Enviando...' :
               status === 'success' ? '¡Enviado!' :
               status === 'error' ? 'Error, inténtalo' :
               'Enviar mensaje'}
            </motion.button>
          </form>
        </div>
      </section>
      <Accordion />
    </>
  )
}
