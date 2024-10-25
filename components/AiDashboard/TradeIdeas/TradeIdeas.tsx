'use client'
import { useEffect, useState } from 'react'
import MarketTrendingNews from '../Dashboard/atoms/MarketsTrendingNews'
import { getAllNews } from '@/services/coinmarket'
import { GrCalendar } from 'react-icons/gr'
import { FaUserLarge } from 'react-icons/fa6'
import moment from 'moment'
import Image from 'next/image'
import { ITradeIdeas, getAllTradeIdeas } from '@/services/tradeIdeas'
import Loader from '@/components/shared/Loader'

const TradeIdeas = () => {
  const [news, setNews] = useState([])
  const [tradeIdeas, setTradeIdeas] = useState<ITradeIdeas[]>([])
  const getNews = async () => {
    const resTradeIdeas = await getAllTradeIdeas()
    console.log(resTradeIdeas)
    setTradeIdeas(resTradeIdeas)
    const resNews = await getAllNews()
    setNews(resNews.slice(0, 4))
  }

  function formatDate(createdAt: string) {
    return new Date(createdAt).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  useEffect(() => {
    getNews()
  }, [])

  return tradeIdeas.length > 0 ? (
    <div className="flex w-full flex-col gap-4 p-4 md:p-8">
      <div className="relative grid h-full grid-cols-6 gap-8 md:gap-4 mmd:grid-cols-3 xl:grid-cols-6">
        <div className="col-span-6 flex flex-col gap-4 md:gap-8 mmd:col-span-3 xl:col-span-3 2xl:col-span-4">
          <div className="flex items-center justify-between text-3xl font-semibold">
            Trade Ideas
            <GrCalendar />
          </div>
          {tradeIdeas.map((tradeIdea: ITradeIdeas) => (
            <div
              key={tradeIdea._id}
              className="flex flex-col gap-4 rounded-lg bg-[#25252E] p-4 mmd:p-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center overflow-hidden rounded-full bg-themeLightGrey md:h-12 md:w-12 md:min-w-[3rem]">
                  <FaUserLarge className="md:text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    {tradeIdea.author.name}
                  </span>
                  <span className="text-sm text-white/40">
                    {formatDate(tradeIdea.createdAt)}
                  </span>
                </div>
              </div>
              {/*<div className="font-medium">BTC LONG</div>*/}
              <div>
                {tradeIdea.name} {tradeIdea.symbol}
                <br />
                Order Type: {tradeIdea.orderType} order <br />
                Position Type: {tradeIdea.position} <br />
                Entry: {tradeIdea.entry} <br />
                Stop Loss: {tradeIdea.stopLoss} <br />
                Take Profit: {tradeIdea.profit} <br />
                Risk: {tradeIdea.risk}%
              </div>
              <Image
                src={tradeIdea.tradeImage}
                alt=""
                width={1482}
                height={971}
                className="w-full"
              />
            </div>
          ))}
        </div>
        <div className="col-span-3 h-full">
          <div className={'sticky top-24'}>
            <MarketTrendingNews news={news} noReadMore tradeIdeas />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="pageHeight flex w-full items-center justify-center">
      <Loader />
    </div>
  )
}

export default TradeIdeas
