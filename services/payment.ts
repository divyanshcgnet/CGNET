import axios from 'axios'
import { getToken } from './user'

export const paymentIntent = async (
  planId: string,
  couponId: string,
  paymentMethodId: string,
  name: string,
  email: string
) => {
  try {
    console.log(getToken())
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/stripe/process-payment`,
      {
        planId,
        couponId,
        paymentMethodId,
        name,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const registerPayment = async (
  intent: string,
  status: string,
  plan_id: string
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/stripe/register-payment`,
      {
        intent,
        status,
        plan_id,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
  } catch (error) {
    console.log(error)
    return null
  }
}

export const validateCoupon = async(couponName:string,paymentMethod:string)=>{
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stripe/validate-coupon?name=${couponName}&platform=${paymentMethod}`,{
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })

  return res.data;
}
