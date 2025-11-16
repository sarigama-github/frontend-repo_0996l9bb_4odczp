import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import WhatYouGet from './components/WhatYouGet'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Bonus from './components/Bonus'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StickyBar />
      <Hero />
      <Problem />
      <Solution />
      <WhatYouGet />
      <Benefits />
      <Pricing />
      <Reviews />
      <Bonus />
      <Footer />
    </div>
  )
}

export default App
