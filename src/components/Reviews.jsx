import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Alex G.', quote: 'Instant 30-40% FPS uplift. My games feel brand new.', role: 'Competitive Gamer' },
  { name: 'Priya R.', quote: 'Crashes gone. PC feels laser-focused now.', role: 'Video Editor' },
  { name: 'Marco D.', quote: 'Boot time cut in half. Multitasking is smooth.', role: 'Developer' },
]

export default function Reviews() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_90%_40%,rgba(165,180,252,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">What Users Say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -inset-24 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(56,189,248,0.15),rgba(99,102,241,0.12),rgba(56,189,248,0.15))] blur-3xl" />
              <p className="text-cyan-100/85">“{t.quote}”</p>
              <div className="mt-4 text-sm text-cyan-200/90">{t.name}</div>
              <div className="text-xs text-cyan-100/60">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
