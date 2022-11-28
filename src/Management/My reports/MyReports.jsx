import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Spinner } from '../../Components/Spinner/Spinner'
import { AuthContext } from '../../Contexts/AuthProvider'

const MyReports = () => {
    const { user } = useContext(AuthContext)

    const { data: myreports = [], isLoading, refetch } = useQuery({
        queryKey: ['myreports'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/reports/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            }
        })
            .then(res => res.json())
            .catch(err => toast.error(err))
    })


    if (isLoading) return <Spinner />

    console.log("myreport", myreports);

    const hanleDelete = reportedItem => {
        const { _id } = reportedItem
        // console.log(_id);
        fetch(`${process.env.REACT_APP_Base_URL}/myPurchaseList/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(` deletion successfull`)
                    refetch();
                }
            })
            .catch(err => toast.error(err.message))
    }



    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>payment status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myreports?.map((report, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{report?.reportedItemInfo?.modelName}</td>

                                {
                                    report?.reportedItemInfo?.paid && <button className="btn btn-xs btn-base-100 text-green-500 " disabled>paid</button>
                                }

                                {
                                    report?.reportedItemInfo?.paid === false &&
                                    <Link to={`/dashboard/payment/${report?.reportedItemInfo?._id}`}><button className="btn btn-xs btn-base-100" onClick={() => { }}>Pay now</button></Link>
                                }
                                <td><button className="text-error" onClick={() => hanleDelete(report)}><FaTrashAlt /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MyReports