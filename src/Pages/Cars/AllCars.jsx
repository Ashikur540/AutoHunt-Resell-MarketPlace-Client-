import React from 'react'
import { Outlet } from 'react-router'
import Category from './Left category/Category'

const AllCars = () => {
    return (
        <section id="cars-all">
            <div className="container px-3 lg:px-6 m-auto min-h-screen">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:grid-cols-12">
                    <div className="md:col-span-3 lg:col-span-2">
                        <Category></Category>
                    </div>
                    <div className="md:col-span-9 lg:col-span-10  my-10">
                        <Outlet>

                        </Outlet>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AllCars