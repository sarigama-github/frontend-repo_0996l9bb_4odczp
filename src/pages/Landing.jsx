import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header (minimal) */}
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold">Windows Fix Mastery</div>
          <nav className="text-sm text-gray-600 space-x-6">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#why" className="hover:text-gray-900">Why</a>
            <a href="#testimonials" className="hover:text-gray-900">Reviews</a>
            <Link to="/sales" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50">Get the Guide</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Make Your Windows Faster, Smoother, and More Stable</h1>
          <p className="mt-3 text-gray-600">A step-by-step optimization blueprint for beginners.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/sales" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20">Get the Guide</Link>
          </div>
          <p className="mt-2 text-xs text-gray-500">Instant download — No technical skills needed</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Fix hidden system issues', desc: 'Address silent bottlenecks that slow your PC.' },
            { title: 'Boost FPS & reduce lag', desc: 'Practical tweaks for smoother gaming.' },
            { title: 'Speed up startup & multitasking', desc: 'Trim background load for a snappier desktop.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why this guide */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Why this guide</h2>
            <p className="text-gray-600">Windows slows down over time due to unnecessary background tasks, outdated drivers, fragmented settings, and services you don’t need. This guide simplifies safe cleanup and tuning so you can get reliable speed without risky tweaks.</p>
          </div>
          <div>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Background processes consuming resources</li>
              <li>Misconfigured power and graphics settings</li>
              <li>Outdated drivers and runtimes</li>
              <li>Startup bloat and scheduled tasks</li>
              <li>Temporary files and cache buildup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">What users say</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Startup dropped from 90s to ~25s. Very clear steps.',
            'Noticeable FPS improvement in two games I tested.',
            'Simple and safe. I liked that nothing felt risky.',
          ].map((quote, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-700">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email capture */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Get a free checklist: 10 Quick Windows Fixes</h3>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" required placeholder="Enter your email" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20">Send Me the Checklist</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Windows Fix Mastery</p>
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Support</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
