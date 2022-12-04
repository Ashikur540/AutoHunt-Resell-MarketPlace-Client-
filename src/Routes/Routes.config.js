import { createBrowserRouter } from "react-router-dom";
import AddCars from "../Management/Add Cars/AddCars";
import AllBuyers from "../Management/All Buyers/AllBuyers";
import Reports from "../Management/All Reports/Reports";
import AllSellers from "../Management/All Sellers/AllSellers";
import AllUsers from "../Management/All Users/AllUsers";
import Dashboard from "../Management/Dashboard/Dashboard";
import ManageCars from "../Management/Manage Cars/ManageCars";
import MyCars from "../Management/My cars seller/MyCars";
import MyPurchaseList from "../Management/My Purchase List/MyPurchaseList";
import MyReports from "../Management/My reports/MyReports";
import Payment from "../Management/Payment Page/Payment";
import AddReview from "../Pages/Add review/AddReview";
import AllReviews from "../Pages/All Reviews/AllReviews";
import Blogs from "../Pages/Blogs/Blogs";
import RightCars from "../Pages/Cars/Right cars/RightCars";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import MyReviews from '../Pages/My Reviews/MyReviews';
import Register from "../Pages/Register/Register";
import { AdminRoute } from "./Admin Route/AdminRoute";
import DashboardLayout from "./Main/Dashboard/DashboardLayout";
import Main from "./Main/Main";
import { PrivateRoute } from "./Private/PrivateRoute";
import { SellerRoute } from "./Seller Route/SellerRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/reviews",
                element: <AllReviews />
            },
            // {
            //     path: "/cars",
            //     element: <AllCars />,
            //     children: [

            //         {
            //             path: "/cars/:category_name",
            //             element: <PrivateRoute><RightCars /></PrivateRoute>
            //         },
            //     ]
            // },

            {
                path: "/cars/:category_name",
                element: <PrivateRoute><RightCars /></PrivateRoute>
            },
            {
                path: "/my-reviews",
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: "/reviews/add",
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },

        ]

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <MyPurchaseList />,
            },
            {
                path: "/dashboard/myreports",
                element: <MyReports />,
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers /> </AdminRoute>,
            },
            {
                path: "/dashboard/allsellers",
                element: <><AllSellers /> </>,
            },
            {
                path: "/dashboard/allbuyers",
                element: <><AllBuyers /> </>,
            },
            {
                path: "/dashboard/addcars",
                element: <SellerRoute><AddCars /> </SellerRoute>,
            },
            {
                path: "/dashboard/managecars",
                element: <SellerRoute><ManageCars /> </SellerRoute>,
            },
            {
                path: "/dashboard/mycars",
                element: <SellerRoute><MyCars /> </SellerRoute>,
            },
            {
                path: "/dashboard/reports",
                element: <SellerRoute><Reports /> </SellerRoute>,
            },
            // {
            //     path: "/dashboard/addcars",
            //     element: <SellerRoute><AddCars /> </SellerRoute>,
            // },
            // {
            //     path: "/dashboard/managecars",
            //     element: <SellerRoute><ManageCars /> </SellerRoute>,
            // },
            {
                path: "/dashboard/payment/:id",
                element: <><Payment /> </>,
            },

        ]
    },
])