import { useQuery } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import { FaTrashAlt } from 'react-icons/fa'
import { Spinner } from '../../Components/Spinner/Spinner'

const AllBuyers = () => {



    const { data: allBuyers = [], refetch, isLoading } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/users/buyers`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            }
        }).then(res => res.json())
    })

    if (isLoading) return <Spinner />

    const handleDelete = buyer => {
        console.log(buyer._id);
        const { _id, fullName, } = buyer
        // console.log(_id);
        fetch(`${process.env.REACT_APP_Base_URL}/users/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data => data.deletedCount) {
                    toast.success(`Successfully deleted ${fullName}`);
                    refetch()
                }
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.fullName}</td>
                                <td>{buyer?.email}</td>
                                <td><button className="text-error" onClick={() => handleDelete(buyer)}><FaTrashAlt /></button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}




export default AllBuyers