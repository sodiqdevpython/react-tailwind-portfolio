import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Interestings from './components/Interestings'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <div className="absolute overflow-x-hidden top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"><Navbar />
        <Hero />
        <Interestings />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
