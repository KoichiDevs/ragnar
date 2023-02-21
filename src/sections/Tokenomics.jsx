import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Popup from '../utils/Popup'
import { BiClipboard } from 'react-icons/bi'

const Tokenomics = () => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.7 })
    const [contactAddress, setContact] = useState('0xf92c421115b1f11203abcfce78eed1aadad3e0a5')
    const [clicked, setClicked] = useState(false)

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

    const handleCopy = () => {
        if (!clicked) {
            navigator.clipboard.writeText(contactAddress)
            setClicked(true)

            setTimeout(() => {
                setClicked(false)

            }, 1000);
        }


    }

    return (
        <section className='w-full h-auto py-32 lg:px-32 px-10 bg-tokenbg relative' ref={ref} id="tokenomics">
            {clicked ? <Popup /> : null}
            
            <div className='max-w-full mx-auto w-full'>
                <div className="text-white text-center lg:text-left max-w-[40rem]">
                    <motion.h1 variants={variant} initial="initial" animate={inView ? "animate" : ""} className='font-kingvoon md:text-6xl text-4xl text-center'>
                        <motion.span variants={childVariants}>T</motion.span>
                        <motion.span variants={childVariants}>o</motion.span>
                        <motion.span variants={childVariants}>k</motion.span>
                        <motion.span variants={childVariants}>e</motion.span>
                        <motion.span variants={childVariants}>n</motion.span>
                        <motion.span variants={childVariants}>o</motion.span>
                        <motion.span variants={childVariants}>m</motion.span>
                        <motion.span variants={childVariants}>i</motion.span>
                        <motion.span variants={childVariants}>c</motion.span>
                        <motion.span variants={childVariants}>s</motion.span>
                    </motion.h1>
                    <motion.h4 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }} className='2xl:text-3xl text-2xl font-sharp text-center mt-4'>4% Buy and sell</motion.h4>
                    <motion.h4 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }} className='text-2xl font-sharp text-center mt-4 2xl:text-3xl'>1 Trillion Supply</motion.h4>
                    <motion.h4 className='text-2xl font-sharp text-center 2xl:text-3xl truncate mt-4'>{contactAddress}</motion.h4>

                    <button className='px-5 py-3 bg-button rounded-lg flex items-center gap-x-2 mx-auto mt-4' onClick={handleCopy}>
                        <BiClipboard className='text-2xl' />
                        <p>
                            Copy Contact Address
                        </p>
                    </button>

                </div>

                <img src="/token.webp" alt="Token" className="absolute bottom-0 right-0 lg:w-[50vh] w-[30vh] md:opacity-100 opacity-20" />
            </div>

        </section>
    )
}

export default Tokenomics
