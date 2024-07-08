
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import registerImg from '../../assets/images/register.png';
import '../../styles/Login.css';
import SocialAuth from './SocialAuth';

const Register = () => {
    return (
        <section className="py-8 xl:py-[105px] login-bg">
            <div className="container mx-auto">
                <div className='flex gap-7 flex-row-reverse items-center'>
                    {/* image */}
                    <div className='w-full xl:max-w-[50%] order-2 xl:order-none'>
                        <img src={registerImg} alt="" />
                    </div>
                    
                    {/* login part */}
                    <div className='w-full xl:max-w-[50%] order-2 xl:order-none bg-white p-16 shadow-xl border border-[#e7e7e7] rounded'>
                        <h1 className='text-center font-medium text-3xl'>Register</h1>
                        <form className='mt-6'>
                            <div className='text-center'>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder='Your photo'
                                    className='border-2 p-2 w-1/2 rounded'
                                />
                            </div>
                            <div className='text-center mt-2'>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder='Your Name'
                                    className='border-2 p-2 w-1/2 rounded'
                                />
                            </div>
                            <div className='text-center mt-2'>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder='Your Email'
                                    className='border-2 p-2 w-1/2 rounded'
                                />
                            </div>
                            <div className='text-center mt-2'>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder='Your password'
                                    className='border-2 p-2 w-1/2 rounded'
                                />
                            </div>
                            <div className='text-center mt-4'>
                                {/* <input 
                                    type="submit" 
                                    value="Login" 
                                    className='px-3 py-2 md:px-6 md:py-2.5 text-white bg-[#F85559] rounded-md cursor-pointer'
                                /> */}
                                <Button type='submit'>Register</Button>
                            </div>
                        </form>
                        <div className='mt-4 flex items-center justify-center gap-1'>
                            <p className='text-sm text-[#757575]'>Already a User?</p><Link to='/login' className='text-sm text-accent font-semibold'>Login</Link>
                        </div>
                        <hr className='my-3' />
                        <SocialAuth/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;