import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');
    
    return (
        <div>
            { noHeaderFooter || <Navbar/>}
            <Outlet/>
            { noHeaderFooter || <Footer/>}
        </div>
    );
};

export default MainLayout;