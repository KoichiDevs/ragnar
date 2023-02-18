import React from 'react'
import About from './sections/About'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Roadmap from './sections/Roadmap'
import Tokenomics from './sections/Tokenomics'

const App = () => {
  return (
    <div className='bg-hero relative overflow-x-hidden'>
      <div className='w-2 h-2 absolute top-0 left-0' id="home"></div>
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Footer/>
    </div>
  )
}

export default App