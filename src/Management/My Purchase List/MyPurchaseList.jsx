import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Spinner } from '../../Components/Spinner/Spinner'
import { AuthContext } from '../../Contexts/AuthProvider'

const MyPurchaseList = () => {
    const { user } = useContext(AuthContext)
    const { data: myPurchaseList = [], isLoading, refetch } = useQuery({
        queryKey: ['myPurchaseList', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/myPurchaseList?email=${user?.email}`)
            .then(res => res.json())
            .catch(err => toast.error(err.message))
    })
    if (isLoading) return <Spinner />
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
                            <th>Price</th>
                            <th>Model Name</th>
                            <th>Status</th>
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

                                    <td>button</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyPurchaseList