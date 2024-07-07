import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaSkype, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

const footer1 = [
    {
        description: 'Order delicious food quickly and easily with Bitwave. Enjoy seamless navigation, secure payments, and fast delivery for a hassle-free experience.',
        address: 'Banani, Dhaka',
        email: 'info@bitwave.com',
        website : 'www.bitewave.com',
        phone: ['+880 1727 08 7717', '+880 1518 46 8146']
    }
];
const quickLinks = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Menu', path: '/menu'},
    {name: 'Shop', path: '/shop'},
    {name: 'Blog', path: '/blog'},
    {name: 'Contact', path: '/contact'},
];
const instagram = [
    'https://i.ibb.co/dDn4dD9/1.png',
    'https://i.ibb.co/ysh4X4w/2.png',
    'https://i.ibb.co/Gt80gLY/3.png',
    'https://i.ibb.co/km0VKrd/4.png',
    'https://i.ibb.co/YfpNsj9/5.png',
    'https://i.ibb.co/qjq1nWv/6.png',
]


const Footer = () => {
    return (
        <footer className='footer-bg'>
            <div className="container mx-auto">
                <div className="py-[65px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                    {/* Footer part - 1 */}
                    <div>
                        <div className='mb-4'>
                            <h1 className='text-4xl font-semibold text-white'>Bite<span className='text-accent'>wave</span></h1>
                        </div>
                        <div>
                            {
                                footer1.map((item, index) => {
                                    return <div
                                        key={index}
                                        className=""
                                    >
                                        <p className='lg:max-w-[330px] mb-4 text-white'>{item.description}</p>
                                        <div className="space-y-4">
                                            <div className="text-white flex items-center gap-3">
                                                <span> <MdLocationOn className="text-2xl" /> </span>
                                                <p>{item.address}</p>
                                            </div>
                                            <div className="text-white flex items-center gap-3">
                                                <span> <FaEnvelope className="text-2xl" /> </span>
                                                <div>
                                                    <p>{item.email}</p>
                                                    <p>{item.website}</p>
                                                </div>
                                            </div>
                                            <div className="text-white flex items-center gap-3">
                                                <span> <FaPhoneAlt className="text-2xl" /> </span>
                                                <div>
                                                    <p>{item.phone[0]}</p>
                                                    <p>{item.phone[1]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {/* Footer part - 2 */}
                    <div className=" lg:pl-10">
                        <div className='mb-4'>
                            <h1 className='text-xl font-semibold text-white py-2.5'>Quick links</h1>
                            <div className="w-20 h-0.5 bg-white"></div>
                        </div>
                        <ul className="flex flex-row lg:flex-col flex-wrap gap-4">
                            {
                                quickLinks.map((link, index) => {
                                    return <Link
                                        key={index}
                                        to={link.path}
                                        className="text-white"
                                    >
                                        {link.name}
                                    </Link>
                                })
                            }
                        </ul>
                    </div>
                    {/* Footer part - 3 */}
                    <div>
                        <div className='mb-7'>
                            <h1 className='text-xl font-semibold text-white py-2.5'>Instagram</h1>
                            <div className="w-20 h-0.5 bg-white"></div>
                        </div>
                        <div className="w-[270px] grid grid-cols-3 gap-4">
                            {
                                instagram.map((img, index) => {
                                    return <div key={index} className="max-w-[78px] max-h-[80px]">
                                        <img className="w-full h-full" src={img} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    {/* Footer part - 4 */}
                    <div>
                        <div className='mb-6'>
                            <h1 className='text-xl font-semibold text-white py-2.5'>Subscribe</h1>
                            <div className="w-20 h-0.5 bg-white"></div>
                        </div>
                        <div >
                            <p className='lg:max-w-[330px] mb-5 text-white'>
                                Subscribe for exclusive deals, menu updates, and priority delivery on Bitwave.
                            </p>
                            <form className="relative flex items-center">
                                <Input
                                    placeholder='Enter your Email'
                                    className='relative'
                                />
                                <Button className='absolute -right-1' type='submit'>Subscribe</Button>
                            </form>
                            <div className="text-white flex items-center gap-3 mt-6">
                                <span> <FaFacebookF className="text-2xl hover:text-accent duration-500 cursor-pointer"/> </span>
                                <span> <FaTwitter className="text-2xl hover:text-accent duration-500 cursor-pointer"/> </span>
                                <span> <FaSkype className="text-2xl hover:text-accent duration-500 cursor-pointer"/> </span>
                                <span> <FaInstagram className="text-2xl hover:text-accent duration-500 cursor-pointer"/> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright section */}
            <div className="border-b border-[#444]"></div>
            <p className="py-5 text-center text-white">
                &copy; Copyright bitewave. 2024 All Right Reserved.
            </p>
        </footer>
    );
};

export default Footer;