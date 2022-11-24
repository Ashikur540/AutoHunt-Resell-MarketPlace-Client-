import React from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Images/logo-white.png"
export const Navbar = () => {

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link>Logout</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">register</Link></li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 md:justify-center">
                <div className="navbar-start md:w-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl w-24 pl-8"><img src={logo} alt="logo" className="w-full" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex md:mx-auto">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="dropdown dropdown-end ml-auto">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between" onClick={() => {
                                toast('This function is under construction!', {
                                    icon: '🛠',
                                });
                            }}>
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}