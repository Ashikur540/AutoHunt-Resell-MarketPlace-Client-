import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
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
    return (
        <section id="car-category">


            <div className="flex  my-10 text-center justify-center items-center bg-base-100 rounded-lg px-14 gap-8">
                {
                    categories?.map(category => <div className="font-semibold py-3 pl-6 my-1 w-full bg-neutral rounded-md hover:bg-primary hover:text-base-20 duration-150 "
                        key={category._id}
                    >
                        <img src="" alt="" srcset="" />
                        <NavLink to={`/cars/${category.category_name}`} >{category.category_name}</NavLink>
                    </div>)
                }

            </div>
        </section>
    )
}

export default Categories