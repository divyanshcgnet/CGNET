'use client'
import { useState } from 'react'
import {
  CardElement,
  AddressElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { paymentIntent, registerPayment } from '@/services/payment'
import { useSearchParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function StripePayment() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  console.log(searchParams.get('plan_id'), searchParams.get('coupon_id'))

  const stripe = useStripe()
  const elements = useElements()

  const handleChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    if(!email){
        console.error('Please provide a email address')
        setLoading(false)
        return
    }

    try {
      //@ts-ignore
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      })
      if (error) {
        console.error('Failed to create payment method:', error)
        setLoading(false)
        return
      }
      const billingAddress = elements.getElement(AddressElement)
      const addressValues = await billingAddress?.getValue()

      console.log(addressValues)
      if (!addressValues?.complete) {
        console.error('Failed to create payment method:', error)
        setLoading(false)
        return
      }

      const res = await paymentIntent(
        String(searchParams.get('plan_id')),
        String(searchParams.get('coupon_id')),
        paymentMethod.id,
        addressValues?.value.name,
        email
      )
      const result = await stripe.confirmCardPayment(res.clientSecret, {
        payment_method: {
          //@ts-ignore
          card: elements.getElement(CardElement),
          billing_details: {
            name: addressValues?.value.name,
            address: {
              line1: addressValues?.value.address.line1,
              city: addressValues?.value.address.city,
              state: addressValues?.value.address.state,
              postal_code: addressValues?.value.address.postal_code,
              country: addressValues?.value.address.country,
            },
          },
        },
      })
      if (result.error) {
        console.error('Payment Failed', error)
        setLoading(false)
        return
      }
      await registerPayment(
        result.paymentIntent.id,
        result.paymentIntent.status,
        String(searchParams.get('plan_id'))
      )
      setLoading(false)

      router.push('/payment/success')

      setTimeout(() => {
        router.push('/CG-AI/dashboard?showSocialMediaFollow=true')
      }, 3000)
            
    } catch (error) {
      console.error('Error creating checkout session:', error)
    }

    setLoading(false)
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white my-12">
      <h1 className="mb-6 text-3xl font-bold">Payment Page</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="cardElement"
            className="mb-2 block font-bold text-gray-700"
          >
            Card details
          </label>
          <CardElement
            id="cardElement"
            options={{ style: { base: { fontSize: '16px', color: 'white' } } }}
          />
          <div className="mb-4 mt-4 flex flex-col">
            <label className="text-sm font-semibold text-gray-500">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="h-10 rounded-md pl-3 text-black"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <AddressElement
            options={{
              mode: 'billing',
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-600"
          disabled={!stripe}
        >
          {loading ? 'Processing...' : 'Pay with Card'}
        </button>
      </form>
    </div>
  )
}
