import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const Nav = () => {

    const list = ['home', 'about', 'tokenomics', 'roadmap']
    const [active, setActive] = useState(false)

    const setToggle = () => {
        setActive(curr => !curr)
    }

    return (
        <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 0.7 }} className='w-full h-full pb-10 lg:h-auto px-10 py-7 text-white absolute z-20 top-0 left-0 font-sharp'>
            <div className="max-w-[1700px] w-full h-auto flex items-center justify-center mx-auto">
                <ul className='items-center gap-x-12 flex lg:relative absolute right-0 lg:w-auto lg:h-auto w-full h-full top-0 justify-center lg:justify-center flex-col lg:flex-row bg-black lg:bg-transparent gap-y-20 text-xl lg:text-sm opacity-0 transition-all ease-in-out duration-300 lg:opacity-100 lg:pointer-events-auto pointer-events-none' style={active ? { opacity: "100%", pointerEvents: "auto" } : {}}>
                    <li className='absolute lg:hidden block text-4xl top-10 right-10'><RiCloseFill onClick={setToggle} /></li>
                    {list.map((items, i) => {
                        return (
                            <div className='flex flex-col items-center gap-y-[5px] select-none' key={items} >
                                <a href={`#${items}`} className="peer">
                                    <li className={`uppercase font-medium cursor-pointer peer hover:text-white transition-colors ease-in-out duration-300`} onClick={() => { setActive(false) }}>{items}</li>
                                </a>
                                <div className='h-[2px] w-0 bg-header peer-hover:w-full transition-all ease-in-out duration-300'></div>
                            </div>
                        )
                    })}
                </ul>

                <motion.img initial={{width: "0rem"}} animate={{width: "25rem"}} transition={{duration: 0.7}} src="/line.webp" alt="line" className="absolute bottom-[-1rem] lg:block hidden pointer-events-none w-[25rem]" />

                <HiMenuAlt3 className='text-4xl block lg:hidden ml-auto' onClick={setToggle} />
            </div>
        </motion.nav>
    )
}

export default Nav