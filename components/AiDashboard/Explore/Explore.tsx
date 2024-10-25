'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Animated from '@/components/shared/Animated'
import ExploreCard, { IExploreData } from './ExploreCard'

const cardData: IExploreData[] = [
  {
    name: 'Chat Genius',
    path: '/CG-AI/chat/chat-genius/newChat',
    text: 'Your AI crypto chatbot for questions, market insights, and trading tips',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-3.png',
  },
  {
    name: 'Trade Analyser',
    path: '/CG-AI/chat/trade-analyzer/newChat',
    text: 'Your Partner in Smart, Informed Trading with Live Market Analysis.',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-4.png',
    active: false,

  },
  {
    name: 'Crypto Buzz',
    path: '/CG-AI/chat/crypto-buzz/newChat',
    text: 'Stay updated with real-time crypto news, trends, and crypto twitter',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-1.png',
    active: false,

  },
  {
    name: 'Contract Insight',
    path: '/CG-AI/chat/contract-insight/newChat',
    text: 'Smart contract analysis tool for transparency and security',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-2.png',
    active: false,
  },
  {
    name: 'Market Stats',
    path: '/CG-AI/markets/BTC',
    text: 'Crypto Market at Your Fingertips: Live and Direct',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-6.png',
    active: false,

  },
  {
    name: 'Swap',
    path: '/swap',
    text: "Effortless Crypto Swaps with CryptoGrad's Trusted Platform.",
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-7.png',
    active: false,

  },
  {
    name: 'NFTs',
    path: '#',
    text: 'Dive into the CryptoGrad universe, Avatars arriving soon',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-9.png',
    active: false,

  },
  // {
  //   name: 'Stake',
  //   path: '/stake',
  //   text: 'Stake your CG tokens to access a world of benefits within the CryptoGrad ecosystem',
  //   type: 'Cryptograd',
  //   icon: '/CgAi/ChatAi/chat-ai-8.png',
  //   active: false
  // },
  {
    name: 'Blogs',
    path: '/CG-AI/blog',
    text: 'Dive into a wealth of knowledge with our crypto blogs',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-10.png',
    active: false,

  },
  {
    name: 'LaunchPad',
    path: '#',
    text: 'Your gateway to early cryptocurrency opportunities',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-5.png',
    active: false,
  },
  {
    name: 'Discord',
    path: 'https://discord.gg/GQJTSFdTwh',
    text: 'Our vibrant Discord community, where crypto enthusiasts, traders, and experts come together',
    type: 'Cryptograd',
    icon: '/CgAi/ChatAi/chat-ai-11.png',
    target: true,
    active: false,

  },
  {
    name: 'Bybit',
    path: '#',
    text: 'Lorem ipsum dolor simith, Lorem ipsum dolor simith, Lorem ipsum dolor simith,',
    type: 'CEX Partners',
    icon: '/CgAi/ChatAi/chat-ai-12.png',
    active: false,

  },
  {
    name: 'Kucoin',
    path: '#',
    text: 'Lorem ipsum dolor simith, Lorem ipsum dolor simith, Lorem ipsum dolor simith,',
    type: 'CEX Partners',
    icon: '/CgAi/ChatAi/chat-ai-13.png',
    active: false,

  },
]

export default function Explore() {
  const [tab, setTab] = useState('Cryptograd')
  const [searchedData, setSearchedData] = useState([...cardData])
  const [search, setSearch] = useState('')

  const filterSearch = () => {
    const temp = cardData.filter((item) => {
      if (search === '') return true
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    setSearchedData([...temp])
  }

  useEffect(() => {
    filterSearch()
  }, [search])

  return (
    <div className="relative w-full overflow-hidden p-4 md:p-8">
      <Image
        src="/Referral/ellipse-right.svg"
        alt=""
        width={526}
        height={526}
        className="absolute -top-[60%] right-0 z-0 hidden w-full blur-2xs md:block opacity-60"
      />
      <Image
        src="/effects/ellipse-1.svg"
        className="absolute left-0 top-0 z-0 hidden h-full w-full object-cover opacity-30 md:block"
        alt=""
        width={435}
        height={640}
      />
      <Image
        src="/effects/hero-eff-1.svg"
        className="absolute -top-[500px] z-0 hidden opacity-80 md:block"
        alt=""
        width={870}
        height={609}
      />
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -bottom-[30%] -left-[50%] z-0 h-[800px] w-full opacity-40"
      />
      <p className="relative z-1 flex text-lg font-normal leading-[140%] md:hidden">
        AI Tasks on Fingertips
      </p>
      <div className="relative z-1 hidden w-full flex-col gap-2 md:flex">
        <p className="text-3xl font-semibold leading-[130%]">
          Explore The CryptoGrad Ecosystem
        </p>
        <p className="relative z-1 mb-4 font-normal leading-[140%] text-white/80">
        Discover AI-powered tools and blockchain resources to elevate your crypto journey. Learn, grow, and access expert insights. Welcome to the future of blockchain education.
        </p>
        <div className="relative mb-4 h-12 w-full items-center justify-between rounded-lg border-2 border-[#FFFFFF4D] outline-none md:w-[400px]">
          <input
            type="text"
            className="h-full w-full rounded-lg border-none bg-[#070b16] px-4 text-lg outline-none"
            placeholder="Search Ecosystem"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 transform">
            <Image
              className="h-8 w-8"
              src={'/CgAi/ChatAi/search.png'}
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>

        {/* <Animated className="relative z-5 hidden flex-col gap-16 pt-8 md:flex"> */}
        <div className="mb-4 flex w-full items-center justify-between gap-8 border-b-2 border-white/10 font-light md:justify-start">
          {/* <button
            onClick={() => setTab('all')}
            className={`${
              tab === 'all' &&
              'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue px-2'
            } relative pb-2 font-medium text-white/80 hover:text-white`}
          >
            All
          </button> */}
          <button
            onClick={() => setTab('Cryptograd')}
            className={`${
              tab === 'Cryptograd' &&
              'h-full px-2 font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-2 font-medium text-white/80 hover:text-white`}
          >
            Cryptograd
          </button>
          {/* <button
            onClick={() => setTab('CEX Partners')}
            className={`${
              tab === 'CEX Partners' &&
              'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue px-2'
            } relative pb-2 font-medium text-white/80 hover:text-white`}
          >
            CEX Partners
          </button> */}
        </div>
        {/* <div className="flex w-full items-center justify-between gap-6 rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
          <button
            onClick={() => setTab('all')}
            className={`rounded-full ${
              tab === 'All' && 'bg-themeBlackDeep'
            } px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base ${
              tab === 'all' && 'bg-themeBlackDeep'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setTab('Cryptograd')}
            className={`rounded-full px-2.5 py-2 text-xs transition-all ${
              tab === 'Cryptograd' && 'bg-themeBlackDeep'
            } hover:bg-themeBlackDeep md:text-base`}
          >
            Cryptograd
          </button>
          <button
            onClick={() => setTab('CEX Partners')}
            className={`rounded-full px-2.5 py-2 text-xs transition-all ${
              tab === 'CEX Partners' && 'bg-themeBlackDeep'
            } hover:bg-themeBlackDeep md:text-base`}
          >
            CEX Partners
          </button>
        </div> */}
        {/* </Animated> */}
      </div>
      <div className="relative z-1 flex w-full">
        <div className="relative z-1 mt-4 grid w-full gap-4 md:mt-16 md:w-fit md:grid-cols-2 mmd:min-w-0 lg:grid-cols-3">
          {searchedData
            .filter((item) => tab === 'all' || item.type === tab)
            .map((item, index) => (
              <ExploreCard data={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}
