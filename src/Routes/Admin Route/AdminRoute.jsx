import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
export const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const currentlocation = useLocation();

    if (loading || isAdminLoading) {
        return <>
            <Spinner></Spinner>
        </>
    }
    if (!user || !isAdmin) {
        return <Navigate to="/login" state={{ from: currentlocation }} replace></Navigate>
    }
    return children;

}