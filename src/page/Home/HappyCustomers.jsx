// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HappyCustomers = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch('./customers.json').then(res => res.json()).then(data => setCustomers(data))
    }, [])
    return (
        <div className="container mx-auto py-8 xl:py-[105px]">
            <div className="flex items-center flex-col">
                <h4 className='text-[20px] font-semibold text-accent mb-1.5'>Happy Customers</h4>
                <h1 className='text-[28px] lg:text-[36px] font-semibold text-[#292929]'>Our Guestbook</h1>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        customers.map((customer) => <SwiperSlide
                            key={customer.id}
                        >
                            {/* Text */}
                            <div>
                                <span>
                                    <FaQuoteLeft />
                                </span>

                            </div>
                            {/* image */}
                            <div>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default HappyCustomers;