import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise: PromiseLike<Stripe | null> = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_API_KEY}`);

export default stripePromise;