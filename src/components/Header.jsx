'use client'

import { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import MenuOverlay from './MenuOverlay'
import Lenis from 'lenis'
import Link from 'next/link'

let lenisInstance = null

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!lenisInstance) {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      })

      const raf = (time) => {
        lenisInstance.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    if (open) {
      lenisInstance.stop()
    } else {
      lenisInstance.start()
    }
  }, [open])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 right-14 z-[9999]">
      {!scrolled ? (
        <nav className="flex gap-6 text-lg font-light text-black font-montserrat">
          {/* Texto Menu Navbar */}
          <Link href="/">Inicio</Link>
          <Link href="proyectos">Estudio</Link>
          <Link href="journal">Proyectos</Link>
          <Link href="contacto">Contacto</Link>
        </nav>
      ) : (
        <Hamburger open={open} setOpen={setOpen} />
      )}

      <MenuOverlay open={open} setOpen={setOpen} />
    </header>
  )
}
