import React from 'react'
import { About } from '../Components/About/About'
import { Banner } from '../Components/Banner/Banner'
import { Process } from '../Components/Process/Process'
import States from '../Components/Stats/States'
import Category from './Cars/Left category/Category'
import { Contact } from './Contact/Contact'
import ReviewSlider from './Review Slider/ReviewSlider'

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Banner />
            <About></About>
            {/* <Categories /> */}
            <Category />
            <Process />
            <States />
            <ReviewSlider />
            <Contact />
        </div>
    )
}

export default Home