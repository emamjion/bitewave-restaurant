import { Link, useLocation } from 'react-router-dom';

const DesktopNav = () => {
    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Menu', path: '/menu'},
        {name: 'shop', path: '/shop'},
        {name: 'Blog', path: '/blog'},
        {name: 'Dashboard', path: '/admin'},
        {name: 'Contact', path: '/contact'},
    ];
    const path = useLocation();

    return (
        <nav className='flex gap-8'>
            {
                links.map((link, index) => {
                    return <Link 
                        key={index}
                        className={` ${link.path === path.pathname && 'text-accent border-b-2 border-accent'} font-medium hover:text-accent transition-all `}
                        to={link.path}
                    >{link.name}</Link>
                })
            }
        </nav>
    );
};

export default DesktopNav;