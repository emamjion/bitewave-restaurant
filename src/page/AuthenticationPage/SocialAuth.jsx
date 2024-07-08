import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialAuth = () => {
    return (
        <div className='flex items-center  gap-6 justify-center mt-6'>
            <div className='w-[44px] h-[44px] border border-accent flex items-center justify-center rounded cursor-pointer'>
                <FaGoogle className='text-accent text-xl' />
            </div>
            <div className='w-[44px] h-[44px] border border-accent flex items-center justify-center rounded cursor-pointer'>
                <FaGithub className='text-accent text-xl'/>
            </div>
            <div className='w-[44px] h-[44px] border border-accent flex items-center justify-center rounded cursor-pointer'>
                <FaFacebookF className='text-accent text-xl'/>
            </div>
        </div>
    );
};

export default SocialAuth;