import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M6HlTI7CCeNbXLrEsPgVnYMvSgKy5lhERm4aOd8k9vhWp2ce6lKnMNBdRVI6Nsdt5N7IAim1cEXFKgLliWbX5mn00ebrqUMN4');

console.log(stripePromise);
const Payment = () => {
    const id = useParams().id;

    const { data: purchasedItem = [] } = useQuery({
        queryKey: ['purchasedItem', id],
        queryFn: () => fetch(`${process.env.REACT_APP_Base_URL}/myPurchaseList/${id}`)
            .then(res => res.json())
    })
    // console.log(purchasedItem);
    var d = new Date();
    var date = d.getUTCDate();
    var month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
    var year = d.getUTCFullYear();

    var dateStr = date + "/" + month + "/" + year;
    // console.log(dateStr)
    const { buyerEmail, carModelName, carID, sellingPrice, buyerContact } = (purchasedItem);
    return (
        <div>
            <p className="text-center text-3xl font-bold text-primary mb-8">Payment for {carModelName} charge: ${sellingPrice}</p>
            <p className="text-center text-lg  mb-8">Buyer Info:  ✉{buyerEmail} ☎ {buyerContact} <br /> on {dateStr}</p>
            <hr className="w-12 mx-auto my-4" />


            <div className="w-96 h-22 max-w-4xl px-4 mt-6 border-slate-700 shadow-indigo-500 shadow-sm rounded-md border-2 mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        purchasedItem={purchasedItem}
                        dateStr={dateStr}
                    />
                </Elements>
            </div>
        </div>
    )
}

export default Payment