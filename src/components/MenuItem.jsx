import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCart from "@/hooks/useCart";
import { FaPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './../styles/MenuItem.css';

const MenuItem = ({ item }) => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch ] =  useCart();
    const { id, image, category, price, recipe, name } = item;
    const handleToCart = () => {
        if(user && user.email)
        {
            const cartItem = {
                menuId : id,
                email: user.email,
                name,
                image,
                price,
                category 
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
        
        // fetch('http://localhost:5000/cart', {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(food)
        // })
    }
    return (
        <div className="product-card">
            <div className="relative">
                <img src={image} alt="" />
                <div className="absolute top-2 left-2">
                    <p className="price">${price}</p>
                </div>
            </div>
            <div className="p-6">
                <h2 className="font-medium text-[17px] mb-2.5 text-[#292929]">{name}</h2>
                <p className="my-2.5 text-[#666]">{recipe}</p>
                <div className="flex items-center justify-between">
                    <p className="text-accent">
                        <span>Delivery Fee: </span> <span>$10</span>
                    </p>
                    <div className="flex items-center gap-1.5">
                        <button className="icon-plus bg-accent h-[40px] w-[39px] rounded cursor-pointer">
                            <FaPlus className="text-xl text-white" />
                        </button>
                        <button
                            onClick={handleToCart}
                            className="bg-[#292929] h-[40px] w-[39px] flex items-center justify-center rounded cursor-pointer"
                        >
                            <FaCartShopping className="text-xl text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;