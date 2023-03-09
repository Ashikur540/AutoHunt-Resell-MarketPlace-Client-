import React, { useEffect, useState } from 'react';
import { toast } from "react-hot-toast";
import CarsCard from '../../Pages/Cars/Cars Card/CarsCard';
import { Spinner } from '../Spinner/Spinner';
const HCars = () => {
    const [cars, setCars] = useState([]);
    const [category, setCategory] = useState("Audi")
    const [load, setLoad] = useState(false);
    load && <Spinner />


    useEffect(() => {
        fetch(`${process.env.REACT_APP_Base_URL}/allCars`).then(res => res.json())
            .then(data => {
                setLoad(true)
                // console.log(data);
                const unpaidCars = data?.filter(car => !car.paid)
                // console.log(unpaidCars);

                // filter by category
                const filteredCars = unpaidCars?.filter(car => car.category_name === category);
                console.log(filteredCars)
                setCars(filteredCars);
                setLoad(false)
            })
            .catch(err => toast.error(err.message))
    }, [category])

    const handleFilter = (categoryName) => { setCategory(categoryName) }

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-4xl text-white font-bold  uppercase leading-snug text-center">Find the Best Deals For You </h1>
            <div className="flex justify-center items-center gap-8 flex-wrap max-w-3xl mx-auto py-4">
                <button className='btn btn-primary' onClick={() => handleFilter("Audi")}>Audi</button>
                <button className='btn btn-primary' onClick={() => handleFilter('Tesla')}>Tesla</button>
                <button className='btn btn-primary' onClick={() => handleFilter('BMW')}>BMW</button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 my-10 md:my-20">
                {
                    cars?.map(car => <CarsCard key={car._id} car={car} />)
                }
            </div>

        </div>
    );
};

export default HCars;