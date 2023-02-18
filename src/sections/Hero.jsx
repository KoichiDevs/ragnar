import React from 'react'
import Nav from '../utils/Nav'

const Hero = () => {
    return (
        <section className='w-full h-screen bg-hero py-20 flex items-center relative'>
            <Nav />

            <div className='px-10 w-fit h-fit text-white lg:text-left text-center'>
                <div className='relative z-10'>
                    <h1 className='font-kingvoon opacity-70 lg:text-8xl text-5xl'>
                        <span className='lg:text-9xl text-7xl'>R</span>
                        AGNA
                        <span className='lg:text-9xl text-7xl'>R</span>
                    </h1>
                    <h2 className='font-kingvoon opacity-70 lg:text-4xl text-2xl'>THE MEDIEVAL VIKING TOKEN</h2>
                    <p className='font-poppins opacity-60 max-w-[45rem] lg:mt-7 mt-4 lg:text-lg md:text-sm text-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className='flex items-center gap-x-4 mt-10 relative z-10 mx-auto w-fit lg:mx-0'>
                        <button className='px-8 py-3 bg-button font-sharp rounded-full hover:bg-buttonHover transition-colors ease-in-out duration-300'>
                            BUY TOKEN
                        </button>

                        <button className='px-8 py-3 bg-button font-sharp rounded-full hover:bg-buttonHover transition-colors ease-in-out duration-300'>
                            CHARTS
                        </button>
                    </div>
                </div>



                <img src="/line.webp" alt="line" className="absolute top-10 z-10 left-10 lg:hidden block w-[13rem]" />
                <img src="/hero.webp" alt="Hero" className=" absolute bottom-0 right-0 w-[90vh]" />

            </div>
        </section>
    )
}

export default Hero