import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import React, { useEffect, useRef, useState } from 'react';
// import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { Swiper, SwiperSlide } from "swiper/react";
import car2 from "../../Assets/Carsousel/car 2.png";
import car1 from "../../Assets/Carsousel/car1.png";




const Advertise = () => {
    const [days, setDays] = useState();
    const [hrs, setHrs] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const carouselRef = useRef(null);
    let interval;

    useEffect(() => {
        startTimer();
        new Glide(carouselRef.current, {
            type: 'carousel',
            perView: 2,
            focusAt: 'center',
            gap: 20,
            autoplay: 3000,
            hoverpause: true,
            breakpoints: {
                // 1200: {
                //     perView: 2
                // },
                // 800: {
                //     perView: 1
                // },
                440: {
                    perView: 1
                },
                640: {
                    perView: 1
                },
                1080: {
                    perView: 2
                },
                1440: {
                    perView: 2
                }
            }
        }).mount();
    }, [])



    const startTimer = () => {
        const countDownDate = new Date('March 17,2023').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const duration = countDownDate - now;
            const day = Math.floor(duration / (24 * 60 * 60 * 1000));
            const hour = Math.floor(duration % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
            const min = Math.floor(duration % (60 * 60 * 1000) / (1000 * 60));
            const sec = Math.floor(duration % (60 * 1000) / (1000));



            if (duration < 0) {
                // stop timer
                clearInterval(interval.current)
            }
            else {
                // update timer
                setDays(day)
                setHrs(hour)
                setMinutes(min)
                setSeconds(sec)
            }
        })
    }
    return (
        <div className="w-full h-full md:max-h-[500px] object-cover bg-no-repeat bg-neutral mx-auto mb-36 md:mb-44 lg:mb-56 text-center p-6 md:p-12 bg-advertiseBg bg-cover bg-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-400 uppercase rounded-full bg-teal-accent-400">How it works</p>
            <h1 className="text-4xl font-bold px-14 pb-10 text-white">Looking to Sale your Cars? <br /> Join today Best Offers</h1>
            <a className="btn glass" href="#car-category" >Advertise Now</a>
            <div className="py-4 px-2 max-w-3xl justify-evenly flex items-center mx-auto text-6xl">
                <div className="  flex flex-col justify-center items-center ">
                    <p className="font-bold text-white px-4 py-2 bg-primary rounded-md">{days}:</p>
                    <p className="text-sm text-white px-2 py-3">Days</p>
                </div>
                <div className="  flex flex-col justify-center items-center ">
                    <p className="font-bold text-white px-4 py-2 bg-primary rounded-md">{hrs}:</p>
                    <p className="text-sm text-white px-2 py-3">Hours</p>
                </div>
                <div className="  flex flex-col justify-center items-center ">
                    <p className="font-bold text-white px-4 py-2 bg-primary rounded-md">{minutes}:</p>
                    <p className="text-sm text-white px-2 py-3">Minutes</p>
                </div>
                <div className="  flex flex-col justify-center items-center ">
                    <p className="font-bold text-white px-4 py-2 bg-primary rounded-md">{seconds}:</p>
                    <p className="text-sm text-white px-2 py-3">Seconds</p>
                </div>

            </div>

            <div className="glide max-w-5xl w-full mx-auto" ref={carouselRef}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide"><img src={car1} alt="" className="object-cover mb-0" /></li>
                        {/* <li className="glide__slide"><img src="https://via.placeholder.com/800x600" alt="slide 2" /></li> */}
                        <li className="glide__slide"><img src={car2} alt="" className="object-cover mb-0" /></li>
                        <li className="glide__slide"><img src={car1} alt="" className="object-cover mb-0" /></li>
                        <li className="glide__slide"><img src={car2} alt="" className="object-cover mb-0" /></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Advertise