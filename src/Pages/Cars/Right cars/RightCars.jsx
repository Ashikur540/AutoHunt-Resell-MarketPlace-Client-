import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { Spinner } from "../../../Components/Spinner/Spinner";
import { AuthContext } from '../../../Contexts/AuthProvider';
import BuyModal from '../BuycarModal/BuyModal';
import CarsCard from '../Cars Card/CarsCard';
const RightCars = () => {
    const [carInfo, setCarInfo] = useState(null)
    const router = useParams();
    // console.log(router.category_name)
    const { user } = useContext(AuthContext)
    // console.log(router);
    const { category_name } = router;
    const { data: availableCars = [], refetch, isLoading } = useQuery({
        queryKey: [category_name, "availableCars"],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/cars?category_name=${category_name}`)
            .then(res => res.json())
    })

    if (isLoading) return <Spinner />

    const handleReport = car => {
        console.log(car);




        const reportInfo = {
            reportedItemInfo: car,
            reportedUserEmail: user?.email,
            reportedUserName: user?.displayName
        }

        console.log(reportInfo);
        fetch(`${process.env.REACT_APP_Base_URL}/report`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`

            },
            body: JSON.stringify(reportInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('reported successfull')
            })
            .catch(err => toast.error(err))

    }
    return (
        <div>
            <div className="min-w-full max-h-fit object-bottom bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80')` }}>

                <h1 className="text-4xl text-white  font-bold my-2 text-center py-20"><span className="text-primary">{router.category_name}</span> Cars found {availableCars?.length}</h1>
            </div>
            <div className="container px-4 m-auto my-14">
                <div className=" card_grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        availableCars?.map(car => <CarsCard
                            key={car._id}
                            car={car}
                            setCarInfo={setCarInfo}
                            handleReport={handleReport}
                        ></CarsCard>)
                    }

                </div>
            </div>
            {
                carInfo && user?.uid && <BuyModal
                    carInfo={carInfo}
                    refetch={refetch}
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