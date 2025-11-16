import React from 'react'
import { motion } from 'framer-motion'

export default function Problem() {
  const issues = [
    { title: 'Random Lag', desc: 'Stutters and freezes during gameplay' },
    { title: 'FPS Drops', desc: 'Unstable frame pacing ruins the experience' },
    { title: 'RAM Spikes', desc: 'Memory leaks and background hogs' },
    { title: 'Background Services', desc: 'Unnecessary tasks draining resources' },
    { title: 'Crashes', desc: 'System and app instability at critical moments' },
  ]

  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.15),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(0,149,255,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          What's Slowing You Down
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {issues.map((i) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              style={{ boxShadow: '0 0 0 1px rgba(255,0,95,0.15), 0 0 45px rgba(0,162,255,0.18) inset' }}
            >
              <div className="pointer-events-none absolute -inset-20 -z-10 bg-gradient-to-r from-rose-500/10 via-fuchsia-500/10 to-sky-500/10 blur-3xl transition-transform duration-700 group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-cyan-100">{i.title}</h3>
              <p className="mt-1 text-sm text-cyan-100/70">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
