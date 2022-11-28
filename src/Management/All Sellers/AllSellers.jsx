import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';
import { HiBadgeCheck } from "react-icons/hi";
import { Spinner } from '../../Components/Spinner/Spinner';
const AllSellers = () => {
    const { data: allSellers = [], refetch, isLoading } = useQuery({
        queryKey: ['allsellers'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/users/sellers`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            }
        }).then(res => res.json())
    })
    if (isLoading) return <Spinner />

    const handleDelete = seller => {
        console.log(seller._id);
        const { _id, fullName, } = seller
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

    const handleMakevarified = seller => {
        const { _id, fullName, } = seller
        // console.log(_id);
        fetch(`${process.env.REACT_APP_Base_URL}/users/seller/${_id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("autohunt-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                toast.success(`${fullName} is now a verified seller`);
                refetch();

            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table w-full h-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Varified Staus</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller?.fullName}</td>
                                <td>{seller?.email}</td>
                                <td>{seller?.verified && <HiBadgeCheck />}</td>
                                <td className="dropdown dropdown-end">
                                    <label tabIndex={0} className="cursor-pointer m-1"><FaEllipsisV /></label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button className="text-blue-500" onClick={() => handleMakevarified(seller)}><HiBadgeCheck /> Make Varified</button></li>
                                        <li><td><button className="text-error" onClick={() => handleDelete(seller)}
                                        ><FaTrashAlt /> Delete</button></td></li>
                                    </ul>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllSellers