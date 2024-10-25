'use client'

import { useEffect, useState } from 'react'
import { ButtonType } from '@/types/buttton'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { CgCheckO } from 'react-icons/cg'
import Button from '../shared/Button'
import { useRouter } from 'next/navigation'
import GetDiscountDialog from '../CgAi/GetDiscountDialogDiscord'
import { usePrivy } from '@privy-io/react-auth'
import MembershipPlans from './MembershipPlans'
import ConnectWallet from '../Navbar/ConnectWallet'
import ConnectWalletDialog from '../Navbar/ConnectWalletDialog'
import { getUserDetails } from '@/services/user'
import NewPaymentDialogBox from '../CgAi/NewPaymentDialogBox'

interface IMembershipPlanUpgrade {
  price: number
  apy: 2 | 4 | 7
  planType: 1 | 3 | 12
  page?: boolean
  center?: boolean
  fit?: boolean
  checkoutLink: string
  discountedCheckoutLink: string
}

const MembershipPlanUpgrade = ({
  price,
  apy,
  planType,
  page,
  center,
  fit,
  checkoutLink,
  discountedCheckoutLink,
}: IMembershipPlanUpgrade) => {
  const router = useRouter()
  const { authenticated } = usePrivy()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
  const { ready, login, user, logout, getAccessToken } = usePrivy()

  const handleButtonClick = () => {
    if (authenticated) {
      setIsDialogOpen(true)
    } else {
      login()
    }
  }

  const ShowButton = async () => {
    const username = await getUserDetails()
    setPlan(username.plan)
  }
  useEffect(() => {
    ShowButton()
  }, [])

  const numericPlan = plan ? plan.replace(/[^\d]/g, '') : null

  return (
    <div
      className={`flex ${fit ? 'w-[20rem]' : 'w-full'} flex-col justify-end h-[800px]`}
    >
      <div
        className={`flex ${planType === 3 ? 'h-full' : 'h-[95%]'} ${
          fit ? 'max-w-[20rem]' : ''
        } box-border w-full  flex-col items-start gap-4 rounded-2xl bg-themeBgBlack p-5`}
      >
        <div className="flex h-8 w-full items-center justify-between ">
         
          <div className="space-x-2 font-medium text-xs tracking-widest text-themeBlue">
            {numericPlan === planType.toString() && <span>CURRENT PLAN -</span>}<span>{planType}MONTH</span>
          </div>

          {planType === 3 && (
            <div className="rounded-full bg-themeBorderBlue px-2 py-1 font-medium text-sm">
              15% Discount
            </div>
          )}
          {planType === 12 && (
            <div className="rounded-full bg-themeBorderBlue px-2 py-1 font-medium text-sm">
              30% Discount
            </div>
          )}
        </div>
        <div className="mb-8 flex h-14 items-start justify-start gap-2">
          {/* <div className={'h-full w-fit'}>
            <Image
              src="/Homepage/LargeToken/largeToken.png"
              alt=""
              width={489}
              height={492}
              className="h-full !w-fit object-contain"
            />
          </div> */}
          <div className="text-5xl font-bold">${price}</div>
        </div>

        {numericPlan === planType.toString() && (
            <Button
              disabled={!ready}
              className="w-full"
              type={ButtonType.SECONDARY}
            >
              Cancel Subscription
            </Button>
        )}

        {numericPlan && parseInt(numericPlan) < planType && (
          <div className='flex w-full flex-col gap-4'>
            <Button
              disabled={!ready}
              className="w-full"
              onClick={handleButtonClick}
              type={ButtonType.PRIMARY}
            >
              Upgrade with Card Payment
            </Button>
            <div className="mx-auto flex w-full justify-center gap-2 text-white/60">
              <hr
                className="mt-3 w-1/4"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  height: '2px',
                }}
              />
              <div>or</div>
              <hr
                className="mt-3 w-1/4"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  height: '2px',
                }}
              />
            </div>
            <Button
              disabled={!ready}
              className="w-full"
              onClick={handleButtonClick}
              type={ButtonType.SECONDARY}
            >
              Upgrade with Crypto Payment
            </Button>
          </div>
        )}
        
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
      </div>
      {/* <GetDiscountDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        checkoutLink={checkoutLink}
        planType={planType}
        discountedCheckoutLink={discountedCheckoutLink}
      /> */}
      <NewPaymentDialogBox
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        checkoutLink={checkoutLink}
        planType={planType}
        discountedCheckoutLink={discountedCheckoutLink}
      />
    </div>
  )
}

export default MembershipPlanUpgrade
