import React from 'react'
import { motion } from 'framer-motion'

const extras = [
  'Extra tools',
  'Automation scripts',
  'FPS booster presets',
  'Advanced guides',
]

export default function Bonus() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_0%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Bonus</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {extras.map((e) => (
            <motion.div
              key={e}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-cyan-100 backdrop-blur-xl"
            >
              {e}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
