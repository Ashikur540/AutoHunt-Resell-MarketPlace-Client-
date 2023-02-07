import { useState } from "react";
import { RiCustomerService2Fill, RiPlayMiniFill, RiPriceTag2Line } from "react-icons/ri";
import ModalVideo from "react-modal-video";
import seller from "../../Assets/Images/happy seller.jpg";
export const Specs = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2 ">
                    <img
                        src={seller}
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                    <div className="h-16 w-16 flex justify-center items-center bg-slate-50 rounded-full overflow-hidden absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer">

                        <div className=" flex justify-center items-center bg-slate-50 rounded-lg p-1  animate-ping ">
                            <div className="flex justify-center items-center bg-slate-50 rounded-lg  p-2 "
                                onClick={() => setOpen(!isOpen)}>
                                <RiPlayMiniFill className="text-2xl font-bold text-black animate-none" />

                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full">
                            Best Services
                        </p>
                    </div>
                    <h1 className="mb-3 text-4xl text-slate-800 font-bold uppercase">
                        Have the best Experience With our Rental Deals
                    </h1>
                    <div className="mb-5 text-gray-800 flex items-center gap-6 ">
                        <div className="h-16 w-24 flex justify-center items-center bg-primary rounded-lg ">
                            <RiPriceTag2Line className="text-3xl font-bold text-white" />
                        </div>

                        <p className="text-sm text-para">
                            Seamlessly predominate out-of-the-box services through Collaboratively deploy innovative.
                        </p>
                    </div>
                    <div className="mb-5 text-gray-800 flex items-center gap-6 ">
                        <div className="h-16 w-24 flex justify-center items-center bg-primary rounded-lg ">

                            <RiCustomerService2Fill className="text-3xl font-bold text-white" />
                        </div>
                        <p className="text-sm text-para">
                            Rapidiously maintain equity invested internal or "organic" sources after team building manufactured.
                        </p>
                    </div>
                    <div className="flex items-center">

                        <ModalVideo
                            channel='youtube'
                            autoplay
                            isOpen={isOpen}
                            videoId="yh0ZGHiizSA"
                            onClose={() => setOpen(false)} />


                    </div>
                </div>
            </div>
        </div>
    );
};