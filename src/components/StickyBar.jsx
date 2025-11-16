import React, { useEffect, useState } from 'react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} `}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative mt-3 flex items-center justify-between rounded-full border border-cyan-400/30 bg-black/60 px-4 py-2 text-cyan-100 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.25)]">
          <span className="text-sm">Windows Fix Mastery</span>
          <a href="#pricing" className="relative inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-80 blur-xl" />
            <span className="absolute inset-0 rounded-full ring-1 ring-cyan-400/50" />
            <span className="relative">Get It Now</span>
          </a>
        </div>
      </div>
    </div>
  )
}
