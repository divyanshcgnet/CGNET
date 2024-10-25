'use client'

import Dashboard from '@/components/Stake/Dashboard'
import Perks from '@/components/Stake/Perks'
import Stake from '@/components/Stake/Stake'
import StakeFaq from '@/components/Stake/StakeFaq'
import StakeRewards from '@/components/Stake/StakeRewards'
import Swap from '@/components/Swap/Swap'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

export default function StakePage() {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative grid grid-cols-1 gap-16 px-4 py-8 md:grid-cols-2 md:gap-8 md:px-8 mmd:grid-cols-3">
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex justify-center bg-themeBgBlack/40 pt-60 text-xl font-bold backdrop-blur-sm">
        Coming Soon...
      </div>
      {/* <div className="col-span-2 flex flex-col gap-8"> */}
      <div className="flex flex-col gap-4 md:row-span-1 mmd:col-span-2">
        <div className="text-3xl font-semibold">Dashboard</div>
        <Dashboard />
      </div>
      {/* <div className="flex flex-col gap-4 md:row-span-2">
        <div className="text-3xl font-semibold">Stake CG Token</div> */}
      <Stake />
      {/* </div> */}
      <div className="row-start-2 flex flex-col gap-4 md:row-span-2 md:row-start-auto mmd:col-span-2">
        <div className="flex flex-col gap-2 text-3xl font-semibold md:flex-row md:items-end">
          <span>Perks of Staking</span>
          <div className="flex items-center gap-2 pb-1 text-sm font-light text-white/30">
            <div className="flex items-center gap-1">
              <IoIosInformationCircleOutline />
              Want Access?
            </div>
            <span className="text-themeBlue underline">Stake Now</span>
          </div>
        </div>
        <Perks />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-semibold">Rewards</div>
        <StakeRewards />
      </div>
      <div className="flex flex-col gap-4 mmd:col-span-2">
        <div className="text-3xl font-semibold">FAQ</div>
        <StakeFaq />
      </div>
      <div className="row-start-5 flex flex-col gap-4 md:row-start-auto">
        <div className="text-3xl font-semibold">Swap CG Token</div>
        <Swap className={'!w-full'} />
      </div>
      <div className="flex flex-col gap-4 mmd:col-span-2">
        <div className="text-3xl font-semibold">
          For More Info Head Over To Our Telegram
        </div>
        <Link
          className="flex !h-12 min-h-[2.5rem] w-fit items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
          href="https://t.me/cryptogradportal"
          target="_blank"
          rel="noreferrer noopener"
        >
          Join The Community
        </Link>
      </div>
      {/* </div> */}
      {/* <div className="col-span-1 flex flex-col gap-8"> */}
      {/* <div className="col-span-2 flex flex-col gap-8"> */}

      {/* </div> */}
      {/* </div> */}
    </div>
  )
}
