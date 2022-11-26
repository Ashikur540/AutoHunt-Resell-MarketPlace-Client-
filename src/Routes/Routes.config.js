import { createBrowserRouter } from "react-router-dom";
import AddCars from "../Management/Add Cars/AddCars";
import AllUsers from "../Management/All Users/AllUsers";
import Dashboard from "../Management/Dashboard/Dashboard";
import ManageCars from "../Management/Manage Cars/ManageCars";
import MyPurchaseList from "../Management/My Purchase List/MyPurchaseList";
import AllCars from "../Pages/Cars/AllCars";
import RightCars from "../Pages/Cars/Right cars/RightCars";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "./Main/Dashboard/DashboardLayout";
import Main from "./Main/Main";
import { PrivateRoute } from "./Private/PrivateRoute";
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
                path: "/cars",
                element: <AllCars />,
                children: [

                    {
                        path: "/cars/:category_name",
                        element: <PrivateRoute><RightCars /></PrivateRoute>
                    },
                ]
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
                path: "/dashboard/allusers",
                element: <><AllUsers /> </>,
            },
            {
                path: "/dashboard/addcars",
                element: <><AddCars /> </>,
            },
            {
                path: "/dashboard/managecars",
                element: <><ManageCars /> </>,
            },

        ]
    },
])