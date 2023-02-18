import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Phase from '../utils/Phase';
import Slider from 'react-slick';
import Lines from '../utils/Lines';

const Roadmap = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const handleAfterChange = (currentSlideIndex) => {
        setCurrentSlideIndex(currentSlideIndex);
        console.log('Current Slide Index: ', currentSlideIndex);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleAfterChange,
    };


    return (
        <section className='w-full h-auto py-20 px-10 bg-roadmap bg-center text-white bg-cover' id="roadmap">
            <h1 className='text-center font-kingvoon text-6xl mt-10'>ROADMAP</h1>

            <div className='mx-auto w-fit h-auto mt-10 lg:max-w-[20.5rem] max-w-[18.5rem]'>
                <Slider {...settings}>
                    <Phase />
                    <Phase />
                    <Phase />
                    <Phase />
                </Slider>

            </div>

            <div className='w-full h-10 mt-14 flex'>
                <Lines num="1" index={currentSlideIndex}/>
                <Lines num="2" index={currentSlideIndex}/>
                <Lines num="3" index={currentSlideIndex}/>
                <div className='w-[10rem] h-full relative transition-all ease-in-out duration-300' style={ currentSlideIndex === 3 ? {opacity: "100%", scale: "1"} : {opacity: "50%", scale: "0.7"}}>
                    <div className='absolute h-10 w-10 rounded-full bg-sliderorange flex items-center justify-center text-black font-bold font-poppins z-10 '>
                        4
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Roadmap