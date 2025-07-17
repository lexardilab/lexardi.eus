'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Reveal({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}
