import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <section className="container mx-auto py-8 xl:py-[105px]">
            <div className="flex items-center flex-col mb-4">
                <h4 className='text-[20px] font-semibold text-accent mb-1.5'>News & Blog</h4>
                <h1 className='text-[28px] lg:text-[36px] font-semibold text-[#292929]'>Latest News</h1>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map((blog) => {
                        return (
                            <div key={blog.id} className="max-w-[440px] h-[560px]">
                                <div>
                                    <img src={blog.image} alt={blog.title} className="w-full" />
                                    <div className="px-6 py-5 bg-white shadow-lg">
                                        <h1 className="text-xl font-semibold">{blog.title}</h1>
                                        <p className="py-4 text-[#666] text-[15px]">{blog.description}</p>
                                        <div className="border-b border-[#dddddd]"></div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-[#666] text-sm">
                                                <span>{blog.date}</span>
                                                <span> - Comments</span>
                                            </div>
                                            <div>
                                                <Link to={`/blog/${blog.id}`} className="border-b-2 text-sm border-[#7a7a7a] text-[#666]"> Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Blog;