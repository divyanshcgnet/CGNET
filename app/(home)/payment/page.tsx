'use client'
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './stripeConfig'; // Adjust path as per your setup
import StripePayment from '@/components/StripePayment/StripePayment';

export default function Payment() {
  return (
    <Elements stripe={stripePromise}>
        <StripePayment/>
    </Elements>
  );
}