import ProductTable from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";

const Cart = () => {
    const [ cart, refetch ] = useCart();
    const totalPrice = cart.reduce( (total, item) => total + item.price , 0);
    return (
        <section className="w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <p className="text-xl font-semibold">Total Order:</p> <span className="text-accent text-xl font-semibold">{cart.length}</span>
                </div>
                <div className="flex items-center gap-1">
                    <p className="text-xl font-semibold">Total Price:</p> <span className="text-accent text-xl font-semibold">{(totalPrice).toFixed(2)}</span>
                </div>
                <div>
                    <Button>Pay</Button>
                </div>
            </div>
            <div>
                {/* Table */}
                <ProductTable cart={cart} refetch={refetch} />
            </div>
        </section>
    );
};

export default Cart;