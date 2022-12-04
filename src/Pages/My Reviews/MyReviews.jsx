import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MyReviewsCard } from '../../Components/My ReviewCard/MyReviewCard';
import { Spinner } from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    // const [myreviews, setMyreviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     fetch(`https://ashikur-photographer-server.vercel.app/reviews?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 console.log(data.data);
    //                 setMyreviews(data.data)
    //             }
    //             else {
    //                 toast.error(`data loading failed`)
    //             }
    //         })
    //         .catch(err => toast.error(err.message))
    // }, [user?.email, refresh])

    const { data: myreviews = [], refetch, isLoading } = useQuery({
        queryKey: ['myreviews', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_URL}/reviews?email=${user?.email}`, {

            headers: {
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
            },
        })
            .then(res => res.json())
    })
    console.log(myreviews);

    if (isLoading) return <Spinner />

    const handleDelete = (id) => {
        const consent = window.confirm("are you sure to delete?")
        if (consent) {
            fetch(`${process.env.REACT_APP_URL}/reviews/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        console.log(data.data);
                        toast.success("deleted successfully");
                        setRefresh(!refresh);

                    }
                    else {
                        toast.error(data.message)
                    }
                })
                .catch(err => toast.error(err))
        }
        else {
            return;
        }
    }



    return (
        <div className="min-h-screen px-12">


            {
                myreviews.length === 0 ? <div className="text-2xl font-semibold my-8 text-slate-400">
                    No reviews added so far</div>
                    :
                    <>
                        <h1 className="text-3xl font-semibold my-12">Here are the reviews you wrote so far</h1>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-sm mx-auto md:max-w-full">

                            {
                                myreviews.map(reviews => <MyReviewsCard
                                    key={myreviews._id}
                                    handleDelete={handleDelete}

                                    reviews={reviews}
                                ></MyReviewsCard>)
                            }
                        </div>
                    </>
            }


        </div>
    )
}

export default MyReviews