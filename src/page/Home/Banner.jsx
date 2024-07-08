import { Button } from '@/components/ui/button';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../styles/Banner.css';
const Banner = () => {
    const items =  [
        {
            image : 'https://i.ibb.co/1LhW0QR/banner1.png', 
            subtitle: 'Best In Bitewave', 
            title: 'BBQ  Chicken salad with creamy Avocado',
            description: 'Savor the flavors of smoky BBQ chicken paired with fresh greens, vibrant veggies, and a creamy avocado dressing for a delightful meal.'
        },
        {
            image : 'https://i.ibb.co/FJ6ZWP9/banner.png', 
            subtitle: 'Best In Bitewave', 
            title: 'Ashian Lettuce Wrap Chicken Chopped Salad',
            description: 'Enjoy a refreshing Asian-inspired chicken chopped salad with crisp lettuce wraps, colorful veggies, and a tangy dressing for a delicious, light meal.'
        },
        {
            image : 'https://i.ibb.co/vBMnqD8/first-slider.png', 
            subtitle: 'Best In Bitewave', 
            title: 'Different Spice for a different taste',
            description: 'Indulge in a delicious BBQ chicken salad featuring tender chicken, fresh greens, and a creamy avocado dressing for a satisfying meal.'
        },
    ];

    // const handleSlideChange = (swiper) => {
    //     const currentIndex = 
    // }
    
    return (
        <section className="w-full banner-bg h-full xl:h-[760px] px-4 lg:px-0">
            <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className='xl:h-full mb-12 container mx-auto'
                // onSlideChange={handleSlideChange}
            >
                {
                    items.map((item, index) => {
                        return <SwiperSlide className='w-full' key={index}>
                            <div className='h-full flex items-center justify-center relative'>
                                <div className='flex flex-col xl:flex-row xl:gap-[30px] items-center '>
                                    {/* text */}
                                    <div className='flex flex-col w-full xl:w-[50%] order-2 xl:order-none'>
                                        <h4 className='text-[20px] font-semibold text-accent'>{item.subtitle}</h4>
                                        <h1 className='my-[23px] text-[26px] xl:text-[50px] font-semibold leading-tight capitalize'>{item.title}</h1>
                                        <p className='md:max-w-[500px] xl:max-w-[460px] text-[#666666]'>{item.description}</p>
                                        <div className='pb-6 md:pb-0 mt-10'>
                                            <Button>Order Now</Button>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className='py-6 md:py-0 w-full xl:w-[50%] order-1 xl:order-none'>
                                        <img src={item.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
                {/* buttons */}
                <WorkSliderBtns
                    containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_22px)] xl:bottom-5 z-40 w-full justify-end'
                    btnStyles='bg-accent hover:bg-accent-hover text-white text-[16px] w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all'
                />
            </Swiper>
        </section>
    );
};

export default Banner;