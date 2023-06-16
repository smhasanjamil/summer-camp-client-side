import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_CHECKOUT);
const Payment = () => {
    const [cart] = useCart();

    // Total Price
    const priceSum = cart.reduce((sum, item) => item.price + sum, 0);
    const amount = parseFloat(priceSum.toFixed(2))

    return (
        <div>
            <h2 className="text-3xl">Payment</h2>


            <Elements stripe={stripePromise}>
                <Checkout price={amount}></Checkout>
            </Elements>

        </div>
    );
};

export default Payment;