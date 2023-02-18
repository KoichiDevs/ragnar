import React from 'react'
import { motion } from 'framer-motion'

const Phase = () => {
    return (
        <motion.div initial={{opacity: 0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className="sm:w-[20rem] w-[18rem] h-[25rem] relative">
            <img src="/paper.webp" alt="paper" className=" absolute w-full h-full" />
            <div className='w-full h-full relative z-10 px-12 text-sm text-center text-black font-medium poppins py-14'>
                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
        </motion.div>
    )
}

export default Phase