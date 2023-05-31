import React, { useEffect, useState } from 'react'
import "./Payment.scss"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest"
import {useParams} from "react-router-dom"
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51N9z6HCzF7KMIl4VazElbsJz6QmP1Tu4eccMpFWPpA9dxI0KzqrfHeeMEUrCNAZP6h3fOoVutV9dMfbi8vFsvPNL00cAKTq5mt");


const Payment = () => {

    const [clientSecret, setClientSecret] = useState("");

    const {id} = useParams()

    useEffect(()=>  {

        const makeRequest = async () =>{
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);

                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err)
                
            }
        };
        makeRequest();

    },[]);

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div className='payment'>
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Payment