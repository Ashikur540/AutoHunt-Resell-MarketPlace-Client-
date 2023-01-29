import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Spinner } from '../../Components/Spinner/Spinner'

const AllReviews = () => {

    const { data: allreviews = [], isLoading } = useQuery({
        queryKey: ['allreviews'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/reviews/all`)
            .then(res => res.json())
    })

    console.log(allreviews);

    if (isLoading) return <Spinner />
    return (

        <section id='all-reviews'>
            <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">

                <h1 className="text-center font-bold my-8 text-4xl">All reviews accross the whole country</h1>

                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {
                        allreviews?.map(review => <div className="flex flex-col w-full max-w-lg text-left lg:mx-auto">
                            <p className="mx-auto text-base leading-relaxed text-gray-500">{review?.reviewText}</p>
                            <p className="mx-auto text-base leading-relaxed text-gray-500">💛{review?.rating}</p>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                                {review?.reviewerName}

                            </h2>
                            <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src={review?.reviewerPhoto} />
                        </div>)
                    }

                </div>
            </div>
        </section>

    )
}

export default AllReviews