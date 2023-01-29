import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '../../../Components/Spinner/Spinner';
const Category = () => {

    // const [categories, setCategories] = useState([]);
    // const [isloading, setIsloading] = useState(true);

    // useEffect(() => {
    //     fetch('Category.json')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // })
    // if (isloading) return <Spinner></Spinner>
    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/category`).then(res => res.json())
    })

    if (isLoading) return <Spinner />


    // axios.get(`${process.env.REACT_APP_Base_URL}/category`)
    //     .then(response => {
    //         // console.log(response);
    //         // setIsloading(false)'
    //         setCategories(response.data);
    //     })
    //     .catch(err => console.log(err.message))

    console.log(categories);
    return (
        <section id="car-category">
            <div className="mx-auto pt-13">
                <p className="px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-400 uppercase rounded-full  text-center">Categories</p>
                <h1 className="text-white text-center text-4xl uppercase font-bold">Explore our car categories </h1>
            </div>
            <div className="flex  my-10 text-center justify-center items-center bg-base-100 rounded-lg px-12 gap-8 flex-grow flex-wrap">
                {/* {
                    categories?.map(category => <div className="font-semibold mx-auto py-3 pl-6 my-1 w-full bg-neutral rounded-md hover:bg-primary hover:text-base-20 duration-150 "
                        key={category._id}
                    >
                        <img src={category.brandImage} alt="" srcset="" />
                        <NavLink to={`/cars/${category.category_name}`} >{category.category_name}</NavLink>
                    </div>)
                } */}
                {
                    categories?.map(category => <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={category.brandImage} alt="logos" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.category_name}</h2>
                            <div className="card-actions justify-center">
                                <Link to={`/cars/${category.category_name}`} className="btn btn-primary">See cars</Link>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </section>
    )
}

export default Category