import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Chapters', desc: 'Step-by-step walkthroughs' },
  { title: 'Tools', desc: 'Curated optimization utilities' },
  { title: 'Checklists', desc: 'Bulletproof action sequences' },
  { title: 'Bonus Files', desc: 'Exclusive scripts and presets' },
]

export default function WhatYouGet() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">What You Get</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.18),transparent_50%)] blur-2xl" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-cyan-100">{it.title}</h3>
                <p className="mt-1 text-sm text-cyan-100/70">{it.desc}</p>
                {/* Blue ember */}
                <span className="absolute -right-2 -top-2 h-2 w-2 animate-ping rounded-full bg-cyan-400 shadow-[0_0_14px_3px_rgba(56,189,248,0.8)]" />
                <span className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-cyan-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
