'use client'

import { useState } from 'react'
import { ButtonType } from '@/types/buttton'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { CgCheckO } from 'react-icons/cg'
import Button from '../shared/Button'
import { useRouter } from 'next/navigation'
import GetDiscountDialog from '../CgAi/GetDiscountDialogDiscord'
import { usePrivy } from '@privy-io/react-auth'
import ConnectWalletDialog from '../Navbar/ConnectWalletDialog'

interface IMembershipNewCard {
  price: number
  apy: 2 | 4 | 7
  planType: 1 | 3 | 12
  page?: boolean
  center?: boolean
  fit?: boolean
  checkoutLink?: string
  onSelect?: () => void
}

const MembershipNewCard = ({
  price,
  apy,
  planType,
  page,
  center,
  fit,
  checkoutLink,
}: IMembershipNewCard) => {
  const router = useRouter()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { ready, authenticated, login, user, logout } = usePrivy()

  const handleButtonClick = () => {
    if (authenticated) {
      setIsDialogOpen(true)
    } else {
       login() 
    }
  }

  return (
    <div
      className={`flex ${fit ? 'w-[20rem]' : 'w-full'} flex-col justify-center`}
    >
      <div
        className={`flex ${center ? 'h-full pb-20' : 'h-fit'} ${
          fit ? 'max-w-[20rem]' : ''
        } box-border w-full  flex-col items-center gap-4 rounded-2xl bg-themeBgBlack p-5`}
      >
        <div className="flex h-8 w-full items-center justify-between gap-12">
          <div className="font-semibold tracking-widest text-themeBlue">
            {planType} MONTH
          </div>
          {planType === 3 && (
            <div className="rounded-full bg-themeBorderBlue px-2 py-0.5 font-medium">
              Most Popular!
            </div>
          )}
        </div>
        <div className="mb-8 flex h-14 items-center justify-start gap-2">
          <div className={'h-full w-fit'}>
            <Image
              src="/Homepage/LargeToken/largeToken.png"
              alt=""
              width={489}
              height={492}
              className="h-full !w-fit object-contain"
            />
          </div>
          <div className="text-5xl font-bold">
            ${price}
            {/* <span className="text-base font-normal">
            /mo<sup>*</sup>
          </span> */}
          </div>
        </div>
        {/* <div className="w-full text-left text-themeLightGrey">
        Elevate your crypto journey and <br /> broaden your network.
      </div> */}

        <Button
          className="w-full"
          // onClick={() => router.push(checkoutLink!)}
          onClick={handleButtonClick}
          type={planType === 3 ? ButtonType.PRIMARY : ButtonType.SECONDARY}
        >
          Get Started <BsArrowRight />
        </Button>

        {/* <Button
          className="w-full"
          onClick={() => router.push(page ? '/stake' : '/membership')}
          type={planType === 3 ? ButtonType.PRIMARY : ButtonType.SECONDARY}
        >
          Get Started <BsArrowRight />
        </Button> */}
        <div className="mt-2 flex w-full flex-col gap-3 text-left">
          <div className="text-lg font-semibold">Benefits</div>
          <div className="flex flex-col gap-2 text-white/50">
            {/*<div className="flex items-center gap-2">*/}
            {/*  <CgCheckO className="text-white/50" />*/}
            {/*  {apy}% APY*/}
            {/*</div>*/}
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              AI Chatbot
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              Market Analysis by Traders
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              Access to educational content
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              AI Trading Assistant
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              AI Powered News
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              Discord Community
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              Access to Webinars
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              Smart Contract Analysis Tools
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              AI CryptoTwitter Analysis
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              Exclusive TradingView Indicators
            </div>
            <div className="flex items-center gap-2">
              <CgCheckO className="text-white/50" />
              24/7 Chat support
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            0% transaction fee
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            15 products
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            15 funnels
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            Unlimited landing pages
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            Unlimited marketing emails
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            25,000 contacts
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            10,000 active customers
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />1 website
          </div>
          <div className="flex items-center gap-2">
            <CgCheckO className="text-white/50" />
            10 admin users
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default MembershipNewCard
