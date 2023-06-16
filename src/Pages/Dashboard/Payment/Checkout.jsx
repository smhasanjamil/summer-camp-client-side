import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Checkout = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const { user } = useContext(AuthContext);

    const [paymentError, setPaymentError] = useState('');

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://lingoz-server-side.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(amount),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret),
                    console.log(data);
            });
    }, [amount]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);

        }


        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Unknown'
                    },
                },
            },
        );

        if (confirmationError) {
            console.log(confirmationError);
        }

        console.log(paymentIntent);


    }

    return (
        <>
            <form className=" w-96 m-12" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {paymentError && <p className="text-red-500 my-2">{paymentError}</p>}
                <button className="btn btn-neutral my-2 btn-sm" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

        </>
    );
};

export default Checkout;