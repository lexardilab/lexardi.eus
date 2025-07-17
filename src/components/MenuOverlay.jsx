'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hamburger from './Hamburger' // Asegúrate de importar correctamente
import { Instagram, Linkedin, Dribbble } from 'lucide-react'

const navLinks = ['Inicio', 'Estudio', 'Proyectos', 'Contacto']
const socials = [
  { href: '#', icon: <Instagram size={32} /> },
  { href: '#', icon: <Linkedin size={32} /> },
  { href: '#', icon: <Dribbble size={32} /> },
]

export default function MenuOverlay({ open, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-white text-black z-50 px-8 md:px-20 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Botón Hamburger (como cierre) */}
          <div className="fixed top-4 right-15">
            <Hamburger open={open} setOpen={setOpen} color="black" />
          </div>

          <div className="grid md:grid-cols-2 h-full gap-12">
            {/* Left: Navigation */}
            <div className="flex flex-col justify-center space-y-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-[12vw] md:text-[6vw] font-semibold leading-none group overflow-hidden"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:opacity-60">
                    {link}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Right: Contact info and socials */}
            <motion.div
              className="flex flex-col justify-end pb-4 space-y-8 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex pt-6">
                {socials.map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 uppercase text-xs tracking-wider hover:opacity-60 transition"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <div className="px-2">
                <p className="uppercase font-semibold text-xs tracking-wide mb-2">Email</p>
                <a href="mailto:lexardi@lexardi.eus" className="hover:underline">lexardi@lexardi.eus</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
