import React from 'react'
import { About } from '../Components/About/About'
import { Banner } from '../Components/Banner/Banner'
import AdvertiseCars from './Advertise page/AdvertiseCars'
import Categories from './Categories/Categories'

const Home = () => {
    return (
        <div>
            <Banner />
            <About></About>
            <Categories />
            <AdvertiseCars />
        </div>
    )
}

export default Home