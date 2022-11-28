import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
import { useSeller } from "../../Hooks/useSeller";
export const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const currentlocation = useLocation();
    console.log('seller', isSellerLoading)
    if (loading || isSellerLoading || isAdminLoading) {
        return <>
            <Spinner></Spinner>
        </>
    }

    if (isAdmin || isSeller) {
        return children;
    }

    if (!user || !isSeller || !isAdmin) {
        return <Navigate to="/login" state={{ from: currentlocation }} replace></Navigate>
    }
    // return children;

}