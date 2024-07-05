import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import Button from './Button';

const MobileNav = () => {
    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'shop', path: '/shop'},
        {name: 'Blog', path: '/blog'},
        {name: 'Contact', path: '/contact'},
    ];
    const path = useLocation();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
               <CiMenuFries className="text-[32px] text-accent"/> 
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* logo */}
                <div className='mt-28 mb-20 text-cener text-2xl'>
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
                        <div className='flex items-center gap-3'>
                            <FaUserCircle className='text-3xl' />
                            <Link to='/login'>
                                <Button>Login</Button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;