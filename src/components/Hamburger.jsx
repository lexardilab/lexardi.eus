'use client'

import { motion } from 'framer-motion'

export default function Hamburger({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-10 h-10 relative flex items-center justify-center z-50"
    >
      {/* Línea superior */}
      <motion.span
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 0 : -6,
        }}
        transition={{ duration: 0.3 }}
        className="absolute w-20 h-[1px] bg-black rounded origin-center"
      />

      {/* Línea inferior */}
      <motion.span
        animate={{
          rotate: open ? -45 : 0,
          y: open ? 0 : 6,
        }}
        transition={{ duration: 0.3 }}
        className="absolute w-20 h-[1px] bg-black rounded origin-center"
      />
    </button>
  )
}
