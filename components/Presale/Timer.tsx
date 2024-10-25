'use client'

import { makeMeTwoDigits } from '@/utils/numberFix'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { endSaleTime } from '@/services/web3Helper'
import Link from 'next/link'

export default function Timer() {
  const [timer, setTimer] = useState(Date.now() + 5000)

  const endSale = async () => {
    const saleTime = await endSaleTime()
    setTimer(saleTime * 1000)
  }

  useEffect(() => {
    endSale()
  }, [])

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <>Presale coming soon…</>
    return (
      <div className="relative z-1 flex items-start md:gap-4 gap-2 font-bold">
        <div className="flex aspect-square w-[3.7rem] flex-col items-center justify-center rounded-xl border border-themeBorderBlue/25 px-3 py-4 md:w-[7.22rem] md:py-6">
          <span className="text-3xl leading-7 md:text-6xl">
            {makeMeTwoDigits(days)}
          </span>
          <span className="text-xs md:pt-2 md:text-xl">Days</span>
        </div>
        <span className="mt-2 text-xl md:text-6xl">:</span>
        <div className="flex aspect-square w-[3.7rem] flex-col items-center justify-center rounded-xl border border-themeBorderBlue/25 px-3 py-4 md:w-[7.22rem] md:py-6">
          <span className="text-3xl leading-7 md:text-6xl">
            {makeMeTwoDigits(hours)}
          </span>
          <span className="text-xs md:pt-2 md:text-xl">Hours</span>
        </div>
        <span className="mt-2 text-xl md:text-6xl">:</span>
        <div className="flex aspect-square w-[3.7rem] flex-col items-center justify-center rounded-xl border border-themeBorderBlue/25 px-3 py-4 md:w-[7.22rem] md:py-6">
          <span className="text-3xl leading-7 md:text-6xl">
            {makeMeTwoDigits(minutes)}
          </span>
          <span className="text-xs md:pt-2 md:text-xl">Mins</span>
        </div>
        <span className="mt-2 text-xl md:text-6xl">:</span>
        <div className="flex aspect-square w-[3.7rem] flex-col items-center justify-center rounded-xl border border-themeBorderBlue/25 px-3 py-4 md:w-[7.22rem] md:py-6">
          <span className="text-3xl leading-7 md:text-6xl">
            {makeMeTwoDigits(seconds)}
          </span>
          <span className="text-xs md:pt-2 md:text-xl">Secs</span>
        </div>
      </div>
    )
  }
  return (
    <Animated className="relative z-1 flex flex-col items-center justify-center gap-8 overflow-hidden px-4 pb-16 pt-24 mmd:px-16">
      <div className="floating absolute -left-8 top-0 z-0 md:left-8">
        <Image
          src="/Presale/nfts (1).png"
          width={800}
          height={737}
          alt=""
          className="h-36 w-fit -rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div
        className="floating absolute -right-8 bottom-0 z-0 md:bottom-8 md:right-8"
        data-delay={1000}
      >
        <Image
          src="/Presale/nfts (2).png"
          width={800}
          height={803}
          alt=""
          className="h-36 w-fit rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div className="relative z-1 flex flex-col items-center justify-center">
        <div className="relative z-1 text-lg font-semibold text-themeVioletText">
          Time is ticking fast!
        </div>
        <div className="relative z-10 text-center text-3xl font-bold md:text-5xl">
          Presale Countdown
        </div>
      </div>
      <Countdown date={1706725800000} renderer={renderer} />
      <div className="relative z-1 text-lg">
        Lets get going with the Presale!
      </div>
      <Link
        href="presale#buy"
        className="flex !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
      >
        Buy & Stake Now
      </Link>
    </Animated>
  )
}
