import React from 'react'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight sm:text-4xl">Premium Access</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-cyan-100/75">Instant download. Lifetime updates. No fluff—only performance.</p>

        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.25),inset_0_0_45px_rgba(34,211,238,0.15)]">
          <div className="absolute -inset-36 -z-10 rounded-[36px] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(34,211,238,0.2),rgba(99,102,241,0.15),rgba(34,211,238,0.2))] blur-3xl" />

          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">Windows Fix Mastery</h3>
              <p className="mt-1 text-cyan-100/70">The Ultimate System Optimization Blueprint</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">$39</span>
              </div>
              <p className="text-xs text-cyan-100/60">One-time payment</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <a href="#buy" className="group relative inline-flex items-center gap-3 rounded-full bg-cyan-400/10 px-8 py-4 text-lg font-semibold text-cyan-100 backdrop-blur-md transition-all duration-300 hover:text-white">
              <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-80 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 rounded-full ring-2 ring-cyan-400/50 shadow-[0_0_24px_rgba(34,211,238,0.6),inset_0_0_22px_rgba(34,211,238,0.35)]" />
              <span className="relative z-10">Download Now</span>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-cyan-100/70 backdrop-blur-md">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-cyan-200 ring-1 ring-white/10">7</span>
              <div>
                <p className="font-semibold text-cyan-100">7-Day Guarantee</p>
                <p className="text-[11px] text-cyan-100/70">Full refund if you don’t notice improvements.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-cyan-100/80 sm:grid-cols-4">
            {['Secure Checkout', 'Instant Access', 'Lifetime Updates', 'Trusted by Gamers'].map((t) => (
              <div key={t} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
