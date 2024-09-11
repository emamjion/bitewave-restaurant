import useAdmin from '@/hooks/useAdmin';
import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard, MdRateReview, MdRestaurantMenu } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    
    // TODO: Get isAdmin value from the database
    const [isAdmin] = useAdmin();
    
    const menus = [
        {
            name: 'dashboard',
            link: '/dashboard',
            icon: MdOutlineDashboard
        },
        {
            name: 'user',
            link: '/user',
            icon: AiOutlineUser
        },
        // {
        //     name: 'message',
        //     link: '/message',
        //     icon: FiMessageSquare
        // },
        // {
        //     name: 'analytics',
        //     link: '/analytics',
        //     icon: TbReportAnalytics,
        //     margin: true
        // },
        // {
        //     name: 'add Review',
        //     link: '/dashboard/add-review',
        //     icon: FiFolder
        // },
        {
            name: 'my cart',
            link: '/dashboard/cart',
            icon: FiShoppingCart
        },
        {
            name: 'my booking',
            link: '/dashboard/booking',
            icon: FaList
        },
        {
            name: 'payment history',
            link: '/dashboard/payment-history',
            icon: AiOutlineHeart
        },
        // {
        //     name: 'setting',
        //     link: '/setting',
        //     icon: RiSettings4Line,
        //     margin: true
        // },
        {
            name: 'Home',
            link: '/',
            icon: FaHome,
            margin: true
        },
        {
            name: 'Menu',
            link: '/menu',
            icon: MdRestaurantMenu 
        },
    ]

    const adminMenus = [
        {
            name: 'admin dashboard',
            link: '/dashboard',
            icon: MdOutlineDashboard
        },
        {
            name: 'all users',
            link: '/dashboard/all-users',
            icon: AiOutlineUser
        },
        {
            name: 'add reviews',
            link: '/message',
            icon:  MdRateReview
        },
        // {
        //     name: 'analytics',
        //     link: '/analytics',
        //     icon: TbReportAnalytics,
        //     margin: true
        // },
        {
            name: 'add items',
            link: '/dashboard/add-item',
            icon: FaUtensils
        },
        {
            name: 'manage items',
            link: '/dashboard/cart',
            icon: MdRestaurantMenu
        },
        {
            name: 'manage bookings',
            link: '/dashboard/booking',
            icon: FaList
        },
        {
            name: 'payments',
            link: '/dashboard/payment-history',
            icon: AiOutlineHeart
        },
        // {
        //     name: 'setting',
        //     link: '/setting',
        //     icon: RiSettings4Line,
        //     margin: true
        // },
        {
            name: 'Home',
            link: '/',
            icon: FaHome,
            margin: true
        },
        {
            name: 'Menu',
            link: '/menu',
            icon: MdRestaurantMenu 
        },
    ]

    const [open, setOpen] = useState(true);
    
    return (
        <section className='flex gap-6'>
            {/* Sidebar */}
            <div className={`bg-[#2c3e50] min-h-screen ${open ? 'w-72' : 'w-16'} text-gray-100 px-4 duration-500`}>
                <div className='py-3 flex justify-end'>
                    < HiMenuAlt3 
                        size={26} 
                        className='cursor-pointer'
                        onClick={() => setOpen(!open)}
                    />
                </div>
                
                {
                    isAdmin ? <>
                        <div className='mt-4 flex flex-col gap-4 relative'>
                            {
                                adminMenus.map((menu, i) => <Link
                                    key={i}
                                    className={` ${menu?.margin && 'mt-5'} group flex items-center gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                                    to={menu?.link}
                                >
                                    <div>
                                        {React.createElement(menu?.icon, {size: '20'})}
                                    </div>
                                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`} style={{transitionDelay: `${i + 3}00ms`}}>{menu?.name}</h2>
                                    <h2 className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                                </Link>)
                            }
                    
                        </div>
                    </>
                    :
                    <>
                        <div className='mt-4 flex flex-col gap-4 relative'>
                            {
                                menus.map((menu, i) => <Link
                                    key={i}
                                    className={` ${menu?.margin && 'mt-5'} group flex items-center gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                                    to={menu?.link}
                                >
                                    <div>
                                        {React.createElement(menu?.icon, {size: '20'})}
                                    </div>
                                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`} style={{transitionDelay: `${i + 3}00ms`}}>{menu?.name}</h2>
                                    <h2 className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                                </Link>)
                            }
                    
                        </div>
                    </>
                }
            </div>
            
            {/* Dashboard content */}
            <div className='container mx-auto py-8 xl:py-[40px]'>
                <Outlet/>
            </div>
        </section>
    );
};

export default Sidebar;