import { FaPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import './../styles/MenuItem.css';

const MenuItem = ({ item }) => {
    const { id, image, category, price, recipe, name } = item;
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
                        <div className="icon-plus bg-accent h-[40px] w-[39px] rounded cursor-pointer">
                            <FaPlus className="text-xl text-white" />
                        </div>
                        <div className="bg-[#292929] h-[40px] w-[39px] flex items-center justify-center rounded cursor-pointer">
                            <FaCartShopping className="text-xl text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;