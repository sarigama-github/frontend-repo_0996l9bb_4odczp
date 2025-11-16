import React from 'react'

export default function Sales() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-semibold">Windows Fix Mastery</div>
          <a href="#pricing" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50">Download Now</a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Windows Fix Mastery</h1>
          <p className="mt-3 text-gray-600">A complete performance optimization system for Windows users.</p>
          <div className="mt-6">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20">Download Now</a>
          </div>
          <p className="mt-2 text-xs text-gray-500">Instant access — One-time payment</p>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">What's going wrong</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700 list-disc pl-5">
          {[
            'FPS drops',
            'Random stutter & lag',
            'High RAM & CPU usage',
            'Driver & runtime conflicts',
            'Slow startup',
            'System errors & crashes',
          ].map((i) => (<li key={i}>{i}</li>))}
        </ul>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">How the blueprint fixes it</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm text-gray-700 list-disc pl-5">
          {[
            'Safe methods',
            'No complicated tools',
            'Works on laptops & PCs',
            'Clear breakdown of each step',
          ].map((i) => (<li key={i}>{i}</li>))}
        </ul>
      </section>

      {/* Included */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">What’s included</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Optimization Basics',
            'FPS Boosting',
            'CPU/GPU Tuning',
            'RAM Management',
            'Background Process Cleanup',
            'Error & Crash Fixes',
            'Power & Stability Tweaks',
            'Bonus Tools',
          ].map((title) => (
            <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700 list-disc pl-5">
          {[
            'Faster Windows performance',
            'Higher gaming FPS',
            'Smoother multitasking',
            'Reduced input delay',
            'Lower temps & better stability',
          ].map((i) => (<li key={i}>{i}</li>))}
        </ul>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm text-center">
          <h3 className="text-lg font-semibold">One-time Purchase</h3>
          <p className="mt-2 text-2xl font-semibold">₹XXX / $XX</p>
          <p className="mt-1 text-xs text-gray-500">Includes 7-Day Satisfaction Guarantee</p>
          <div className="mt-6">
            <a href="/thank-you" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20">Get Instant Access</a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Very clear, safe, and effective steps.',
            'My average FPS went up and stutters reduced.',
            'The checklists make it easy for beginners.',
          ].map((quote, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-700">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Bonuses included</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {['FPS Tricks Pack', 'Thermal Control Guide', 'Crash & Freeze Fix Protocol'].map((b) => (
            <div key={b} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"><h3 className="font-medium">{b}</h3></div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4">
          {[
            ['Is this safe for beginners?', 'Yes. Steps are simple and non-destructive.'],
            ['Will this work on laptops and desktops?', 'Yes — the methods cover both.'],
            ['Do I need paid tools?', 'No. Built-in tools and free utilities are prioritized.'],
            ['How long does it take?', 'You can see improvements in under an hour.'],
            ['What if I get stuck?', 'Support is available to help you through steps.'],
            ['Can I get a refund?', 'Covered by a 7-day satisfaction policy.'],
          ].map(([q, a]) => (
            <div key={q} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <p className="font-medium">{q}</p>
              <p className="mt-1 text-sm text-gray-700">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Windows Fix Mastery</p>
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-900">Support</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Refund Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
