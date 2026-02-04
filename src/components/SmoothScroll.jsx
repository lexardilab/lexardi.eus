'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Inicialización solo en cliente
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    })

    // Sincronización manual del Frame Rate
    let rafId;
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Ajuste de altura tras carga de fuentes/imágenes
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize()
    })
    resizeObserver.observe(document.body)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
    }
  }, [])

  return <div id="smooth-wrapper">{children}</div>
}