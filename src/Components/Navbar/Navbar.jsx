import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Images/logo-white.png"
import { AuthContext } from '../../Contexts/AuthProvider'
import { useAdmin } from '../../Hooks/useAdmin'
import { useSeller } from '../../Hooks/useSeller'
export const Navbar = () => {

    const { logoutUser, user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    console.log("from nav", isSeller);
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("successfully logged out")
            })
            .catch(err => console.log(err.message))
    }


    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        {/* <li><Link to="/cars">Cars</Link></li> */}
        {
            user?.email ? <>
                <li><Link to="/my-reviews">My reviews</Link></li>
            </>
                : <>

                    <button className="btn btn-primary "><Link to="/register">register</Link></button>
                    <button className="btn btn-outline rounded-lg"><Link to="/login">Login</Link></button>
                </>
        }
        {/* {
            user?.email || <></>
        } */}


    </>

    return (
        <>
            <div className="navbar bg-base-100 md:justify-center sticky top-0 z-[999] shadow-base-100 shadow-md">
                <div className="navbar-start md:w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className=" text-xl w-24 pl-8"><img src={logo} alt="logo" className="w-full" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex text-center md:pr-10">
                    <ul className="menu menu-horizontal p-0 space-x-4">
                        {menuItems}
                    </ul>
                </div>
                <div className="dropdown dropdown-end ml-auto">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.uid ? <img src={user?.photoURL} alt="profilePic" />
                                    :
                                    <img src="https://cdn-icons-png.flaticon.com/512/3899/3899618.png" alt="profilePic" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user?.uid && <li>
                                <Link className="justify-between" onClick={() => {
                                    toast('This profile function is under construction!', {
                                        icon: '🛠',
                                    });
                                }}>
                                    {user?.uid ? user?.displayName : "no user found"}
                                    {
                                        isAdmin && <span className="badge">Admin</span>
                                    }
                                    {
                                        isSeller && <span className="badge">Seller</span>
                                    }
                                    {
                                        isAdmin && isSeller && <span className="badge">Admin & Seller</span>
                                    }

                                </Link>
                            </li>
                        }

                        {
                            user?.uid && <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/reviews/add">Add review</Link></li>
                                <li><Link className='text-error' onClick={handleLogout}>Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </>
    )
}
