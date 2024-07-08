import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";

const Cart = () => {
    const [ cart ] = useCart();
    
    return (
        <section className="w-full">
            <div className="flex items-center justify-between">
                <div>
                    <p>Total Order:</p> <span>{cart.length}</span>
                </div>
                <div>
                    <p>Total Price:</p> <span>{cart.length}</span>
                </div>
                <div>
                    <Button>Pay</Button>
                </div>
            </div>
            f
        </section>
    );
};

export default Cart;