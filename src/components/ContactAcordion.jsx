import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    question: '¿Cuánto tiempo tarda un proyecto típico?',
    answer:
      'El tiempo depende del alcance y la complejidad, pero generalmente entre 4 y 8 semanas para proyectos estándar.',
  },
  {
    question: '¿Ofrecen soporte después de la entrega?',
    answer:
      'Sí, ofrecemos soporte y mantenimiento opcional para asegurar que tu proyecto funcione correctamente a largo plazo.',
  },
  {
    question: '¿Puedo solicitar cambios durante el desarrollo?',
    answer:
      'Por supuesto, pero recomendamos discutirlos para evaluar el impacto en el tiempo y el presupuesto.',
  },
]

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 px-6 md:px-0">
      {items.map((item, i) => (
        <div key={i} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between items-center py-4 text-left font-mono text-lg text-gray-900 hover:text-black transition"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              className="inline-block text-2xl font-bold"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden font-mono text-gray-700 text-base pb-6"
              >
                <p>{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
