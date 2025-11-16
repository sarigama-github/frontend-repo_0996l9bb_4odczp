import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, Zap, Gauge } from 'lucide-react'

const steps = [
  { icon: Wrench, title: 'Diagnose', desc: 'Pinpoint errors and services causing slowdowns' },
  { icon: Zap, title: 'Optimize', desc: 'Apply proven tweaks and remove bottlenecks' },
  { icon: Gauge, title: 'Accelerate', desc: 'Lock in stable, high performance with safeguards' },
]

export default function Solution() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_90%_40%,rgba(165,180,252,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Your Blueprint</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-cyan-100/75">Follow a focused, 3-step flow to transform your system without guesswork.</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-100">{title}</h3>
              <p className="mt-2 text-sm text-cyan-100/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
