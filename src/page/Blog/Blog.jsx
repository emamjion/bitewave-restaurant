import devPic from '../../assets/images/dev-pic.png';

const Blog = () => {
    return (
        <section className='flex items-center justify-center h-screen'>
            <div>
                <h1 className='text-center mb-16 font-semibold text-3xl text-accent'>The developer is working on it!!</h1>
                <div className='max-w-[500px]'>
                    <img src={devPic} className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Blog;