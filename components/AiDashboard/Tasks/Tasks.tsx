'use client'

import { useState } from 'react'
import Animated from '@/components/shared/Animated'
import TaskCard from './TaskCard'
import { TaskData } from '@/utils/TaskData'

export default function Tasks() {
  const [tab, setTab] = useState<
    'chat-genius' | 'trade-analyzer' | 'contract-insight' | 'crypto-buzz'
  >('chat-genius')
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-8">
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row">
        <p className="hidden text-xl font-semibold leading-[130%] md:block md:text-3xl">
          AI Tasks
        </p>
        <p className="block text-xl font-semibold leading-[130%] md:hidden md:text-3xl">
          AI Tasks on Fingertips
        </p>
        {/* <Animated className="relative z-5 flex flex-col gap-16">
          <div className="flex w-full items-center justify-between rounded-full bg-themeBlackBg p-2 font-light md:w-fit md:justify-center">
            <button
              onClick={() => setTab('chat-genius')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all hover:bg-themeBlackDeep md:text-base ${
                tab === 'chat-genius' && 'bg-themeBlackDeep'
              }`}
            >
              Chat Genius
            </button>
            <button
              onClick={() => setTab('trade-analyzer')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'trade-analyzer' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              Trade Analyser
            </button>
            <button
              onClick={() => setTab('contract-insight')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'contract-insight' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              Contract Insight
            </button>
            <button
              onClick={() => setTab('crypto-buzz')}
              className={`rounded-full px-2.5 py-2 text-xs transition-all ${
                tab === 'crypto-buzz' && 'bg-themeBlackDeep'
              } hover:bg-themeBlackDeep md:text-base`}
            >
              Crypto Buzz
            </button>
          </div>
        </Animated> */}
        <div className="noScrollbar overflow-x-scroll">
          <div className="flex w-full min-w-[532px] items-center justify-between gap-4 border-b-2 border-white/10 font-light md:w-fit md:justify-end">
            <button
              onClick={() => setTab('chat-genius')}
              className={`${
                tab === 'chat-genius' &&
                'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
              } relative whitespace-nowrap px-2 pb-2 font-medium text-white/80 hover:text-white`}
            >
              Chat Genius
            </button>
            <button
              onClick={() => setTab('trade-analyzer')}
              className={`${
                tab === 'trade-analyzer' &&
                'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
              } relative whitespace-nowrap px-2 pb-2 font-medium text-white/80 hover:text-white`}
            >
              Trade Analyser
            </button>
            <button
              onClick={() => setTab('crypto-buzz')}
              className={`${
                tab === 'crypto-buzz' &&
                'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
              } relative whitespace-nowrap px-2 pb-2 font-medium text-white/80 hover:text-white`}
            >
              Crypto Buzz
            </button>
            <button
              onClick={() => setTab('contract-insight')}
              className={`${
                tab === 'contract-insight' &&
                'h-full font-semibold text-white after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
              } relative whitespace-nowrap px-2 pb-2 font-medium text-white/80 hover:text-white`}
            >
              Contract Insight
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-1 grid w-full grid-cols-8 gap-4 mmd:min-w-0">
        {tab === 'chat-genius' &&
          TaskData.filter((item) => tab === item.type).map((item, index) => (
            <TaskCard
              tab={tab}
              name={item.name}
              icon={item.icon}
              key={index}
              description={item.description}
            />
          ))}
        {(tab === 'trade-analyzer' ||
          tab === 'crypto-buzz' ||
          tab === 'contract-insight') && (
          <div className="flex justify-center items-center text-4xl w-full col-span-8 my-20">Coming soon...</div>
        )}
      </div>
    </div>
  )
}
