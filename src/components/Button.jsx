import React from 'react';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import './Button.css'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NaaK3HEm4fWjjJbKpHXhYJMyXNUcZZ99BxJtTwe4OYdRM4QwhQj0JSwAvhCQQunYfr0JvJNU0FSWaYesfV6WuXa00dq0q0F6v');

const Button = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <ButtonComponent handlePayment={handlePayment} />
    </Elements>
  );
};

const ButtonComponent = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentClick = async () => {
    if (!stripe || !elements) {
      console.error('Stripe or Elements not loaded.');
      return;
    }

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      handlePayment(paymentMethod);
    } catch (error) {
      console.error('Error while creating PaymentMethod:', error);
    }
  };

  return (
    <button onClick={handlePaymentClick}>Pay Now</button>
  );
};

export default Button;
