import React from 'react';
import { A11y, Pagination, Scrollbar } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import car2 from "../../Assets/Carsousel/car 2.png";
import car1 from "../../Assets/Carsousel/car1.png";

const Advertise = () => {
    return (
        <div className="w-full max-h-[500px] object-cover bg-no-repeat bg-neutral mx-auto mb-36 md:mb-44 lg:mb-56 text-center p-6 md:p-12 bg-advertiseBg bg-cover bg-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-400 uppercase rounded-full bg-teal-accent-400">How it works</p>
            <h1 className="text-4xl font-bold px-14 pb-10 text-white">Looking to Sale your Cars? <br /> Join today Best Offers</h1>
            <a className="btn glass" href="#car-category" >Advertise Now</a>
            <div className="max-w-5xl w-full flex justify-center items-center mx-auto p-2 mt-8 md:mt-16">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        440: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 1
                        },
                        1080: {
                            slidesPerView: 2
                        },
                        1440: {
                            slidesPerView: 2
                        }
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide> <img src={car1} alt="" className="object-cover mb-0" /></SwiperSlide>
                    <SwiperSlide><img src={car2} alt="" className="object-cover mb-0" /></SwiperSlide>
                    <SwiperSlide><img src={car2} alt="" className="object-cover mb-0" /></SwiperSlide>
                    <SwiperSlide> <img src={car1} alt="" className="object-cover mb-0" /></SwiperSlide>
                    <SwiperSlide><img src={car2} alt="" className="object-cover mb-0" /></SwiperSlide>


                </Swiper>


            </div>
        </div>
    )
}

export default Advertise