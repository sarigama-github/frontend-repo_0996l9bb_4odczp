import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glowText = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle overlays and particles */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_60%_90%,rgba(99,102,241,0.15),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pt-28 text-center sm:pt-36">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-cyan-200/90 backdrop-blur-md shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]" />
          FUTURISTIC OPTIMIZATION SYSTEM
        </motion.div>

        <motion.h1
          variants={glowText}
          initial="initial"
          animate="animate"
          className="text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl"
          style={{
            textShadow:
              '0 0 16px rgba(56,189,248,0.35), 0 0 38px rgba(56,189,248,0.25), 0 0 64px rgba(59,130,246,0.25)',
          }}
        >
          <span className="bg-gradient-to-r from-[#6ee7ff] via-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
            Turn Your Slow Windows Into a Performance Monster
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-2xl text-balance text-base text-cyan-100/85 sm:text-lg"
        >
          Fix errors, boost FPS, and unlock peak performance instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-3 rounded-full bg-cyan-400/10 px-8 py-4 text-lg font-semibold text-cyan-100 backdrop-blur-md transition-all duration-300 hover:text-white focus:outline-none"
          >
            <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-80 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute inset-0 rounded-full ring-2 ring-cyan-400/50 shadow-[0_0_24px_rgba(34,211,238,0.6),inset_0_0_22px_rgba(34,211,238,0.35)]" />
            <span className="relative z-10">Get Windows Fix Mastery</span>
          </a>
        </motion.div>

        {/* Hero card with subtle flame trail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative mt-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white/5 p-5 backdrop-blur-xl"
          style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.18), 0 0 60px rgba(56,189,248,0.18) inset' }}
        >
          <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rotate-12 rounded-full bg-gradient-to-br from-sky-400/30 via-cyan-300/25 to-blue-500/20 blur-3xl" />
          <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['FPS Boost', 'Higher, steadier frame rates'],
              ['Error Fix', 'Eliminate bottlenecks'],
              ['Latency', 'Sharper input timing'],
              ['Cooling', 'Lower temps under load'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md">
                <p className="text-sm text-cyan-200/80">{title}</p>
                <p className="text-xs text-cyan-100/60">{subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
