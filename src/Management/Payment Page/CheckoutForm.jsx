import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";

const CheckoutForm = ({ purchasedItem, dateStr }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("")
    const [processing, setProcessing] = useState(false);
    const [successMsg, setSuccessMsg] = useState("")
    const [transId, setTransId] = useState("")

    const { buyerEmail, carModelName, carID, sellingPrice, buyerName, _id } = (purchasedItem);

    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (sellingPrice) {
            fetch(`${process.env.REACT_APP_Base_URL}/create-payment-intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
                },
                body: JSON.stringify({ sellingPrice }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret))
                .catch(err => toast.error(err.message))
        }
    }, [sellingPrice]);






    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        })

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccessMsg('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,

                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return
        }
        console.log("paymentIntent", paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            setSuccessMsg('Congratulation Your payment is successfull');
            setTransId(paymentIntent.id);


            const paymentInfo = {
                sellingPrice,
                transactionID: paymentIntent.id,
                buyerEmail,
                purchasedItemID: _id,
                paymentDate: dateStr,
                carID,
            }

            // save payment log into db
            fetch(`${process.env.REACT_APP_Base_URL}/payments`, {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('autohunt-token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => toast.error(err.message))

        }
        setProcessing(false)
    }



    return (
        <>
            <form onSubmit={handleSubmit} className="py-4">
                <CardElement
                    options={{
                        style: {

                            base: {
                                fontSize: '14px',
                                padding: '20px',
                                backgroundColor: '#28283C',
                                color: '#ffff',
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
                <div className="flex justify-center h-16 mt-6">
                    <button type="submit" className="btn mx-auto btn-primary btn-wide " disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className="text-error my-2 text-center">{cardError}</p>
            }
            {
                successMsg && <>
                    <p className="text-green-500 my-1">{successMsg}</p>
                    <p className="text-green-500 my-1 font-bold">{transId}</p>
                </>
            }
        </>
    );
};


export default CheckoutForm