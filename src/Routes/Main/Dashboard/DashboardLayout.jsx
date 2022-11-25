import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../Components/Navbar/Navbar'
import { AuthContext } from '../../../Contexts/AuthProvider'
// import Navbar from '../Pages/Shared/Navbar/Navbar'
const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email);
    // console.log(isAdmin);
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My PurchaseList</Link></li>

                        <li><Link to="/dashboard/allusers">All users</Link></li>
                        <li><Link to="/dashboard/addcars">Add Cars</Link></li>
                        <li><Link to='/dashboard/managecars'>Manage Cars</Link></li>


                    </ul>

                </div>
            </div>

        </div>
    )
}

export default DashboardLayout