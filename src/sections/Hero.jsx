import React from 'react'
import Nav from '../utils/Nav'
import { motion } from 'framer-motion'

const Hero = () => {

    const variant = {
        initial: {

        },
        animate: {

            transition: {
                delay: 0.05,
                staggerChildren: 0.09,
                duration: 2
            }
        },

    }

    const childVariants = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 0.8,
            transition: {
                duration: 2
            }
        },

    }

    return (
        <section className='w-full h-screen bg-hero py-20 flex items-center relative'>
            <Nav />

            <div className='px-10 2xl:px-20 w-fit h-fit text-white lg:text-left text-center mx-auto lg:mx-0'>
                <div className='relative z-10'>
                    <motion.h1 variants={variant} initial="initial" animate="animate"  className='font-kingvoon lg:text-8xl text-5xl'>
                        <motion.span  variants={childVariants}  className='lg:text-9xl text-7xl'>R</motion.span>
                        <motion.span  variants={childVariants} >A</motion.span>
                        <motion.span  variants={childVariants} >G</motion.span>
                        <motion.span  variants={childVariants} >N</motion.span>
                        <motion.span  variants={childVariants} >A</motion.span>
                        <motion.span  variants={childVariants}  className='lg:text-9xl text-7xl'>R</motion.span>
                    </motion.h1>
                    <motion.h2 initial={{opacity: 0}} animate={{opacity: 0.8}} transition={{duration: 1, delay: 0.4}} className='font-kingvoon opacity-70 lg:text-4xl text-2xl'>THE MEDIEVAL VIKING TOKEN</motion.h2>
                    <motion.p  initial={{opacity: 0}} animate={{opacity: 0.8}} transition={{duration: 1, delay: 0.6}} className='font-poppins opacity-60 max-w-[45rem] lg:mt-7 mt-4 lg:text-lg md:text-sm text-xs'>
                        It is a time of Gods, a time of war, where friendship is tested and enemies are made. This is the story of Ragnar, legend to his people and friend to Floki. Their friendship being tested through lies, battles and betrayals. Only true friendships can endure these times and only true warriors are forged in the fire.
                    </motion.p>

                    <motion.div initial={{opacity: 0}} animate={{opacity: 0.8}} transition={{duration: 1, delay: 0.8}} className='flex items-center gap-x-4 mt-10 relative z-10 mx-auto w-fit lg:mx-0'>
                        <button className='px-8 py-3 bg-button font-sharp rounded-full hover:bg-buttonHover transition-colors ease-in-out duration-300'>
                            BUY TOKEN
                        </button>

                        <button className='px-8 py-3 bg-button font-sharp rounded-full hover:bg-buttonHover transition-colors ease-in-out duration-300'>
                            CHARTS
                        </button>
                    </motion.div>
                </div>


                <img src="/hero.webp" alt="Hero" className=" absolute bottom-0 right-0 w-[90vh]" />

            </div>
        </section>
    )
}

export default Hero
