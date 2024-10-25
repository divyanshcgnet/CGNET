'use client'

import { useState } from 'react'
import { ButtonType } from '@/types/buttton'
import { CgCheckO } from 'react-icons/cg'
import Button from '../shared/Button'
import { useRouter } from 'next/navigation'
import { usePrivy } from '@privy-io/react-auth'
import NewPaymentDialogBox from '../CgAi/NewPaymentDialogBox'
import { getUserDetails } from '@/services/user'

interface IMembershipNewCard {
  price: number
  apy: 2 | 4 | 7
  planType: 1 | 3 | 12
  page?: boolean
  center?: boolean
  fit?: boolean
  checkoutLink: string
  discountedCheckoutLink: string
}

const MembershipNewCard = ({
  price,
  apy,
  planType,
  page,
  center,
  fit,
  checkoutLink,
  discountedCheckoutLink,
}: IMembershipNewCard) => {
  const router = useRouter()
  const { authenticated } = usePrivy()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { ready, login } = usePrivy()

  const handleButtonClick = async () => {
    if (ready && !authenticated) {
      login()
    }
    const user = await getUserDetails()
    if (user.planStatus || user.access) {
      router.push('/CG-AI/explore')
    } else {
      router.push('/join')
    }
  }

  return (
    <div
      className={`flex ${fit ? 'w-[20rem]' : 'w-full'} flex-col justify-center`}
    >
      <div
        className={`flex ${center ? 'h-full pb-20' : 'h-fit'} ${
          fit ? 'max-w-[20rem]' : 'h-full'
        } box-border w-full  flex-col items-start gap-4 rounded-2xl bg-themeBgBlack p-5`}
      >
        <div className="flex h-8 w-full items-center justify-between gap-12">
          <div className="font-semibold tracking-widest text-themeBlue">
            {planType} MONTH
          </div>
          {planType === 3 && (
            <div className="rounded-full bg-themeBorderBlue px-2 py-0.5 font-medium">
              15% Discount
            </div>
          )}
          {planType === 12 && (
            <div className="rounded-full bg-themeBorderBlue px-2 py-0.5 font-medium">
              30% Discount
            </div>
          )}
        </div>
        <div className="flex h-14 items-start justify-start gap-2">
          <div className="text-5xl font-bold">${price}</div>
        </div>

        <Button
          disabled={!ready}
          className="w-full"
          onClick={handleButtonClick}
          type={planType === 3 ? ButtonType.PRIMARY : ButtonType.SECONDARY}
        >
          Get Started
        </Button>

        <div className="mt-2 flex w-full flex-col gap-3 text-left">
          <div className="text-lg font-semibold">Benefits</div>

          {planType === 1 ? (
            <div className="flex flex-col gap-2 pb-8 text-white/50">
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                ChatGenius AI
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                TradeAnalyzer AI
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                CryptoBuzz AI
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                ContractInsight AI
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Access to educational content
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Market Analysis by Traders
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Trade Ideas
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Discord Community
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                News & Blogs
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Market Stats
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                24/7 Chat support
              </div>
            </div>
          ) : planType === 3 ? (
            <div className="flex flex-col gap-2 text-white/50">
              <div className="flex items-center gap-2 text-white">
                Everything included in 1 month +
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Exclusive TradingView Indicators
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Weekly crypto market reports
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                AI tools on Discord
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Launchpad Access
              </div>
            </div>
          ) : planType === 12 ? (
            <div className="flex flex-col gap-2 text-white/50">
              <div className="flex items-center gap-2 text-white">
                Everything included in 3 month +
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Personalised Investing Plan
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Monthly Investment Review
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Exclusive Job Opportunities
              </div>
              <div className="flex items-center gap-2">
                <CgCheckO className="text-white/50" />
                Private Group With Traders
              </div>
            </div>
          ) : null}
        </div>

        <NewPaymentDialogBox
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
          checkoutLink={checkoutLink}
          planType={planType}
          discountedCheckoutLink={discountedCheckoutLink}
        />
      </div>
    </div>
  )
}

export default MembershipNewCard
