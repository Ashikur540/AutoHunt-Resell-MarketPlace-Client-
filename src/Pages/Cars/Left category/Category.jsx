import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {

    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('Category.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // })

    axios.get(`${process.env.REACT_APP_Base_URL}/category`)
        .then(response => {
            // console.log(response);
            setCategories(response.data)
        });
    return (
        <section id="car-category">
            <div className="flex flex-col mt-10 text-left justify-center items-start bg-base-100 rounded-lg">
                {
                    categories?.map(category => <div className="font-semibold py-3 pl-6 my-1 w-full bg-neutral rounded-md hover:bg-primary hover:text-accent duration-150 "
                    >
                        <NavLink to={`/cars/${category.category_name}`} key={category.id}>{category.category_name}</NavLink>
                    </div>)
                }

            </div>
        </section>
    )
}

export default Category