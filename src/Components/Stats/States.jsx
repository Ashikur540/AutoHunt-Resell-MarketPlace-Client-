import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineDirectionsCarFilled, MdOutlinePinDrop } from "react-icons/md"
const States = () => {
    return (
        <section id="states" className="my-20 bg-fixed bg-cover bg-statesBG max-h-fit lg:h-[500px] relative p-8 flex justify-center items-center">
            <div className="bg-black absolute w-full h-full top-0 opacity-25 "></div>
            <div className="relative container max-w-5xl mx-auto my-auto pt-12 flex flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-between gap-9 ">
                <div className=" w-full lg:w-1/2 ">
                    <h4 className="text-xl font-semibold tracking-normal text-base-20 pl-1">Need a Tutorial</h4>
                    <h1 className="text-4xl font-bold pt-8 uppercase tracking-wider leading-snug text-white">
                        Save Time & Money with Top Rent Car Service Your Country.
                    </h1>

                </div>
                <div className="h-full  lg:w-1/2 block md:flex gap-6 mx-auto justify-center items-center">
                    <div className="py-6 px-3 bg-white flex items-center  rounded-md max-w-fit h-fit my-auto ">
                        <span class="p-3 bg-slate-100 text-4xl rounded-full text-black">
                            <MdOutlinePinDrop />
                        </span>
                        <div class="">
                            <h3 class="mb-1"><span class="text-3xl font-bold text-slate-900">412</span></h3>
                            <span class="font-semibold text-md text-slate-800">Car Center Solution</span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:flex-col gap-4 flex-wrap pt-2 ">
                        <div className="py-6 px-3 bg-white flex items-center gap-8 rounded-md max-w-fit">
                            <span class="p-3 bg-slate-100 text-4xl rounded-full text-black">
                                <FaRegHeart />
                            </span>
                            <div class="">
                                <h3 class="mb-1"><span class="text-3xl font-bold text-slate-900">9k+</span></h3>
                                <span class="font-semibold text-md text-slate-800">Happy Customers</span>
                            </div>
                        </div>
                        <div className="py-6 px-3 bg-white flex items-center gap-8 rounded-md max-w-fit">
                            <span class="p-3 bg-slate-100 text-4xl rounded-full text-black">
                                <MdOutlineDirectionsCarFilled />
                            </span>
                            <div class="">
                                <h3 class="mb-1"><span class="text-3xl font-bold text-slate-900">420</span></h3>
                                <span class="font-semibold text-md text-slate-800">Total car count</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default States