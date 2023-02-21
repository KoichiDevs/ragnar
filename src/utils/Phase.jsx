import React from 'react'
import { motion } from 'framer-motion'

const Phase = ({content}) => {
    return (
        <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className="sm:w-[20rem] w-[18rem] h-[25rem] relative">
            <img src="/paper.webp" alt="paper" className=" absolute w-full h-full" />
            <div className='w-full h-full relative z-10 px-12 text-sm text-center text-black font-medium poppins py-14 flex items-center justify-center'>
                <p className="mt-0">{content}</p>
            </div>
        </motion.div>
    )
}

export default Phase