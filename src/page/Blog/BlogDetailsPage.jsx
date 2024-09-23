import { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
    const {id} = useParams();
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        fetch(`https://bitewave-restaurant-server.vercel.app/blogs/${id}`)
        .then(res => res.json())
        .then(data => setBlogsData(data))
    }, []);
    
    return (
        <section className="container mx-auto py-8 xl:py-[105px]">
            {/* left side */}
            <div>
                <div>
                    <img src={blogsData.image} />
                </div>
                <div className="p-10 border border-[#f2f2f2]">
                    <div className="flex items-center gap-[30px]">
                        <div className="flex items-center gap-2 text-sm">
                            <span><SlCalender className="text-sm" /></span>
                            <span>{blogsData.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span><FiUser className="text-sm" /></span>
                            <span>Admin</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span><FaRegCommentDots className="text-sm" /></span>
                            <span>No Comments</span>
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* right side */}
            <div>

            </div>
        </section>
    );
};

export default BlogDetailsPage;