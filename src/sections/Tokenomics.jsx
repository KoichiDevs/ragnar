import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Tokenomics = () => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.7})

    const variant = {
        initial: {

        },
        animate: {

            transition: {
                delay: 0.05,
                staggerChildren: 0.09,
                duration: 1.5
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
            opacity: 1,
            transition: {
                duration: 1.5
            }
        },

    }

    return (
        <section className='w-full h-auto py-32 lg:px-32 px-10 bg-tokenbg relative' ref={ref} id="tokenomics">
            <div className='max-w-full mx-auto w-full'>
                <div className="text-white text-center lg:text-left w-fit">
                    <motion.h1 variants={variant} initial="initial" animate={inView ? "animate" : ""} className='font-kingvoon md:text-6xl text-4xl'>
                        <motion.span  variants={childVariants}>T</motion.span>
                        <motion.span  variants={childVariants}>o</motion.span>
                        <motion.span  variants={childVariants}>k</motion.span>
                        <motion.span  variants={childVariants}>e</motion.span>
                        <motion.span  variants={childVariants}>n</motion.span>
                        <motion.span  variants={childVariants}>o</motion.span>
                        <motion.span  variants={childVariants}>m</motion.span>
                        <motion.span  variants={childVariants}>i</motion.span>
                        <motion.span  variants={childVariants}>c</motion.span>
                        <motion.span  variants={childVariants}>s</motion.span>
                    </motion.h1>
                    <motion.h4 initial={{opacity: 0}} animate={ inView ? {opacity: 1} : {}} transition={{duration: 1, delay: 0.4}} className='text-4xl font-sharp text-center mt-4'>5% Buy and sell</motion.h4>
                </div>

                <img src="/token.webp" alt="Token" className="absolute bottom-0 right-0 lg:w-[50vh] w-[30vh] md:opacity-100 opacity-20" />
            </div>


        </section>
    )
}

export default Tokenomics