
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthProvider';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import 'animate.css';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import registerImg from '../../assets/images/register.png';
import '../../styles/Login.css';
import SocialAuth from './SocialAuth';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('clicked');
        createUser(data.email, data.password)
        .then(result => {
            const createdUser = result.user;
            updateUserProfile(data.name, data.photo)
            .then(() => {
                // Create user entry in the database
                const userInfo = {
                    name : data.name,
                    email: data.email,
                    password: data.password,
                    userImg : data.photo
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                        console.log('user added to the database');
                        reset();
                        Swal.fire({
                            title: "User created Successfully!",
                            showClass: {
                              popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                              popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                        navigate('/');
                    }
                })
            })
            .catch(error => console.log(error))
        })

    };
    
    return (
        <section className="py-8 xl:py-[105px] login-bg">
            <div className="container mx-auto">
                <div className='flex gap-7 xl:flex-row-reverse items-center'>
                    {/* image */}
                    <div className='w-full xl:max-w-[50%] order-2 xl:order-none'>
                        <img src={registerImg} alt="" />
                    </div>
                    
                    {/* login part */}
                    <div className='w-full xl:max-w-[50%] order-1 xl:order-none bg-white p-16 shadow-xl border border-[#e7e7e7] rounded'>
                        <h1 className='text-center font-medium text-3xl'>Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
                            <div className='text-center'>
                                <input 
                                    type="text" 
                                    placeholder='Your photo'
                                    className='border-2 p-2 w-1/2 rounded'
                                    {...register("photo", { required: true })}
                                />
                            </div>
                            <div className='text-center mt-2'>
                                <input 
                                    type="text" 
                                    placeholder='Your Name'
                                    className='border-2 p-2 w-1/2 rounded'
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div className='text-center mt-2'>
                                <input 
                                    type="email" 
                                    placeholder='Your Email'
                                    className='border-2 p-2 w-1/2 rounded'
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className='text-center mt-2'>
                                <input 
                                    type="password" 
                                    placeholder='Your password'
                                    className='border-2 p-2 w-1/2 rounded'
                                    {...register("password", { required: true })}
                                />
                            </div>
                            <div className='text-center mt-4'>
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