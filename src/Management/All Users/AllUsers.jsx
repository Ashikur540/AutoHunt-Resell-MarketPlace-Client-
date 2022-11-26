import { useQuery } from "@tanstack/react-query";
import React from 'react';
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { Spinner } from "../../Components/Spinner/Spinner";

const AllUsers = () => {

    // console.log(baseUrl);
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/users`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            }
        }).then(res => res.json())
    })

    if (isLoading) return <Spinner></Spinner>

    const handleMakeAdmin = (id) => {

        fetch(`${process.env.REACT_APP_Base_URL}/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Upded')
                refetch()
            })
    }
    const hanleDelete = user => {
        const { _id, fullName, } = user
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
                            <th>Account</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.account}</td>
                                <td>{user?.role !== "admin" && <button className="btn btn-xs btn-primary " onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>}</td>
                                <td><button className="text-error" onClick={() => hanleDelete(user)}><FaTrashAlt /></button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers