import React from 'react'
import { About } from '../Components/About/About'
import Advertise from '../Components/Advertise/Advertise'
import { Banner } from '../Components/Banner/Banner'
import { BottomFooter } from '../Components/BottomFooter/BottomFooter'
import Newsletter from '../Components/Newsteller/Newsletter'
import { Process } from '../Components/Process/Process'
import { Specs } from '../Components/Specs/Specs'
import States from '../Components/Stats/States'
import Services from '../Components/Trial hero/THero'
import Category from './Cars/Left category/Category'
import ReviewSlider from './Review Slider/ReviewSlider'
const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Banner />
            <About></About>
            <Services />
            {/* <Categories /> */}
            <Category />
            <Process />
            <States />
            {/* <HCars /> */}
            <Specs />
            <Advertise />
            <ReviewSlider />
            <Newsletter />
            {/* <Contact /> */}
            <BottomFooter />
        </div>
    )
}

export default Home