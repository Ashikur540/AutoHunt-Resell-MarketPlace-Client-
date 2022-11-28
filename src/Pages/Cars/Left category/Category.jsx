import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Category = () => {

    const [categories, setCategories] = useState([]);
    // const [isloading, setIsloading] = useState(true);

    // useEffect(() => {
    //     fetch('Category.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // })
    // if (isloading) return <Spinner></Spinner>

    axios.get(`${process.env.REACT_APP_Base_URL}/category`)
        .then(response => {
            // console.log(response);
            // setIsloading(false)
            setCategories(response.data);
        })
        .catch(err => console.log(err.message))

    console.log(categories);
    return (
        <section id="car-category">
            <div className="flex  my-10 text-center justify-center items-center bg-base-100 rounded-lg px-12 gap-8 flex-grow flex-wrap">
                {
                    categories?.map(category => <div className="font-semibold mx-auto py-3 pl-6 my-1 w-full bg-neutral rounded-md hover:bg-primary hover:text-base-20 duration-150 "
                        key={category._id}
                    >
                        <img src={category.brandImage} alt="" srcset="" />
                        <NavLink to={`/cars/${category.category_name}`} >{category.category_name}</NavLink>
                    </div>)
                }
                {/* {
                    categories?.map(category => <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={category.brandImage} alt="logos" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.category_name}</h2>
                            <div className="card-actions justify-center">
                                <Link to={`/cars/${category.category_name}`} className="btn btn-primary">See cars</Link>
                            </div>
                        </div>
                    </div>)
                } */}


            </div>
        </section>
    )
}

export default Category