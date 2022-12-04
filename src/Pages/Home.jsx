import React from 'react'
import { About } from '../Components/About/About'
import { Banner } from '../Components/Banner/Banner'
import AdvertiseCars from './Advertise page/AdvertiseCars'
import Category from './Cars/Left category/Category'
import { Contact } from './Contact/Contact'

const Home = () => {
    return (
        <div>
            <Banner />
            <About></About>
            <Category />
            <AdvertiseCars />
            <Contact />
        </div>
    )
}

export default Home