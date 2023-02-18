import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'

const Footer = () => {
    return (
        <section className='w-full h-[20rem] py-16 bg-hero px-20 text-white relative'>
            <a href="#home" rel="no">
                <h1 className='font-kingvoon opacity-70 lg:text-8xl text-5xl text-center'>
                    <span className='lg:text-9xl text-7xl'>R</span>
                    AGNA
                    <span className='lg:text-9xl text-7xl'>R</span>
                </h1>
            </a>

            <div className='mx-auto w-fit mt-4 flex gap-x-6 text-4xl'>
                <a href="" target="_blank">
                    <SiTwitter className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>

                <a href="" target="_blank">
                    <FaTelegramPlane className='hover:scale-[1.1] cursor-pointer transition-all ease-in-out' />
                </a>


            </div>

            <p className='text-center absolute mx-auto left-0 right-0 bottom-4 text-xs font-poppins'>COPYRIGHT RAGNAR 2023. ALL RIGHT RESERVED.</p>

        </section>
    )
}

export default Footer