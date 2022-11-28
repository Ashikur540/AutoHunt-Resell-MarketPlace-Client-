import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const AddCars = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const handleAddCars = (data) => {
        // console.log("add car info", data);
        const { category_name, condition, description, location, modelName, originalPrice, resellPrice, sellerEmail, selllerContact, usageTime } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imgbb_key}`;



        fetch(url, {
            method: "post",
            body: formData
        }).then(res => res.json())
            .then(imagedata => {
                // get  the image url
                console.log(imagedata.data.display_url);
                // create date
                var d = new Date();
                var date = d.getUTCDate();
                var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
                var year = d.getUTCFullYear();

                var dateStr = date + "/" + month + "/" + year;
                console.log(dateStr)

                // create carobj
                const carInfo = {
                    category_name,
                    condition,
                    modelName,
                    description,
                    image_url: imagedata.data.display_url,
                    location,
                    originalPrice,
                    resellPrice,
                    sellerEmail,
                    selllerContact,
                    postedDate: dateStr,
                    usageTime,
                    available: 'instock',
                    paid: false

                }

                // console.log("car info:", carInfo);


                fetch(`${process.env.REACT_APP_Base_URL}/cars/add`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem('autohunt-token')}`

                    },
                    body: JSON.stringify(carInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Car added successfully');
                        reset();
                        navigate('/dashboard/managecars')
                    })
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <section className="bg-base-100">
                <p className="text-3xl font-bold text-center text-primary">Add new car here</p>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 mx-auto">

                        <div className="rounded-lg bg-neutral p-8 shadow-lg lg:col-span-6 lg:p-12 ">
                            <form onSubmit={handleSubmit(handleAddCars)} className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="" htmlFor="email">Model name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="Model name"
                                            type="text"
                                            id="model"
                                            required
                                            {...register("modelName")}
                                        />
                                    </div>

                                    <div>
                                        <label className="" htmlFor="phone">District</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="District /Location"
                                            type="text"
                                            id="location"
                                            {...register("location")}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div><label className="" htmlFor="name">Car Image</label>
                                        <input type="file" className="file-input bg-white text-slate-500 file-input-bordered file-input-secondary w-full " {...register("image")} /></div>
                                    <div>
                                        <label htmlFor="Condition">Condition</label>
                                        <select className="select select-bordered w-full max-w-xs" {...register("condition")}>
                                            <option>Good</option>
                                            <option>Stable</option>
                                            <option>Excellent</option>
                                            <option>Fair</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="Seller Email address"
                                            type="email"
                                            id="email"
                                            {...register("sellerEmail")}
                                        />
                                    </div>

                                    <div>
                                        <label className="" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="Seller Phone Number"
                                            type="tel"
                                            id="phone"
                                            {...register("selllerContact")}
                                        />
                                    </div>
                                    <div>
                                        <label className="" htmlFor="phone">Usage time</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="Age of the car(ex: 1 year /6 months)"
                                            type="text"

                                            {...register("usageTime")}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <label className="" htmlFor="name">resell rice</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="resell price $"
                                            type="text"
                                            {...register("resellPrice")}
                                        />
                                    </div>
                                    <div>
                                        <label className="" htmlFor="category">Category</label>
                                        <select className="select select-bordered w-full max-w-xs" {...register("category_name")}>
                                            <option>Tesla</option>
                                            <option>Audi</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="" htmlFor="name">Original Price</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                            placeholder="original price $"
                                            type="text"

                                            {...register("originalPrice")}

                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="" htmlFor="message">Description</label>
                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm text-base-100"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                        {...register("description")}
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                                    >
                                        <span className="font-medium"> Add </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-3 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddCars