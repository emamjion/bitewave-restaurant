import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// components
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthProvider";
import useCart from "@/hooks/useCart";
import { useContext } from "react";
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';

const Navbar = () => {
    const [ cart ] = useCart();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {

        }).catch(error => console.log(error))
    }
    
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
                    {
                        user ? <>
                            <div className='flex items-center gap-3'>
                                <div className=" flex items-center gap-4">
                                   <Link to='/' className="flex items-center xl:mr-24">
                                        <span>
                                            <FaCartShopping className="text-xl"/>
                                        </span>
                                        <span className="bg-accent text-xs px-2 py-1 rounded-[30px] text-white">{cart?.length}</span>
                                   </Link>
                                   <div className="mr-3 w-[48px] h-[48px] rounded-full border-2 border-accent cursor-pointer">
                                        <img src={user?.photoURL} className="max-w-full" title={user.displayName}  />
                                   </div>
                                </div>
                                <Link to='/login'>
                                    <Button onClick={handleLogOut} >Logout</Button>
                                </Link>
                            </div>
                        </> :
                        <>
                            <div className='flex items-center gap-3'>
                                <FaUserCircle className='text-3xl' />
                                <Link to='/login'>
                                    <Button>Login</Button>
                                </Link>
                            </div>
                        </>
                    }
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