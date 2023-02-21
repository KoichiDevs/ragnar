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
                    <Phase content={<>
                        ❖ Branding Created <br /><br />
                        ❖ Website & Whitepaper Live <br /><br />
                        ❖ Stealth Launch <br /><br />
                        ❖ Social Channels Live <br /><br />
                        ❖ Viking Community Growth and Competitions
                    </>} />
                    <Phase content={<>
                        ❖ Social Media Marketing <br /><br />
                        ❖ Influencer Partnerships & AMAs <br /><br />
                        ❖ Token Listing Websites
                    </>} />
                    <Phase content={<>
                        ❖ Tier 2 CEX Listings and Tracking <br /><br />
                        ❖ Portfolio Tracker Live <br /><br />
                        ❖ Paid Media Campaigns <br /><br />
                        ❖ Roadmap Update
                    </>} />
                </Slider>

            </div>

            <div className='w-full h-10 mt-14 flex'>
                <Lines num="1" index={currentSlideIndex} />
                <Lines num="2" index={currentSlideIndex} />
                <div className='w-[10rem] h-full relative transition-all ease-in-out duration-300' style={currentSlideIndex === 2 ? { opacity: "100%", scale: "1" } : { opacity: "50%", scale: "0.7" }}>
                    <div className='absolute h-12 w-12 rounded-full flex items-center justify-center text-black font-bold font-poppins z-10 '>
                        <img src="/shield.webp" alt="Shield" className="absolute z-0 top-[-.3rem] w-[3rem] left-[1px]" />
                        <p className='relative z-10 text-white'>
                            3

                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Roadmap
