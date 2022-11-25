import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Contexts/AuthProvider";

export const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const currentlocation = useLocation();

    if (loading) {
        return <>
            <Spinner />
        </>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: currentlocation }} replace></Navigate>
    }
    return children;

}