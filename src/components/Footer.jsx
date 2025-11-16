import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-black py-12 text-cyan-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_45%)]" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="text-sm opacity-80">© {new Date().getFullYear()} Windows Fix Mastery</div>
        <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="text-sm opacity-80">All rights reserved</div>
      </div>
    </footer>
  )
}
