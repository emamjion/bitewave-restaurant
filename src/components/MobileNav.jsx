import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";
import { CiMenuFries } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link, useLocation } from "react-router-dom";
import { Button } from './ui/button';

const MobileNav = () => {
    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'shop', path: '/shop'},
        {name: 'Blog', path: '/blog'},
        {name: 'Dashboard', path: '/dashboard'},
        {name: 'Contact', path: '/contact'},
    ];
    const path = useLocation();
    
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {

        }).catch(error => console.log(error))
    }
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
               <CiMenuFries className="text-[32px] text-accent"/> 
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* logo */}
                <div className='mt-6 mb-20 text-cener text-2xl'>
                    <Link to='/'>
                        <h1 className='text-4xl font-semibold text-white'>Bite<span className='text-accent'>wave</span></h1>
                    </Link>
                </div>

                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8 text-white'>
                    {
                        links.map((link, index) => {
                            return <Link
                                key={index}
                                to={link.path}
                                className={` ${link.path === path.pathname && 'text-accent border-b-2 border-accent'} text-xl hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        })
                    }
                    <div>
                        {
                            user ? <>
                                <div className='flex items-center gap-3'>
                                    <div className=" flex items-center gap-4">
                                    <Link to='/' className="flex items-center xl:mr-24">
                                            <span>
                                                <FaCartShopping className="text-xl"/>
                                            </span>
                                            <span className="bg-accent text-xs px-2 py-1 rounded-[30px] text-white">99</span>
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
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;