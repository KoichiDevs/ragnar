import React from 'react'

const About = () => {
    return (
        <section className='w-full h-auto py-20 flex items-center justify-center bg-aboutbg bg-center bg-cover text-white pb-32'>
            <div className='mx-auto flex w-fit mt-10 px-10 justify-between lg:flex-row flex-col items-center'>
                <img src="/about.webp" alt="About" className="2xl:w-[75vh] w-[65vh] mx-auto lg:ml-0 md:ml-14 ml-8" />
                <div className="w-full flex flex-col text-center lg:text-left">
                    <h1 className='text-5xl font-kingvoon lg:max-w-[35rem] max-w-[30rem] mx-auto lg:mx-0'>FROM THE LAND OF VIKINGS</h1>

                    <p className='max-w-[30rem] font-poppins mt-12 lg:mt-10 mx-auto lg:mx-0 2xl:leading-7 md:text-md text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/> <br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About