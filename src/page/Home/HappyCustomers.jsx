import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import '../../styles/HappyCustomers.css';

import WorkSliderBtns from '@/components/WorkSliderBtns';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const HappyCustomers = () => {
    const [customers, setCustomers] = useState([]);
    console.log(customers);
    useEffect(() => {
        fetch('./customers.json').then(res => res.json()).then(data => setCustomers(data))
    }, [])
    return (
        <div className="container mx-auto py-8 xl:py-[105px]">
            <div className="flex items-center flex-col">
                <h4 className='text-[20px] font-semibold text-accent mb-1.5'>Happy Customers</h4>
                <h1 className='text-[28px] lg:text-[36px] font-semibold text-[#292929]'>Our Guestbook</h1>
            </div>
            <div className='mt-5 max-w-5xl mx-auto'>
                <div>
                    {/* <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                            text part
                        </div>
                        <div className='w-full xl:w-[50%]'>slide</div>
                    </div> */}

                    <div>
                        <Swiper className='border border-slate-200'>
                            {
                                customers.map((customer) => {
                                    return (
                                        <SwiperSlide
                                            key={customer.id}
                                        >
                                            <div className='flex flex-col xl:flex-row gap-[30px] xl:justify-between'>
                                                <div className='border-l-2 border-l-accent w-full xl:w-[60%] h-[460px] px-[50px] py-[50px]'>
                                                    <div className=''>
                                                        <div>
                                                            <span> <FaQuoteLeft className='text-5xl text-accent' /> </span>
                                                        </div>
                                                        <div className='mt-6'>
                                                            <p className='text-[#666666] py-5 xl:max-w-[450px]'>{customer.comment}</p>
                                                            <div className='mt-1.5'>
                                                                <div>
                                                                    <span className='text-xl font-semibold'>{customer.name}</span> <span className='text-xs'> - {customer.type}</span> 
                                                                    <p className='text-sm font-medium text-accent mt-0.5'>{customer.date}</p>  
                                                                </div>
                                                                <div className='mt-5'>
                                                                    <Rating
                                                                        style={{ maxWidth: 180 }}
                                                                        value={customer.rating}
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='w-full xl:w-[40%] h-[460px]'>
                                                    <div>
                                                        <img src={customer.image} className='w-full' />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                            {/* swiper buttons */}
                            <div>
                                <WorkSliderBtns 
                                    containerStyles='flex gap-2 absolute left-16 bottom-[calc(50%_22px)] xl:bottom-5 z-40 w-full justify-left'
                                    btnStyles='bg-accent hover:bg-accent-hover text-white text-[16px] w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all'
                                />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;