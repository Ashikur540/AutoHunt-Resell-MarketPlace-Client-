import React, { useContext } from 'react'
import { FaCarSide, FaClipboardList, FaPlus, FaUser, FaUserFriends, FaUserTie } from 'react-icons/fa'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Navbar } from '../../../Components/Navbar/Navbar'
import { AuthContext } from '../../../Contexts/AuthProvider'
import { useAdmin } from '../../../Hooks/useAdmin'
import { useSeller } from '../../../Hooks/useSeller'
// import Navbar from '../Pages/Shared/Navbar/Navbar'
const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    console.log('Amin?:', isAdmin);
    console.log('Seller?:', isSeller);
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-full">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard"><FaClipboardList /> My PurchaseList</Link></li>

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers"><FaUserFriends />All users</Link></li>
                                <li><Link to="/dashboard/allsellers"><FaUserTie /> All sellers</Link></li>
                                <li><Link to="/dashboard/allbuyers"><FaUser />All buyers</Link></li>
                                {/* <li><Link to="/dashboard/addcars"><FaPlus />Add Cars</Link></li> */}
                                <li><Link to='/dashboard/managecars'><FaCarSide />All Cars</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>

                                <li><Link to="/dashboard/addcars"><FaPlus />Add Cars</Link></li>
                                <li><Link to='/dashboard/mycars'><FaCarSide />My Cars</Link></li>
                            </>

                        }


                    </ul>

                </div>
            </div>

        </div>
    )
}

export default DashboardLayout



