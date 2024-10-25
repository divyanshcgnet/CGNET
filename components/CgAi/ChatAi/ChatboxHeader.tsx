'use client'

import Tooltip from '@/components/shared/ChatboxTooltip'
import useChat from '@/hooks/useChat'
import { deleteChat } from '@/services/chat'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { BsThreeDots } from 'react-icons/bs'

export default function ChatboxHeader({
  chatType,
  chatId,
  searchtab,
  started,
}: {
  chatType:
    | 'chat-genius'
    | 'trade-analyzer'
    | 'contract-insight'
    | 'crypto-buzz'
  chatId: string
  searchtab?: string
  started: boolean
}) {
  const router = useRouter()
  const { getChat } = useChat()

  const handleDelete = async () => {
    await deleteChat(chatId)
    await getChat()
    router.push(`/CG-AI/chat/${chatType}/newChat`)
  }

  return !started ? (
    <div className="flex flex-col justify-between gap-4 px-4 py-4 md:flex-row md:items-center md:py-8">
      <div className="flex items-center justify-center gap-2 text-3xl font-semibold capitalize md:text-5xl">
        {chatType.split('-').join(' ')}
        {chatType === 'chat-genius' && (
          <Tooltip
            title={
              <div className="flex flex-col gap-2 p-3">
                <div className="text-2xl font-bold">Chat Genius</div>
                <div className="text-xs font-normal text-white/70">
                  Your ultimate AI companion for navigating the world of
                  cryptocurrency with expert insights, real-time data and
                  updates, tailored advice, and resources to learn how to code
                  in Solidity—all powered by 23 advanced language learning
                  models (LLMs) to ensure you stay ahead in the fast-paced
                  crypto landscape.
                  <br />
                  <br />
                  Prompt Example: <br />
                  1. Create a simple ERC20 smart contract with a supply of 100
                  billion tokens <br />
                  2. What are the key differences between ERC-20 and ERC-721
                  tokens?
                </div>
              </div>
            }
            placement="right-start"
          >
            <Image
              src="/CgAi/ChatAi/ibutton.svg"
              alt="logo"
              width={30}
              height={30}
              className="translate-y-1"
            />
          </Tooltip>
        )}
        {chatType === 'trade-analyzer' && (
          <Tooltip
            title={
              <div className="flex flex-col gap-2 p-3">
                <div className="text-2xl font-bold">Trade Analyzer</div>
                <div className="text-xs font-normal text-white/70">
                  Your trusted AI tool for analyzing trades with
                  precision—powered by 23 advanced language learning models
                  (LLMs), it offers data-driven analysis, in-depth chart
                  evaluation, and personalized investment recommendations. Use
                  chart images to uncover opportunities in the market, learn new
                  trading strategies, and receive actionable insights to help
                  you optimize your trading decisions and maximize your trading
                  potential.
                  <br />
                  <br />
                  Prompt Example:
                  <br />
                  1. Analyze this Ethereum chart image and identify potential
                  buying opportunities.
                  <br />
                  2. Analyse the current market sentiment
                </div>
              </div>
            }
            placement="right-start"
          >
            <Image
              src="/CgAi/ChatAi/ibutton.svg"
              alt="logo"
              width={30}
              height={30}
              className="translate-y-1"
            />
          </Tooltip>
        )}
        {chatType === 'contract-insight' && (
          <Tooltip
            title={
              <div className="flex flex-col gap-2 p-3">
                <div className="text-2xl font-bold">Contract Insight</div>
                <div className="text-xs font-normal text-white/70">
                  Contract Insight is your go-to AI tool for in-depth
                  cryptocurrency token analysis. It offers real-time insights
                  into market cap, price changes, liquidity, and transaction
                  volume, along with advanced features like whale tracking and
                  top holder analysis. Perfect for traders and degens alike,
                  Contract Insight helps you make informed decisions with
                  concise, actionable data, all accessible through simple,
                  user-friendly buttons like &quot;Tax Analysis,&quot;
                  &quot;Whale Map,&quot; &quot;Top Holders,&quot;
                  &quot;Technical Analysis&quot; and much more.
                </div>
              </div>
            }
            placement="right-start"
          >
            <Image
              src="/CgAi/ChatAi/ibutton.svg"
              alt="logo"
              width={30}
              height={30}
              className="translate-y-1"
            />
          </Tooltip>
        )}
        {chatType === 'crypto-buzz' && (
          <Tooltip
            title={
              <div className="flex flex-col gap-2 p-3">
                <div className="text-2xl font-bold">Crypto Buzz</div>
                <div className="text-xs font-normal text-white/70">
                  Your go-to AI assistant for staying informed in the crypto
                  world—powered by 5 advanced language learning models (LLMs),
                  it tracks market sentiment, monitors trending topics, and
                  analyzes what influencers are saying. Stay updated on the
                  latest news, understand the buzz around specific
                  cryptocurrencies, and use the popularity metrics to make
                  informed decisions.Example Prompts:1. What is the current
                  market sentiment and buzz behind $XRP?2. Which meme coins are
                  the most hyped right now?
                </div>
              </div>
            }
            placement="right-start"
          >
            <Image
              src="/CgAi/ChatAi/ibutton.svg"
              alt="logo"
              width={30}
              height={30}
              className="translate-y-1"
            />
          </Tooltip>
        )}
      </div>
      {(chatType === 'chat-genius' || chatType === 'trade-analyzer') && (
        <div className="flex w-full items-center justify-between gap-8 border-b-2 border-white/10 px-2 font-light md:w-fit md:justify-center">
          <Link
            href={`/CG-AI/chat/${chatType}/${chatId}?tab=beginner`}
            className={`${
              searchtab === 'beginner' &&
              'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-2 font-medium text-white/80 hover:text-white`}
          >
            Beginner
          </Link>
          <Link
            href={`/CG-AI/chat/${chatType}/${chatId}?tab=intermediate`}
            className={`${
              searchtab === 'intermediate' &&
              'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-2 font-medium text-white/80 hover:text-white`}
          >
            Intermediate
          </Link>
          <Link
            href={`/CG-AI/chat/${chatType}/${chatId}?tab=advanced`}
            className={`${
              searchtab === 'advanced' &&
              'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-2 font-medium text-white/80 hover:text-white`}
          >
            Advanced
          </Link>
        </div>
        // <div className="flex w-full max-w-md items-center justify-between rounded-full bg-[#1D1E28] p-2 md:w-fit">
        //   <Link
        //     href={`/CG-AI/chat/${chatType}/${chatId}?tab=beginner`}
        //     className={`${
        //       searchtab === 'beginner'
        //         ? 'bg-[#000017] text-white'
        //         : 'text-white/80 hover:bg-[#000017] hover:text-white'
        //     } flex-1 rounded-full px-6 py-3 text-center`}
        //   >
        //     Beginner
        //   </Link>
        //   <Link
        //     href={`/CG-AI/chat/${chatType}/${chatId}?tab=intermediate`}
        //     className={`${
        //       searchtab === 'intermediate'
        //         ? 'bg-[#000017] text-white'
        //         : 'text-white/80 hover:bg-[#000017] hover:text-white'
        //     } flex-1 rounded-full px-6 py-3 text-center`}
        //   >
        //     Intermediate
        //   </Link>
        //   <Link
        //     href={`/CG-AI/chat/${chatType}/${chatId}?tab=advanced`}
        //     className={`${
        //       searchtab === 'advanced'
        //         ? 'bg-[#000017] text-white'
        //         : 'text-white/80 hover:bg-[#000017] hover:text-white'
        //     } flex-1 rounded-full px-6 py-3 text-center`}
        //   >
        //     Advanced
        //   </Link>
        // </div>
      )}
    </div>
  ) : (
    <div className="flex items-center justify-between bg-[#181920] p-4">
      <span className="text-2xl font-medium capitalize">
        {chatType.split('-').join(' ')}
      </span>
      <Menu as="div" className="relative inline-block items-center text-left">
        <Menu.Button className={'flex items-center'}>
          <BsThreeDots className="text-2xl" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-5 mt-2 flex w-56 origin-top-right flex-col divide-y divide-themeGrey rounded-lg bg-[#22222C] shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Menu.Item>
              <Link
                href={`/CG-AI/chat/${chatType}/newChat`}
                className="w-full px-3 py-2 text-left transition-all hover:bg-black/20"
              >
                New Chat
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href={`/CG-AI/chat/history/today`}
                className="w-full px-3 py-2 text-left transition-all hover:bg-black/20"
              >
                Chat history
              </Link>
            </Menu.Item>
            {/* <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Show trading style
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Settings
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full px-3 py-2 text-left transition-all hover:bg-black/20">
                Rename
              </button>
            </Menu.Item> */}
            <Menu.Item>
              <button
                onClick={handleDelete}
                className="w-full px-3 py-2 text-left transition-all hover:bg-black/20"
              >
                Delete
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
