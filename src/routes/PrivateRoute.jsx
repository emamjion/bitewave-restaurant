import useAuth from '@/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if(loading)
        return <div>
            <h1>Loading...</h1>
        </div>
    if(user)
    {
        return children;
    }
    return <Navigate 
        state={{from : location}} 
        to='/login' 
        replace={true} 
    />
};


export default PrivateRoute;