import { createBrowserRouter } from "react-router-dom";
import AllCars from "../Pages/Cars/AllCars";
import RightCars from "../Pages/Cars/Right cars/RightCars";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "./Main/Main";
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
                        element: <RightCars />
                    },
                ]
            },

        ]

    }
])