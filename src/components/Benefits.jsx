import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  'Faster gaming',
  'Zero stutter',
  'Lower input latency',
  'Cooler performance',
  'Smooth multitasking',
]

export default function Benefits() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_40%_0%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Benefits</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((b) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-cyan-100 backdrop-blur-xl shadow-[0_0_24px_rgba(56,189,248,0.15)]"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
