import useAdmin from "@/hooks/useAdmin";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading)
        return <div>
            <h1>Loading...</h1>
        </div>
    if(user && isAdmin)
    {
        return children;
    }
    return <Navigate 
            state={{from : location}} 
            to='/' 
            replace={true} 
        />
};

export default AdminRoute;