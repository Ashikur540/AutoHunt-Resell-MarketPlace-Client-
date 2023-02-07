import React from 'react'
import { About } from '../Components/About/About'
import Advertise from '../Components/Advertise/Advertise'
import { Banner } from '../Components/Banner/Banner'
import { Process } from '../Components/Process/Process'
import { Specs } from '../Components/Specs/Specs'
import States from '../Components/Stats/States'
import Category from './Cars/Left category/Category'
import { Contact } from './Contact/Contact'
const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Banner />
            <About></About>
            {/* <Categories /> */}
            <Category />
            <Process />
            <States />
            <Specs />
            <Advertise />
            {/* <ReviewSlider /> */}
            <Contact />
        </div>
    )
}

export default Home