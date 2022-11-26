import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { FaTrashAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Spinner } from '../../Components/Spinner/Spinner'
import { AuthContext } from '../../Contexts/AuthProvider'
const MyPurchaseList = () => {
    const { user } = useContext(AuthContext)
    const { data: myPurchaseList = [], isLoading, refetch } = useQuery({
        queryKey: ['myPurchaseList', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/myPurchaseList?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
            }
        })
            .then(res => res.json())
            .catch(err => toast.error(err.message))
    })
    if (isLoading) return <Spinner />


    const hanleDelete = purchasedItem => {
        const { _id, carModelName, carID, buyerEmail } = purchasedItem
        // console.log(_id);
        fetch(`${process.env.REACT_APP_Base_URL}/myPurchaseList/${_id}/${carID}?email=${buyerEmail}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${carModelName} deletion successfull`)
                    refetch();
                }
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            myPurchaseList?.map((singlePurchase, i) =>
                                <tr key={singlePurchase._id}>
                                    <th>{i + 1}</th>
                                    <td>{singlePurchase.buyerName}</td>
                                    <td>{singlePurchase.buyerEmail}</td>
                                    <td>{singlePurchase.sellingPrice}</td>
                                    <td>{singlePurchase.carModelName}</td>
                                    <td>
                                        {
                                            singlePurchase?.sellingPrice && !singlePurchase.paid &&
                                            <Link to={`/dashboard/payment/${singlePurchase._id}`}><button className="btn btn-xs btn-base-100" onClick={() => { }}>Pay now</button></Link>
                                        }
                                        {
                                            singlePurchase?.sellingPrice && singlePurchase.paid && <button className="btn btn-xs btn-base-100 text-green-500 " disabled>paid</button>
                                        }
                                    </td>
                                    <td><button className="text-error" onClick={() => hanleDelete(singlePurchase)}><FaTrashAlt /></button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyPurchaseList