import { createBrowserRouter } from "react-router-dom";
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
                path: '/',
                element: <Home />
            },
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
        ]

    }
])