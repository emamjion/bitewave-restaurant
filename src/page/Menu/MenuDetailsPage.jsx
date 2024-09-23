import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MenuDetailsPage = () => {
    const [menu, setMenu] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`https://bitewave-restaurant-server.vercel.app/menu/${params.id}`).then(res => res.json()).then(data => setMenu(data))
    }, []);

    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch ] =  useCart();

    const handleToCart = () => {
        if(user && user.email)
        {
            const cartItem = {
                menuId : menu._id,
                email: user.email,
                name : menu?.name,
                image : menu?.image,
                price : menu?.price,
                category : menu?.category 
            }
            axiosSecure.post('/cart', cartItem)
            .then(res => {
                if(res.data.insertedId)
                {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Your food has been added',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch the cart to update the cart items counter
                    refetch();
                }
            })

        }
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from : location } });
                }
              });
        }
    }
    return (
        <section className="container mx-auto py-8 xl:py-[105px]">
            {/* main container */}
            <div className="flex gap-[30px]">
                {/* image container */}
                <div className="w-full lg:w-1/2">
                    <img src={menu?.image} className="w-full" alt="" />
                </div>

                {/* text container */}
                <div className="w-full lg:w-1/2">
                    <div>
                        <h1 className="mb-2 text-[32px] text-[#292929] font-bold">{menu?.name}</h1>
                        <div className="my-6">
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={menu?.rating}
                                readOnly
                            />
                        </div>
                        <div className="flex items-center space-x-1 my-2">
                            <p className="text-[#666] text-sm">Price:</p>
                            <p className="text-[#c33]">
                                $<span >{menu?.price}</span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <p className="text-[#666] text-sm mb-2">Available:</p>
                            <p className="text-[#c33] font-medium">In Stock</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <p className="text-[#666] text-sm mb-2">Product Code:</p>
                            <p className="text-[#c33] font-medium">859234</p>
                        </div>
                        <div className="flex items-center space-x-1">
                            <p className="text-[#666] text-sm mb-2">Tags:</p>
                            <p className="text-[#c33] font-medium">Food, BBQ, First Food</p>
                        </div>
                        <div>
                            <p className="my-4 text-[#666] text-sm lg:max-w-[350px]">{menu?.recipe}</p>
                        </div>
                        <div className="mt-8 border border-[#ddd] w-[170px] h-10 flex items-center justify-between gap-3">
                            <button className="bg-[#c33] px-6 py-2 text-white text-lg"> - </button>
                            <div className="text-lg">1</div>
                            <button className="bg-[#c33] px-6 py-2 text-white text-lg"> + </button>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <Button onClick={handleToCart}>Add To Cart</Button>
                            <Button>Add To Wishlist</Button>
                        </div>
                        <div className="flex items-center gap-1 mt-8">
                            <p>Share Link:</p>
                            <div className="flex items-center gap-3">
                                <FaFacebookF className="text-md text-[#c33]"/>
                                <FaTwitter className="text-md text-[#c33]"/>
                                <FaSkype className="text-md text-[#c33]"/>
                                <FaInstagram className="text-md text-[#c33]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuDetailsPage;