'use client'
import Image from 'next/image'
import TrendsCard from './TrendsCard'
import QuickActionCard from './QuickActionCard'
import ExploreCard from './ExploreCard'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'
import { RxTwitterLogo } from 'react-icons/rx'
import LineChart from '@/components/charts/LineChart'
import { useState } from 'react'
import ExploreNew from './ExploreNew'
import { activePairs } from '@/utils/activePairs'
import GettingStarted from './GettingStarted'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
const Dashboard = () => {
  const [showCoin, setShowCoin] = useState(false)

  const quickActions = [
    {
      name: 'Get Expert AI Trade Analysis ',
      action: 'Share Trade Details 📈',
      icon: '/CgAi/ChatAi/chartUp.png',
      color: '#1C55D5',
      path: '/CG-AI/chat/trade-analyzer/newChat',
    },
    {
      name: 'Learn how to deploy a smart contract',
      action: 'Upload A CA ⚙️',
      icon: '/CgAi/ChatAi/settings.png',
      color: '#5218FE',
      path: '/CG-AI/chat/contract-insight/newChat',
    },
    {
      name: 'Top Buzzed Coin For Today ',
      action: '',
      icon: '',
      color: '#B418FE',
      path: '/CG-AI/chat/crypto-buzz/newChat',
    },
  ]
  const exploreOptions = [
    {
      header: 'Chat Genius',
      name: `Your AI companion for mastering blockchain—ask questions, explore concepts, and expand your knowledge effortlessly`,
      availability: 'Get Started',
      path: '/CG-AI/chat/chat-genius/newChat',
    },
    {
      header: 'Trade Analyser',
      name: 'Your essential tool for deep market analysis, providing data-driven insights to guide your crypto decisions.',
      availability: 'Coming Soon',
      // path: '/CG-AI/chat/trade-analyzer/newChat',
      path: '#',
    
    },
    {
      header: 'Crypto Buzz',
      name: 'Analyze smart contracts for transparency. Uncover holder data, detect scams, and secure your investments',
      availability: 'Coming Soon',
      // path: '/CG-AI/chat/crypto-buzz/newChat',
      path: '#',
    
    },
    {
      header: 'Contract Insight',
      name: 'Stay updated with real-time crypto news. Track trends, market moves, and stay ahead in the blockchain world.',
      availability: 'Coming Soon',
      // path: '/CG-AI/chat/contract-insight/newChat',
      path: '#',

    },
  ]

  return (
    <div className="pageHeight flex w-full flex-col gap-8 overflow-hidden px-4 py-4 md:gap-16 md:px-8 md:py-16">
      <div className=" flex gap-4 max-w-[960px]">
        {Object.keys(activePairs).map((item, index) => (
          <TrendsCard key={index} data={activePairs[item]} path={item} />
        ))}
      </div>
      <div className="flex flex-col md:gap-4">
        <p className="text-2xl font-semibold leading-[130%] md:text-3xl">
          Getting Started
        </p>
        {/* <Image
          src="/CgAi/ChatAi/gettingStarted.png"
          width={800}
          height={800}
          alt=""
          className="w-full"
        /> */}
        <div className="noScrollbar w-full overflow-x-scroll">
          <GettingStarted />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="text-2xl font-semibold leading-[130%] md:text-3xl">
          Quick Actions
        </p>
        <div className="noScrollbar flex gap-4 overflow-x-scroll mmd:justify-center mmd:overflow-auto">
          <div className="grid w-full min-w-[50rem] grid-cols-6 gap-4 mmd:min-w-0">
            {quickActions.map((item, index) => (
              <QuickActionCard
                name={item.name}
                action={item.action}
                icon={item.icon}
                color={item.color}
                key={index}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="text-2xl font-semibold leading-[130%] md:text-3xl">
          Explore CG AI
        </p>
        <div className="flex gap-4 overflow-x-scroll mmd:justify-center mmd:overflow-auto">
          <div className="grid w-full grid-cols-6 gap-4 mmd:min-w-0">
            {exploreOptions.map((item, index) => (
              <ExploreCard
                name={item.name}
                header={item.header}
                path={item.path}
                key={index}
                availability={item.availability}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-[#5E5AFF] px-4 py-4 md:gap-8 md:px-8 md:py-12">
        <p className="text-base font-semibold leading-[130%] md:text-3xl">
          Help Us Improve: Suggest a new feature or provide feedback to us
        </p>

        <div className="flex h-full w-full gap-2">
          <Link
            href="/CG-AI/suggestions"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-[#FDFDFD] px-2 text-center font-bold text-[#0D0D17] md:w-fit md:px-4 md:text-xl"
          >
            Suggest Feature
          </Link>
          <Link
            href="/CG-AI/suggestions"
            className="flex h-12 w-full items-center justify-center rounded-lg border px-2 text-center font-bold text-[#FDFDFD] md:w-fit md:px-4 md:text-xl"
          >
            Provide Feedback
          </Link>
        </div>
      </div>
      {/* <div className="row-start-7 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:col-span-3 md:row-start-4">
        <div className="flex text-xl font-semibold capitalize">
          Join the Community
        </div>
        <div className="overflow-x-scroll md:overflow-auto">
          <div className="relative z-1 grid w-full min-w-[800px] grid-cols-3 gap-4 md:min-w-0">
            <a
              href="https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">Twitter</div>
                <div className="text-sm font-light">General Announcements</div>
              </div>
              <FaXTwitter className="!text-4xl !text-white md:!text-7xl" />
            </a>
            <a
              href="https://t.me/cryptogradportal"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">
                  Telegram
                </div>
                <div className="text-sm font-light">Live Chat</div>
              </div>
              <FaTelegramPlane className="!text-4xl !text-[#229ED9] md:!text-7xl" />
            </a>
            <a
              href="https://discord.gg/GQJTSFdTwh"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">Discord</div>
                <div className="text-sm font-light">
                  Access AI bots, Trading Signals, Whale <br /> Rooms,
                  Community, and much more...
                </div>
              </div>
              <FaDiscord className="!text-4xl !text-[#5865F2] md:!text-7xl" />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard