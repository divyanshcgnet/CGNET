'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from '../shared/Button'
import { MdDone } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import { FaDiscord } from 'react-icons/fa'
import { FaPercent } from 'react-icons/fa'
import {
  addDiscordUsername,
  getUserDetails,
  updateUserAccess,
} from '@/services/user'
import { validateCoupon } from '@/services/payment'
import { usePrivy } from '@privy-io/react-auth'
import { MdCreditCard } from 'react-icons/md'
import { BsCurrencyBitcoin } from 'react-icons/bs'
export default function NewPaymentDialogBox({
  isOpen,
  setIsOpen,
  discountedCheckoutLink,
  planType,
  checkoutLink,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  checkoutLink: string
  planType: 1 | 3 | 12
  discountedCheckoutLink: string
}) {
  const [showDiscountField, setShowDiscountField] = useState(false)
  const [discountLocked, setDiscountLocked] = useState(false)
  const [discount, setDiscount] = useState('')
  const [discord, setDiscord] = useState('')
  const [discountStatus, setDiscountStatus] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('Stripe')
  const { user } = usePrivy()
  const router = useRouter()

  const closeModal = () => {
    setIsOpen(false)
  }

  const validateDiscountCode = async () => {
    try {
      const { success, code } = await validateCoupon(discount, paymentMethod)
      setDiscountStatus(success)
      return code
    } catch (err) {
      setDiscountStatus(false)
    }
  }

  const validateDiscountCodeForFreeAccess = async () => {
    try {
      if (discount === 'caledonian50') {
        await updateUserAccess()
        setDiscountStatus(true)
      }
    } catch (err) {
      setDiscountStatus(false)
    }
  }

  const handleShowDiscountField = () => {
    setShowDiscountField(true)
  }

  // const handleContinue = async () => {
  //   try {
  //     console.log(planType)
  //     if (discord) {
  //       const result = await addDiscordUsername(discord)
  //       console.log('addDiscordUsername returned:', result)
  //     }
  //     const stripeCheckout = `/payment?plan_id=${planType === 1 ? process.env.NEXT_PUBLIC_1_MONTH_PLAN_ID : planType === 3 ? process.env.NEXT_PUBLIC_3_MONTH_PLAN_ID : process.env.NEXT_PUBLIC_12_MONTH_PLAN_ID}`
  //     const couponCode = await validateDiscountCode()
  //     if (discountStatus) {
  //       setDiscountStatus(true)
  //       window.location.assign(
  //         paymentMethod !== 'Stripe'
  //           ? couponCode + `?refId=${user?.id}`
  //           : stripeCheckout + `&coupon_id=${couponCode}`
  //       )
  //     } else {
  //       console.log(planType)
  //       window.location.assign(
  //         paymentMethod !== 'Stripe' ? checkoutLink : stripeCheckout
  //       )
  //     }
  //   } catch (error) {
  //     setDiscountStatus(false)
  //     console.error('Error in addDiscordUsername:', error)
  //   }
  // }

  const handleContinue = async () => {
    const user = await getUserDetails()
    if (user.access) {
      router.push('/CG-AI/dashboard?showSocialMediaFollow=true')
    }
    else {
      closeModal()
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-themeDialogBlack p-4 text-left align-middle shadow-xl transition-all md:p-6">
                {/* {!showDiscountField && (
                  <>
                    <button
                      onClick={closeModal}
                      className="absolute right-4 top-4 block rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                    >
                      <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                    </button>
                    <div className="flex flex-col gap-8">
                      <div className="text-center text-xl font-medium md:text-3xl">
                        Payment Mode
                      </div>

                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-col gap-4">
                            <label
                              className={`custom-radio flex items-center justify-between gap-2 rounded-lg border p-4 text-white hover:border-themeViolet ${
                                paymentMethod === 'Stripe'
                                  ? 'border-themeViolet'
                                  : 'border-gray-500'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <MdCreditCard className="text-xl text-white" />
                                Debit/Credit Card
                              </div>
                              <input
                                type="radio"
                                value="Stripe"
                                checked={paymentMethod === 'Stripe'}
                                onChange={(e) =>
                                  setPaymentMethod(e.target.value)
                                }
                              />
                              <div className="outer-circle">
                                <div className="inner-circle"></div>
                              </div>
                            </label>
                            <label
                              className={`custom-radio flex items-center justify-between gap-2 rounded-lg border p-4 text-white hover:border-themeViolet ${
                                paymentMethod === 'Loop'
                                  ? 'border-themeViolet'
                                  : 'border-gray-500'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <BsCurrencyBitcoin className="text-xl text-white" />
                                Cryptocurrency
                              </div>
                              <input
                                type="radio"
                                value="Loop"
                                checked={paymentMethod === 'Loop'}
                                onChange={(e) =>
                                  setPaymentMethod(e.target.value)
                                }
                              />
                              <div className="outer-circle">
                                <div className="inner-circle"></div>
                              </div>
                            </label>
                          </div>
                        </div>
                        <Button onClick={handleShowDiscountField}>
                          Continue
                        </Button>
                      </div>
                    </div>
                  </>
                )} */}
                {/* {showDiscountField && ( */}
                  <>
                    <button
                      onClick={() => {
                        setShowDiscountField(false)
                        closeModal()
                      }}
                      className="absolute right-4 top-4 block rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                    >
                      <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                    </button>
                    <div className="flex flex-col gap-8">
                      <div className="text-start text-xl font-medium md:text-3xl">
                        Get Discount
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-end justify-between">
                          <span className="text-sm text-white">
                            Discount Code
                          </span>
                          {/* {discount && !discountStatus && (
                            <span className="text-xs font-bold text-red-500">
                              Invalid Discount
                            </span>
                          )} */}
                        </div>
                        <div
                          className={`flex h-14 items-center ${
                            discountLocked ? 'opacity-50' : ''
                          } justify-between gap-4 rounded border-2 border-white/10 px-2 text-left md:px-3`}
                        >
                          <div className="flex flex-grow items-center gap-2 md:gap-4">
                            <input
                              type="text"
                              value={discount}
                              placeholder="Enter discount code here"
                              disabled={discountLocked}
                              onChange={(e) => {
                                setDiscount(e.target.value)
                                setDiscountStatus(false)
                              }}
                              className="flex-grow border-none bg-inherit outline-none"
                            />
                            {!discountStatus && (
                              <button
                                onClick={validateDiscountCodeForFreeAccess}
                              >
                                Apply
                              </button>
                            )}
                          </div>

                          {discountStatus && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                              <MdDone className="text-xl" />
                            </span>
                          )}
                        </div>
                      </div>
                      <Button onClick={handleContinue}>Continue</Button>
                    </div>
                  </>
                {/* )} */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
