import { useQuery } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import { FaTrashAlt } from "react-icons/fa"
import { Spinner } from "../../Components/Spinner/Spinner"
const ManageCars = () => {

    const { data: allCars = [], isLoading, refetch } = useQuery({
        queryKey: ['allCars'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/allCars`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            },
        }).then(res => res.json())
            .catch(err => toast.error(err.message))
    })
    if (isLoading) return <Spinner />;
    // console.log(allCars);


    const hanleDelete = singlecar => {
        const { _id, modelName, } = singlecar
        // console.log(_id);
        fetch(`${process.env.REACT_APP_Base_URL}/allCars/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${modelName} deletion successfull`)
                    refetch();
                }
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <>
            <p className="text-3xl font-bold text-center text-primary my-4">Manage cars here</p>

            <div className="overflow-x-auto overflow-y-hidden">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Model Name</th>
                            <th>Resell Price</th>
                            <th>Seller Email</th>
                            <th>Seller Contact</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allCars?.map((singleCar, i) => <tr key={singleCar._id}>
                                <th>{i + 1}</th>
                                <td>{singleCar?.modelName}</td>
                                <td>{singleCar?.resellPrice}</td>
                                <td>{singleCar?.sellerEmail ? singleCar?.sellerEmail : 'not privided'}</td>
                                <td>{singleCar?.selllerContact}</td>
                                <td>{singleCar?.available}</td>
                                <td><button className="text-error" onClick={() => hanleDelete(singleCar)}><FaTrashAlt /></button></td>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManageCars