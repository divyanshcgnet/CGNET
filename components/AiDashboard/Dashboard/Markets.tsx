'use client'
import Button from '@/components/shared/Button'
import {
  getCoinInfo,
  getCoinInfoFromSlug,
  getCoinOhlcv,
  getNews,
  getPrice,
} from '@/services/coinmarket'
import { activePairs } from '@/utils/activePairs'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FaCaretUp } from 'react-icons/fa6'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import MarketLowerPanel from './atoms/MarketsLowerPanel'
import MarketTrendingNews from './atoms/MarketsTrendingNews'
import { FaCaretDown } from 'react-icons/fa'
import Loader from '@/components/shared/Loader'
import Link from 'next/link'
import { blockedCurrencies } from '@/utils/blockedCurrencies'
import { CgSpinner } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export interface ICoinInfo {
  circulating_supply: number
  symbol: string
  name: string
  quote: {
    USD: {
      fully_diluted_market_cap: number
      last_updated: string
      market_cap: number | null
      market_cap_dominance: number
      percent_change_1h: number
      percent_change_7d: number
      percent_change_24h: number
      percent_change_30d: number
      percent_change_60d: number
      percent_change_90d: number
      price: number | null
      volume_24h: number
      volume_change_24h: number
    }
  }
}
export interface IOhlcv {
  symbol: string
  quote: {
    USD: {
      close: number
      high: number
      low: number
      open: number
      volume: number
    }
  }
}

const Markets = ({ pair }: { pair: string }) => {
  const [tab, setTab] = useState(0)
  const [width, setWidth] = useState(50)
  const [coinInfo, setCoinInfo] = useState<ICoinInfo | undefined>()
  const [loading, setLoading] = useState(true)
  const [olcv, setOlcv] = useState<IOhlcv | undefined>()
  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState(false)
  const [news, setNews] = useState([])
  const [pairCoin, setPairCoin] = useState('')
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [coin, setCoin] = useState<
    | {
        pair: string
        coin: string
        symbol: string
        icon: string
      }
    | undefined
  >()
  const [info, setInfo] = useState<
    | {
        name: string
        logo: string
      }
    | undefined
  >()
  const [infoSearch, setInfoSearch] = useState<
    {
      name: string
      logo: string
      symbol: string
    }[]
  >([])
  const router = useRouter()

  const getInfo = async () => {
    // if (!coin) return
    console.log({ coin, pairCoin })
    if (!coin && !pairCoin) return
    try {
      const res = await getCoinInfo(coin ? coin.symbol : pairCoin)
      // if(!res) throw new Error("coin not found")
      setInfo(res)
      const resOlcv = await getCoinOhlcv(coin ? coin.symbol : pairCoin)
      setOlcv(resOlcv)
      const resNews = await getNews(coin ? coin.symbol : pairCoin)
      setNews(resNews.slice(0, 4))
      const resPrice = await getPrice(coin ? coin.symbol : pairCoin)
      setCoinInfo(resPrice)
      console.log({ res, resOlcv, resPrice })
      setWidth(
        (Math.abs(olcv?.quote.USD.low! - olcv?.quote.USD.high!) * 100) /
          coinInfo?.quote.USD.price!
      )
      // console.log({
      //   olcv: resOlcv,
      //   price: resPrice,
      // })
      setLoading(false)
    } catch (err) {
      console.log(err)
      router.back()
    }
  }

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    setInfoSearch([])
    const newArr = []
    try {
      if (!search) return
      setLoadingSearch(true)
      const checkBlocked = blockedCurrencies.find(
        (blocked) => blocked === search.toUpperCase()
      )
      if (checkBlocked) return
      try {
        const res = await getCoinInfo(search.toUpperCase())
        // setInfoSearch(res)
        // console.log({ res })
        res && newArr.push(res)
      } catch (e) {
        console.log(e)
      }
      try {
        const resSlug = await getCoinInfoFromSlug(search.toLowerCase())
        console.log({ resSlug })
        resSlug && newArr.push(resSlug)
      } catch (e) {
        console.log(e)
      }
      // console.log(newArr)
      setLoadingSearch(false)
      setInfoSearch(newArr)
      setSearched(true)
    } catch (e) {
      setLoadingSearch(false)
      setSearched(true)
      console.log(e)
    }
  }

  useEffect(() => {
    setCoin(activePairs[pair])
    // console.log(pair)
    setPairCoin(pair)
    getInfo()
  }, [pair, coin, pairCoin])

  return loading ? (
    <Loader />
  ) : (
    <div className="flex w-full flex-col gap-8 p-4 md:p-8 mmd:gap-16">
      <p className="text-3xl font-semibold md:text-5xl">Market Stats</p>
      <div className="flex flex-col-reverse gap-8 mmd:flex-row">
        <div className="flex w-full flex-col gap-2">
          <div className="flex justify-between md:w-[350px]">
            <div className="flex gap-1">
              <Image
                src={coin ? coin?.icon : info?.logo!}
                className="h-16 w-16"
                width={2000}
                height={2000}
                alt=""
              />
              <div className="flex flex-col p-1">
                <p className="text-2xl font-bold leading-[140%] text-white/80 ">
                  {info?.name}
                </p>
                <p className="text-[16px] font-medium leading-[140%] text-[#79869B]">
                  {coinInfo?.quote.USD.price
                    ? `$${coinInfo?.quote.USD.price.toLocaleString('en-us')}`
                    : 'Price Not Found'}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {coinInfo?.quote.USD.percent_change_24h &&
              coinInfo?.quote.USD.percent_change_24h > 0 ? (
                <Button className="h-6 w-fit cursor-default !gap-1 !pl-2 !pr-3 text-sm font-normal">
                  <FaCaretUp className="text-2xl" />
                  {coinInfo?.quote.USD.percent_change_24h.toFixed(2)}%
                </Button>
              ) : (
                <Button className="h-6 w-fit cursor-default !gap-1 bg-none !pl-2 !pr-3 text-sm font-normal">
                  <FaCaretDown className="text-2xl" />
                  {coinInfo?.quote.USD.percent_change_24h.toFixed(2)}%
                </Button>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white/80">
              Low: ${olcv?.quote.USD.low.toLocaleString('en-us')}
            </p>
            <div className="relative mx-4 flex h-6 w-[100px] items-center">
              <div className="relative h-1 w-full overflow-hidden rounded-full bg-themeBorderBlue/60">
                <span
                  style={{
                    width: `${width}px`,
                  }}
                  className="absolute bottom-0 left-0 top-0 h-full rounded-full bg-themeBorderBlue"
                ></span>
              </div>
              <div
                style={{
                  left: `${width - 8}px`,
                }}
                className="absolute top-4"
              >
                <FaCaretUp className="text-themeBorderBlue" />
              </div>
            </div>
            <p className="text-xs text-white/80">
              High: ${olcv?.quote.USD.high.toLocaleString('en-us')}
            </p>
            {/* <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            defaultValue={10}
            className="h-5 w-20"
          >
            <MenuItem value={10} className="text-normal text-base">
              24h
            </MenuItem>
            <MenuItem value={20}>12h</MenuItem>
            <MenuItem value={30}>6h</MenuItem>
          </Select> */}
          </div>
        </div>
        <form
          onSubmit={handleSearch}
          className="relative mb-4 flex w-full gap-2 outline-none mmd:max-w-[800px]"
        >
          <div className="relative h-12 w-full items-center justify-between rounded-lg border-2 border-[#FFFFFF4D]">
            <input
              type="text"
              className="h-full w-full rounded-lg border-none bg-[#070b16] px-4 text-lg outline-none"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 transform text-xl text-white/60 transition-colors hover:text-white"
              >
                <IoClose />
              </button>
            )}
            {search && searched && (
              <div className="absolute top-[102%] z-2 w-full overflow-hidden rounded-lg bg-themeBgBlack shadow">
                {infoSearch.length === 0 && (
                  <div className="flex h-12 items-center justify-center gap-2 px-4 text-lg font-bold text-white/60 transition-colors">
                    {loadingSearch ? (
                      <CgSpinner className="animate-spin" />
                    ) : (
                      'No Results'
                    )}
                  </div>
                )}
                {infoSearch.map((item) => (
                  <Link
                    key={item.symbol}
                    href={`/CG-AI/markets/${item.symbol}`}
                    className="flex items-center gap-2 px-4 py-2 transition-colors hover:bg-themeBorderBlue"
                  >
                    <Image
                      src={item.logo!}
                      className="h-8 w-8"
                      width={2000}
                      height={2000}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-sm text-white/40">
                        {item.symbol}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Button
            loading={loadingSearch}
            className="aspect-square !h-12 !min-h-0 !px-0"
          >
            {loadingSearch ? (
              <></>
            ) : (
              <Image
                className="h-6 w-6"
                src={'/CgAi/ChatAi/search.png'}
                alt=""
                width={800}
                height={800}
              />
            )}
          </Button>
        </form>
      </div>

      {/* <div className="noScrollbar flex gap-12 overflow-x-scroll border-b border-b-[#969696] pb-4 md:px-8 md:text-xl">
        <div
          className={`cursor-pointer opacity-[0.8] ${
            tab === 0 ? 'text-[#FFF]' : 'text-gray-400'
          }`}
          onClick={() => setTab(0)}
        >
          Overview
        </div>
        <div
          className={`cursor-pointer opacity-[0.8] ${
            tab === 1 ? 'text-[#FFF]' : 'text-gray-400'
          }`}
          onClick={() => setTab(1)}
        >
          Timeline
        </div>
        <div
          className={`cursor-pointer opacity-[0.8] ${
            tab === 2 ? 'text-[#FFF]' : 'text-gray-400'
          }`}
          onClick={() => setTab(2)}
        >
          News
        </div>
        <div
          className={`cursor-pointer opacity-[0.8] ${
            tab === 3 ? 'text-[#FFF]' : 'text-gray-400'
          }`}
          onClick={() => setTab(3)}
        >
          Ideas
        </div>
        <div
          className={`cursor-pointer opacity-[0.8] ${
            tab === 4 ? 'text-[#FFF]' : 'text-gray-400'
          }`}
          onClick={() => setTab(4)}
        >
          Technicals
        </div>
        <div
          className={`cursor-pointer opacity-[0.8] ${
            tab === 5 ? 'text-[#FFF]' : 'text-gray-400'
          }`}
          onClick={() => setTab(5)}
        >
          Markets
        </div>
      </div> */}
      <div className="grid grid-cols-6 gap-8 md:gap-4 mmd:grid-cols-3 xl:grid-cols-6">
        <MarketLowerPanel
          pair={`${pair}`}
          currency={coinInfo?.name}
          coinInfo={coinInfo!}
          // olcv={olcv!}
        />
        <MarketTrendingNews news={news} />
      </div>
    </div>
  )
}

export default Markets
