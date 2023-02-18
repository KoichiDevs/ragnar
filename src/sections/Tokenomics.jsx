import React from 'react'

const Tokenomics = () => {
    return (
        <section className='w-full h-auto py-32 lg:px-32 px-10 bg-tokenbg relative'>
            <div className='max-w-full mx-auto w-full'>
                <div className="text-white text-center lg:text-left w-fit">
                    <h1 className='font-kingvoon md:text-6xl text-4xl'>Tokenomics</h1>
                    <h4 className='text-4xl font-sharp text-center mt-4'>5% Buy and sell</h4>
                </div>

                <img src="/token.webp" alt="Token" className="absolute bottom-0 right-0 lg:w-[50vh] w-[30vh] md:opacity-100 opacity-20" />
            </div>


        </section>
    )
}

export default Tokenomics