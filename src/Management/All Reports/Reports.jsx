import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const Reports = () => {
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/reports`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            }
        })
            .then(res => res.json())

    })

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
                            <th>Saller Email</th>
                            <th>payment status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports?.map((report, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{report?.reportedItemInfo?.modelName}</td>
                                <td>{report?.reportedItemInfo?.resellPrice}</td>
                                <td>{report?.reportedItemInfo?.sellerEmail}</td>
                                <td>{report?.reportedItemInfo?.paid ? 'paid' : 'not paid'}</td>
                                <td><button className="text-error" onClick={() => hanleDelete(report)}><FaTrashAlt /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Reports