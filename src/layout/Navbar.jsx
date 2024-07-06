import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

// components
import { Button } from "@/components/ui/button";
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';

const Navbar = () => {
    return (
        <header className='pt-8 xl:pt-12 '>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <Link to='/'>
                    <h1 className='text-4xl font-semibold'>Bite<span className='text-accent'>wave</span></h1>
                </Link>
                <div className='hidden xl:flex'>
                <DesktopNav/>
                </div>
                {/* Desktop Nav and login button */}
                <div className="hidden xl:flex items-center gap-8">
                    {/* <DesktopNav/> */}
                    <div className='flex items-center gap-3'>
                        <FaUserCircle className='text-3xl' />
                        <Link to='/login'>
                            <Button>Login</Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile nav */}
                <div className='xl:hidden'>
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;