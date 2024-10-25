import React from 'react'
import MembershipPlans from '../Homepage/MembershipPlans'
import Image from 'next/image'
import Faq from '../PaymentFAQs/Faq'
import Button from '../shared/Button'
import { BsArrowRight } from 'react-icons/bs'
import { Testimonials } from './Testimonials'

export default function NewPaymentFlow() {
  return (
    <div>
      <div
        className="relative mb-10 flex w-full flex-col items-center justify-center overflow-visible px-4 pt-16 text-center md:py-20 mmd:px-8"
        id="scrolltomemebership"
      >
        <Image
          className="absolute -bottom-[20%] z-0 hidden h-fit w-full md:-top-[75%] md:h-[200%] md:w-[200rem] mmd:block"
          src="/paymentEllipse.svg"
          width={1920}
          height={1920}
          alt=""
        />
        <div className="relative z-1 text-3xl font-bold md:text-5xl">
          Welcome to the CG Tribe! Try CG for free!
        </div>
        <div className="relative z-1 my-4 text-lg text-white/60">
          First 3 days are on us. You won’t be charged anything for it. Explore
          the Cryptograd ecosystem today!
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-4 text-center text-lg font-semibold text-white/60 mmd:max-w-[60%]">
            Choose your payment plan
          </div>
          <MembershipPlans />
        </div>
        {/* <div className="mx-auto mt-4 w-full max-w-[1000px] px-4 text-center text-sm font-light text-white/60 mmd:text-start">
          Disclaimer: All prices given are in USDT, user will have to stake a
          minimum of $129.99 worth of CryptoGrad Native Tokens to get access to
          features given above
        </div> */}
      </div>
      <div className="space-y-4">
        <div className="mx-auto flex w-full justify-center gap-2 text-white/60">
          <hr
            className="mt-3 w-1/5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              height: '2px',
            }}
          />
          <div>TRUSTED BY</div>
          <hr
            className="mt-3 w-1/5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              height: '2px',
            }}
          />
        </div>
        <div className="mx-auto my-4 flex w-[85%] flex-wrap items-center justify-center gap-8">
          <Image
            src="/WeAccept/pay1.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay2.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay3.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay4.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay5.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay6.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay7.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
          <Image
            src="/WeAccept/pay8.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-7 w-fit md:h-10"
          />
        </div>
      </div>
      {/* <div className="mx-auto my-10 w-[80%] mmd:max-w-[900px]">
        <Image src="/payment.svg" width={1920} height={1920} alt="" />
      </div>
      <div className="space-y-4">
        <div className="mx-auto flex w-full justify-center gap-2 text-white/60">
          <hr
            className="mt-3 w-1/5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              height: '2px',
            }}
          />
          <div>TRUSTED BY</div>
          <hr
            className="mt-3 w-1/5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              height: '2px',
            }}
          />
        </div>
        <div className="mx-auto my-4 flex w-[85%] flex-wrap items-center justify-center gap-8">
          <Image
            src="/trustedby/cre.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/blokminers.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/no3.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/quill.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/dione.png"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/enigma.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/newtribe.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/confetti.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
          <Image
            src="/trustedby/crebaco.svg"
            width={1920}
            height={1920}
            alt=""
            className="h-8 w-fit"
          />
        </div>
      </div> */}
      <div className='flex flex-col items-center justify-center my-20'>
        <div className="mx-auto text-3xl font-bold md:text-5xl">
          What Our Users Say About Us!
        </div>
        <Testimonials />
      </div>
      <div>
        <Faq />
      </div>
      <div className="mx-auto my-10 flex w-[80%] flex-col items-center justify-center text-center mmd:max-w-[900px]">
        <div className="my-2 text-3xl font-bold mmd:text-5xl">
          Start your free trial today
        </div>
        <div className="text-lg text-white/60">
          Step into a space where ideas flourish, like minds connect, and
          inspiration knows no bounds. Join us now!
        </div>
        <div className="mt-8 flex gap-8">
          <Button>Get Started</Button>
          <button className="flex items-center gap-2">
            Buy Now
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
