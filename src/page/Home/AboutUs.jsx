import { Button } from "@/components/ui/button";
import { FaRegAddressBook } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import AboutImg from '../../assets/images/about.png';
const AboutUs = () => {
    return (
        <div className='py-8 xl:py-[105px]'>
            <div className="flex flex-col lg:flex-row gap-[30px]">
                {/* image container */}
                <div className="w-full lg:w-[50%] flex order-1 lg:order-none">
                    <img src={AboutImg} alt="" />
                </div>

                {/* Text container */}
                <div className="w-full lg:w-[50%] flex flex-col order-2 lg:order-none">
                    <h4 className='text-[20px] font-semibold text-accent mb-1.5'>About Us</h4>
                    <h1 className="text-[28px] lg:text-[36px] font-semibold text-[#292929] mb-4">Why We Are The Best</h1>
                    <p className="text-[#666666] mb-6 xl:max-w-[500px] leading-relaxed">
                        Discover the best in food ordering with us! We offer a diverse menu, seamless online experience, rapid delivery, and exceptional customer service. Our fresh, high-quality ingredients and user-friendly interface make us your top choice for delicious meals anytime, anywhere. Satisfy your cravings with ease and excellence!
                    </p>
                    <div>
                        <div className="flex gap-6">
                            <div className="p-2 w-[60px] h-[60px] flex items-center justify-center rounded bg-[#fff9f4]"> 
                                <MdFastfood className="text-2xl text-accent"  /> 
                            </div>
                            <div>
                                <h3 className="font-medium text-base mb-1">Buffet Service</h3>
                                <p className="text-[#666666] xl:max-w-[400px]">
                                    Enjoy a wide variety of dishes with our buffet service, offering endless options for every taste.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-6">
                            <div className="p-2 w-[60px] h-[60px] flex items-center justify-center rounded bg-[#fff9f4]"> 
                                <FaRegAddressBook className="text-2xl text-accent" /> 
                            </div>
                            <div>
                                <h3 className="font-medium text-base mb-1">Online Booking</h3>
                                <p className="text-[#666666] xl:max-w-[400px]">
                                    Easily reserve your table online with our convenient booking system. Quick, hassle-free, and always available.
                                </p>
                            </div>
                        </div>
                        {/* About us button */}
                        <div className="mt-6 flex items-center justify-center lg:items-start lg:justify-normal">
                            <Button>About Us</Button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;