import React from 'react';

const Services = () => {
    return (
        <div className="w-full my-20">
            <h1 className="text-4xl text-white font-bold  uppercase leading-snug text-center py-8">What we offer</h1>
            <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">

                <div class="grid grid-rows-2  grid-cols-4  w-full grid-flow-row-dense">
                    <div class="col-span-full md:col-span-2 row-span-2  w-full relative">
                        <h1 className="text-3xl md:text-4xl leading-snug tracking-wide  text-white font-semibold absolute bottom-20 left-3 text-left z-[99]">
                            Huge collections with affortable prices
                        </h1>
                        <img src="https://images.pexels.com/photos/2062555/pexels-photo-2062555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="object-cover h-[380px]  md:h-full lg:h-full xl:h-full w-full" />
                        <div className="absolute top-0 left-0  bg-gradient-to-br from-black to-transparent h-full w-full opacity-90">
                        </div>
                    </div>
                    <div class="grid col-span-2 grid-cols-2 row-span-1  w-full">

                        <div class="hidden md:hidden lg:block md:col-span-2 lg:col-span-1 row-span-full bg-red-900 relative">
                            <h1 className="text-2xl text-white font-semibold absolute bottom-20 left-3 text-left z-[99]">
                                New branded cars 2023
                            </h1>
                            <img src="https://images.unsplash.com/photo-1484136540910-d66bb475348d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80" alt="" className="object-cover h-full md:h-full w-full" />
                            <div className="absolute top-0 left-0  bg-gradient-to-br from-black to-transparent h-full w-full opacity-90">
                            </div>

                        </div>
                        <div class="col-span-6 sm:cols-span-full row-span-full bg-red-700 relative">
                            <h1 className="text-2xl text-white font-semibold absolute bottom-20 left-3 text-left z-[99]">
                                Quick servicing

                            </h1>
                            <img src="https://images.pexels.com/photos/6870325/pexels-photo-6870325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0  bg-gradient-to-br from-black to-transparent h-full w-full opacity-90">
                            </div>

                        </div>
                    </div>
                    <div class=" col-span-2 bg-indigo-500 w-full row-span-2 relative">
                        <h1 className="text-2xl text-white font-semibold absolute bottom-20 left-3 text-left z-[99]">
                            Much more you think ..
                        </h1>
                        <img src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="object-cover h-full w-full" />
                        <div className="absolute top-0 left-0  bg-gradient-to-br from-black to-transparent h-full w-full opacity-90">
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Services;