import { Button } from '@/components/ui/button';
import { IoIosSend } from "react-icons/io";
import './../../styles/Subscription.css';
const SubscriptionSection = () => {
    return (
        <section className='py-8 xl:py-[105px] subs-bg'>
            
          <div className='flex items-center flex-col lg:flex-row gap-6 justify-center container mx-auto'>
                {/* text */}
                <div className='w-full lg:w-[50%] text-center lg:text-left'>
                    <h1 className='text-2xl lg:text-[30px] mb-1.5 font-semibold text-white'>Stay Informed About Special Offers</h1>
                    <p className='text-white'>For Exclusive Deals, Coupons, News and More!</p>
                </div>
                {/* email field */}
                <div className='w-full lg:w-[40%]'>
                    <form className='flex items-center relative justify-center lg:justify-normal'>
                        <input 
                            type="email" 
                            name="email" 
                            className='outline-none border focus:border focus:border-accent p-3.5 lg:w-full rounded placeholder:text-[15px]'
                            placeholder='Write your email'
                        />
                        <div className='absolute right-10 lg:-right-2'>
                            <Button type="submit" className='' size='lg'>
                                <IoIosSend className='text-[22px]' />
                            </Button>
                        </div>
                    </form>
                </div>
          </div>
        </section>
    );
};

export default SubscriptionSection;