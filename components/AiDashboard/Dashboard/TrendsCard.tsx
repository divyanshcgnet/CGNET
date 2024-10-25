'use client'

import LineChart from '@/components/charts/LineChart'
import { getCoinInfo, getCoinOhlcv, getPrice } from '@/services/coinmarket'
import { activePairs } from '@/utils/activePairs'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ICoinInfo } from './Markets'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
interface TrendsCardInterface {
  data: {
    pair: string
    coin: string
    symbol: string
    icon: string
  }
  path: string
}
const TrendsCard = ({ data, path }: TrendsCardInterface) => {
  const [coinInfo, setCoinInfo] = useState<ICoinInfo | undefined>()
  const [textColorClass, setTextColorClass] = useState('text-[#41CB69]')

  const getCoin = async () => {
    const resPrice: ICoinInfo = await getPrice(data.symbol)
    setCoinInfo(resPrice)
  }

  useEffect(() => {
    getCoin()
  }, [])

  return (
    <Link
      href={`/CG-AI/markets/${path}`}
      className={`flex min-w-[20rem] cursor-pointer flex-col justify-between gap-4 rounded-2xl bg-[#25252E] p-4`}
    >
      <div className="flex justify-between">
        <div className="flex flex-grow gap-4">
          <Image
            className="h-8 w-8"
            src={data.icon}
            alt=""
            width={2000}
            height={2000}
          />
          <p className="text-xl font-bold leading-[140%] text-white/80 ">
            {data.symbol}
            <p className="text-[16px] font-medium leading-[140%] text-[#79869B]">
              {data.coin}
            </p>
          </p>
        </div>
        <span className="text-sm font-medium text-white/40">
          {coinInfo?.quote.USD.price
            ? `$${coinInfo?.quote.USD.price.toLocaleString('en-us')}`
            : 'Price Not Found'}
        </span>
      </div>
      <div className="flex justify-end gap-2">
        <div className="flex gap-2">
          <p
            className={`text-sm font-medium md:text-xl ${
              coinInfo?.quote.USD.percent_change_24h! > 0
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {coinInfo?.quote.USD.percent_change_24h
              ? coinInfo?.quote.USD.percent_change_24h.toFixed(2)
              : 0}
            %
          </p>
          {coinInfo?.quote.USD.percent_change_24h! > 0 ? (
            <FaCaretUp className="text-2xl text-green-500" />
          ) : (
            <FaCaretDown className="text-2xl text-red-500" />
          )}
        </div>
        {/* <div className="h-8 w-16">
          <LineChart
            color={
              coinInfo?.quote.USD.percent_change_24h! > 0 ? '#0f0' : '#f00'
            }
          />
        </div> */}
      </div>
    </Link>
  )
}

export default TrendsCard
