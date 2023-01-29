import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
const AddReview = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const reviewInfo = {
        rating,
        reviewText,
        reviewerEmail: user?.email,
        reviewerPhoto: user?.photoURL,
        reviewerName: user?.displayName,
    }

    const handleAddReview = () => {
        console.log(reviewInfo);

        fetch(`${process.env.REACT_APP_Base_URL}/review/add`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('autohunt-token')}`

            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('review added successfully');
                    navigate("/my-reviews")
                }
            })

    }

    return (
        <div id="add review">
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  bg-neutral mx-auto my-10">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                        <div className="flex space-x-3 stars text-3xl">
                            <Rating
                                emptySymbol={<FaRegStar />}
                                fullSymbol={<FaStar />}
                                fractions={2}
                                onChange={(e) => setRating(e)}
                            />
                        </div>
                        <p className="text-xl">{rating}</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900" value={reviewText} onChange={e => setReviewText(e.target.value)}></textarea>
                        <button type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400"

                            onClick={handleAddReview}
                        >Leave feedback</button>

                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Link rel="noopener noreferrer" to="/" className="text-sm dark:text-gray-400">Maybe later</Link>
                </div>
            </div>
        </div>
    )
}

export default AddReview