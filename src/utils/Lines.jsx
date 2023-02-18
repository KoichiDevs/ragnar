import React from 'react'

const Lines = ({ num, index }) => {
    return (
        <div className='w-full h-full relative'>
            <div className='absolute h-10 w-10 rounded-full bg-sliderorange flex items-center justify-center text-black font-bold font-poppins z-10 transition-all ease-in-out duration-300' style={index >= parseInt(num - 1) ? {opacity: "100%", scale: "1"} : {opacity: "50%", scale: "0.7"}}>
                {num}
            </div>
            <div className='absolute h-[2px] w-0 rounded-full bg-sliderorange top-0 bottom-0 my-auto left-0 transition-all ease-in-out duration-500' style={index >= parseInt(num) ? { width: "100%" } : {}}></div>
        </div>
    )
}

export default Lines