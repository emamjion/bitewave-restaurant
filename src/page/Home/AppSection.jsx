import app1 from '../../assets/images/app-1.png';
import app2 from '../../assets/images/app-2.png';
import appleStore from '../../assets/images/apple.png';
import playStore from '../../assets/images/play-store.png';

const AppSection = () => {
    return (
        <section className='py-8 xl:py-[105px]'>
            <div className="p-[50px] container mx-auto bg-[#FFF4EB]">
               <div className='flex flex-col lg:flex-row justify-between relative gap-[30px] lg:gap-0'>
                    {/* Text */}
                    <div>
                        <h1 className='text-[28px] lg:text-[36px] font-semibold md:max-w-[350px] xl:max-w-[400px] text-[#292929]'>Simple Way to Order Your Food Faster</h1>
                        <p className="text-[#666666] py-4 my-4 md:max-w-[400px] xl:max-w-[500px] leading-relaxed">
                            Order food faster with our user-friendly website. Quick navigation, easy payment, and speedy delivery ensure a hassle-free dining experience. Choose from a wide variety of dishes, place your order, and enjoy a delicious meal in no time.
                        </p>
                        <div className='flex items-center gap-4 justify-center lg:justify-normal'>
                            <img src={playStore} alt="" className='max-w-28 lg:max-w-full' />
                            <img src={appleStore} alt="" className='max-w-28 lg:max-w-full' />
                        </div>
                    </div>
                    {/* image */}
                    <div className='flex items-center justify-center lg:justify-normal gap-3 xl:absolute right-6 xl:-right-14 md:-top-[2%] xl:-top-[35%]'>
                        <img src={app2} alt="" className='h-64 md:h-96 xl:h-full' />
                        <img src={app1} alt="" className='h-64 md:h-96 xl:h-full ' />
                    </div>
               </div>
            </div>
        </section>
    );
};

export default AppSection;