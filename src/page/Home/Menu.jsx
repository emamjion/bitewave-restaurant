import MenuItem from '@/components/MenuItem';
import { useEffect, useState } from 'react';
import './../../styles/Menu.css';

/* TODO: I will work next.
const menus = [
    {
        image: 'https://i.ibb.co/B2HXmvH/7.png',
        name: 'all'
    },
    {
        image: 'https://i.ibb.co/4fCqRTG/1.png',
        name: 'Pizza'
    },
    {
        image: 'https://i.ibb.co/HDHDN85/2.png',
        name: 'asian'
    },
    {
        image: 'https://i.ibb.co/q5jmZ2R/3.png',
        name: 'burger'
    },
    {
        image: 'https://i.ibb.co/z2q87PV/4.png',
        name: 'salad'
    },
    {
        image: 'https://i.ibb.co/JmpXjQH/5.png',
        name: 'bakery'
    },
    {
        image: 'https://i.ibb.co/fMjcmj5/6.png',
        name: 'drinks'
    },
];
*/

const Menu = () => {
    const [menuList, setMenuList] = useState('all');
    const [menuItem, setMenuItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://bitewave-restaurant-server.vercel.app/menu')
        .then(response => response.json())
        .then(data => {
            setMenuItem(data)
            setLoading(false);
        })
    }, []);
    return (
        <section className='menu-bg'>
            <div className="container mx-auto py-8 xl:py-[105px] ">
                <div className="flex items-center flex-col mb-4">
                    <h4 className='text-[20px] font-semibold text-accent mb-1.5'>Our Team</h4>
                    <h1 className='text-[28px] lg:text-[36px] font-semibold text-[#292929]'>Meet Our Team</h1>
                </div>
                
                {/* <div className='flex items-center justify-center gap-[30px] text-center my-5 mx-0'>
                    {
                        menus.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='cursor-pointer duration-200'
                                    onClick={() => setCategory(prev => prev === item.name ? "all" : item.name)}
                                >
                                    <div >
                                        <img src={item.image} alt="" />
                                        <p className={` ${category === item.category ? "active" : "bg-red-500"}} font-semibold capitalize mt-2.5 text-xl text-center`}>{item.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> */}

                <div className='flex items-center justify-center flex-wrap gap-8 my-10'>
                    <button 
                        onClick={() => setMenuList('all')}
                        className={menuList === 'all' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/B2HXmvH/7.png' />
                        <h2>All</h2>
                    </button>
                    <button 
                        onClick={() => setMenuList('pizza')}
                        className={menuList === 'pizza' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/4fCqRTG/1.png' />
                        <h2>Pizza</h2>
                    </button>
                    <button 
                        onClick={() => setMenuList('asian')}
                        className={menuList === 'asian' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/HDHDN85/2.png' />
                        <h2>Asian</h2>
                    </button>
                    <button 
                        onClick={() => setMenuList('burger')}
                        className={menuList === 'burger' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/q5jmZ2R/3.png' />
                        <h2>Burger</h2>
                    </button>
                    <button 
                        onClick={() => setMenuList('salad')}
                        className={menuList === 'salad' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/z2q87PV/4.png' />
                        <h2>Salad</h2>
                    </button>
                    <button 
                        onClick={() => setMenuList('bakery')}
                        className={menuList === 'bakery' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/JmpXjQH/5.png' />
                        <h2>Bakery</h2>
                    </button>
                    <button 
                        onClick={() => setMenuList('drinks')}
                        className={menuList === 'drinks' ? 'border-b-2 border-b-accent' : ''}
                    >
                        <img src='https://i.ibb.co/fMjcmj5/6.png' />
                        <h2>Drinks</h2>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                    {
                        menuItem.filter((item) => menuList === 'all' ? 'true' : item.category === menuList).slice(0,8).map((item => {
                            return <MenuItem
                                key={item.id}
                                item={item}
                            />
                        }))
                    }
                </div>
            </div>
        </section>
    );
};

export default Menu;