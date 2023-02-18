import React from 'react'
import About from './sections/About'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Roadmap from './sections/Roadmap'
import Tokenomics from './sections/Tokenomics'

const App = () => {
  return (
    <div className='bg-hero'>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer/>
    </div>
  )
}

export default App