import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const options = {
        triggerOnce: true,
        threshold: 0.5
    }

    const [imageRef, imageView] = useInView(options)
    const [titleRef, titleView] = useInView(options)
    const [descRef, descView] = useInView(options)



    return (
        <section className='w-full h-auto py-20 flex items-center justify-center bg-aboutbg bg-center bg-cover text-white pb-32' id="about">
            <div className='mx-auto flex w-fit mt-10 px-10 justify-between lg:flex-row flex-col items-center'>
                <motion.img initial={{ y: 100, opacity: 0 }} animate={imageView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} src="/about.webp" alt="About" className="2xl:w-[75vh] w-[65vh] mx-auto lg:ml-0 md:ml-14 ml-8" ref={imageRef} />
                <div className="w-full flex flex-col text-center lg:text-left">
                    <motion.h1 initial={{ x: 100, opacity: 0 }} animate={titleView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className='text-5xl font-kingvoon lg:max-w-[35rem] max-w-[30rem] mx-auto lg:mx-0' ref={titleRef}>FROM THE LAND OF VIKINGS</motion.h1>

                    <motion.p initial={{ x: 100, opacity: 0 }} animate={titleView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.05 }}  className='max-w-[30rem] font-poppins mt-12 lg:mt-10 mx-auto lg:mx-0 2xl:leading-7 md:text-md text-sm' ref={descRef}>
                        But Floki was tempted by power, not recognizing king or friend. He betrayed Ragnar, almost to his death.   Now Ragnar seeks to repay Floki for his treachery in kind.  Being both wise and angry,  Ragnar is torn between revenge and his lifelong friendship with Floki.<br /> <br />

                        He must choose. Give into his rage and kill his lifelong friend or choose the wise path of helping Floki out of the pits of hell and be the king of all Vikings.
                    </motion.p>

                <motion.div initial={{opacity: 0}} animate={{opacity: 0.8}} transition={{duration: 1, delay: 0.8}} className='flex items-center gap-x-4 mt-10 relative z-10 mx-auto w-fit lg:mx-0'>
                        <button className='px-8 py-3 bg-button font-sharp rounded-full hover:bg-buttonHover transition-colors ease-in-out duration-300'>
                            <a href="https://medium.com/@ragnarerc2023">READ MEDIUM</a>
                        </button>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
