import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthProvider';
import 'animate.css';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import loginImg from '../../assets/images/login.png';
import '../../styles/Login.css';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        loginUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
        })
        Swal.fire({
            title: "User login Successfully!",
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
        reset();
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }

    return (
        <section className="py-8 xl:py-[105px] login-bg">
            <div className="container mx-auto">
                <div className='flex gap-7 items-center'>
                    {/* image */}
                    <div className='w-full xl:max-w-[50%] order-2 xl:order-none'>
                        <img src={loginImg} alt="" />
                    </div>
                    
                    {/* login part */}
                    <div className='w-full xl:max-w-[50%] order-2 xl:order-none bg-white p-16 shadow-xl border border-[#e7e7e7] rounded'>
                        <h1 className='text-center font-medium text-3xl'>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
                            <div className='text-center'>
                                <input 
                                    type="email" 
                                    name="email" 
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
                                {/* <input 
                                    type="submit" 
                                    value="Login" 
                                    className='px-3 py-2 md:px-6 md:py-2.5 text-white bg-[#F85559] rounded-md cursor-pointer'
                                /> */}
                                <Button type='submit'>Login</Button>
                            </div>
                        </form>
                        <div className='mt-4 flex items-center justify-center gap-1'>
                            <p className='text-sm text-[#757575]'>Not Registered?</p><Link to='/register' className='text-sm text-accent font-semibold'>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;