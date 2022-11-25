import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from "../../../Components/Spinner/Spinner";
import BuyModal from '../BuycarModal/BuyModal';
import CarsCard from '../Cars Card/CarsCard';
const RightCars = () => {
    const [carInfo, setCarInfo] = useState(null)
    const router = useParams();
    // console.log(router);
    const { category_name } = router;
    const { data: availableCars = [], refetch, isLoading } = useQuery({
        queryKey: [category_name, "availableCars"],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/cars?category_name=${category_name}`)
            .then(res => res.json())
    })

    if (isLoading) return <Spinner />
    return (
        <div>
            <h1 className="text-2xl text-accent font-bold my-2 text-center ">Cars found {availableCars?.length}</h1>
            <div className="container px-4 m-auto">
                <div className=" card_grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        availableCars?.map(car => <CarsCard
                            key={car._id}
                            car={car}
                            setCarInfo={setCarInfo}
                        ></CarsCard>)
                    }

                </div>
            </div>
            {
                carInfo && <BuyModal
                    carInfo={carInfo}
                    setCarInfo={setCarInfo}
                />
            }
        </div>
    )
}

export default RightCars

/*


var d = new Date();

var date = d.getUTCDate();
var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
var year = d.getUTCFullYear();

var dateStr = date + "/" + month + "/" + year;
undefined
console.log(dateStr)



*/