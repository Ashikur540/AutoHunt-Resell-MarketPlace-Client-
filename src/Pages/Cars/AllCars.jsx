import React from 'react'
import { Outlet } from 'react-router'

const AllCars = () => {
    return (
        <section id="cars-all">
            <div className="container px-3 lg:px-6 m-auto min-h-screen">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:grid-cols-12">
                    {/* <div className="grid col-span-4 md:col-span-9 lg:col-span-12">
                        <Category></Category>
                    </div> */}
                    <div className="md:col-span-12   my-10">
                        <Outlet>

                        </Outlet>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AllCars