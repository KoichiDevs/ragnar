import React from 'react'
import About from './sections/About'
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
    </div>
  )
}

export default App