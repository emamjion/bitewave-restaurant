import useAuth from '@/hooks/useAuth';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialAuth = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    // Google Authentication
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            
            const userInfo = {
                email: result.user?.email,
                name : result.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        })
    };

    // TODO: GitHub Authentication

    const handleGitHubLogin = () => {
        Swal.fire("Developer is working!");
    }

    // TODO: Facebook Authentication
    const handleFacebookLogin = () => {
        Swal.fire("Developer is working!");
    }
    
    return (
        <div className='flex items-center  gap-6 justify-center mt-6'>
            <button onClick={handleGoogleSignIn} className='w-[44px] h-[44px] border border-accent flex items-center justify-center rounded cursor-pointer'>
                <FaGoogle className='text-accent text-xl' />
            </button>
            <button onClick={handleGitHubLogin} className='w-[44px] h-[44px] border border-accent flex items-center justify-center rounded cursor-pointer'>
                <FaGithub className='text-accent text-xl'/>
            </button>
            <button onClick={handleFacebookLogin} className='w-[44px] h-[44px] border border-accent flex items-center justify-center rounded cursor-pointer'>
                <FaFacebookF className='text-accent text-xl'/>
            </button>
        </div>
    );
};

export default SocialAuth;