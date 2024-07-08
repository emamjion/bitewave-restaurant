import MenuItem from '@/components/MenuItem';
import { useEffect, useState } from 'react';
import './../../styles/Menu.css';
const MenuPage = () => {
    const [menuList, setMenuList] = useState('all');
    const [menuItem, setMenuItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(response => response.json())
        .then(data => {
            setMenuItem(data)
            setLoading(false);
        })
    }, []);
    
    
    return (
        <section className="container mx-auto py-8 pb-52">
            <div className='flex gap-[30px]'>
                {/* menu content */}
                <div className='flex-[5]'>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                        {
                            menuItem.filter((item) => menuList === 'all' ? 'true' : item.category === menuList).map((item => {
                                return <MenuItem
                                    key={item.id}
                                    item={item}
                                />
                            }))
                        }
                    </div>
                </div>
                
                {/* menu tabs */}
                <div className='flex-[1] relative'>
                    <div className='flex flex-col items-center justify-center flex-wrap gap-8 sticky right-0 top-0'>
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
                </div>
            </div>
        </section>
    );
};

export default MenuPage;