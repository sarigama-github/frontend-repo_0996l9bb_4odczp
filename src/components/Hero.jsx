import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glowText = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [showSpline, setShowSpline] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Only render Spline on larger screens without reduced motion and when section is in view
    if (prefersReducedMotion) return
    if (typeof window === 'undefined') return
    if (window.innerWidth < 1024) return

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setShowSpline(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <section ref={containerRef} className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white">
      {/* Background: lightweight by default, Spline only when allowed */}
      <div className="absolute inset-0">
        {showSpline ? (
          <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(56,189,248,0.18),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(99,102,241,0.14),transparent),radial-gradient(1000px_500px_at_50%_90%,rgba(34,211,238,0.12),transparent)]" />
        )}
      </div>

      {/* Subtle overlays (reduced intensity) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 pt-24 text-center sm:pt-32">
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-cyan-200/90 backdrop-blur-sm shadow-[0_0_16px_rgba(34,211,238,0.18)]"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_1px_rgba(34,211,238,0.6)]" />
          FUTURISTIC OPTIMIZATION SYSTEM
        </motion.div>

        <motion.h1
          variants={glowText}
          initial="initial"
          animate="animate"
          className="text-4xl font-extrabold leading-[1.08] sm:text-6xl md:text-7xl"
          style={{ textShadow: '0 0 12px rgba(56,189,248,0.28), 0 0 28px rgba(59,130,246,0.18)' }}
        >
          <span className="bg-gradient-to-r from-[#7dd3fc] via-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Turn Your Slow Windows Into a Performance Monster
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4 }}
          className="max-w-2xl text-balance text-base text-cyan-100/85 sm:text-lg"
        >
          Fix errors, boost FPS, and unlock peak performance instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.35 }}
          className="mt-2"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-3 rounded-full bg-cyan-400/10 px-8 py-4 text-lg font-semibold text-cyan-100 transition-colors duration-300 hover:text-white focus:outline-none"
          >
            <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-70 blur-lg transition-opacity duration-300 group-hover:opacity-90" />
            <span className="absolute inset-0 rounded-full ring-1 ring-cyan-400/40" />
            <span className="relative z-10">Get Windows Fix Mastery</span>
          </a>
        </motion.div>

        {/* Hero feature chips - reduced blur/shadow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="relative mt-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white/5 p-5 backdrop-blur-sm"
          style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.14), inset 0 0 32px rgba(56,189,248,0.10)' }}
        >
          <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['FPS Boost', 'Higher, steadier frame rates'],
              ['Error Fix', 'Eliminate bottlenecks'],
              ['Latency', 'Sharper input timing'],
              ['Cooling', 'Lower temps under load'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-sm">
                <p className="text-sm text-cyan-200/80">{title}</p>
                <p className="text-xs text-cyan-100/65">{subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
