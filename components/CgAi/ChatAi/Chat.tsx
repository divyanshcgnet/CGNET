'use client'

import UserMessage from './UserMessage'
import AssistantMessage from './AssistantMessage'
import OpenAI from 'openai'
import { Dispatch, useEffect, useRef, useState } from 'react'
import ChatAccordion from './ChatAccordion'
import { MessageTypeEnum } from '@/types/iMessage'

const DefaultOptions = {
  'chat-genius': [
    {
      title: 'Learning Basics',
      actions: [
        {
          title: 'What is crypto?',
          prompt: 'What is crypto?',
        },
        {
          title: 'Proof of Stake (PoS)',
          prompt: 'Proof of Stake (PoS)',
        },
        {
          title: 'Setting up wallets',
          prompt: 'Setting up wallets',
        },
      ],
    },
    {
      title: 'Trading',
      actions: [
        {
          title: 'RSI Divergence',
          prompt: 'RSI Divergence',
        },
        {
          title: 'Fibonacci Sequence',
          prompt: 'Fibonacci Sequence',
        },
        {
          title: 'Optimal Risk %',
          prompt: 'Optimal Risk %',
        },
      ],
    },
    {
      title: 'Getting in Depth',
      actions: [
        {
          title: 'Shitcoin Basics',
          prompt: 'Shitcoin Basics',
        },
        {
          title: 'Finding next 10x coin',
          prompt: 'Finding next 10x coin',
        },
        {
          title: 'Managing emotions',
          prompt: 'Managing emotions',
        },
      ],
    },
  ],
  'trade-analyzer': [
    {
      title: 'Analyse',
      actions: [
        {
          title: 'Analyse my chart',
          prompt: 'Analyse my chart',
        },
        {
          title: 'Suggest stop loss',
          prompt: 'Suggest stop loss',
        },
        {
          title: 'Volume Analysis',
          prompt: 'Volume Analysis',
        },
      ],
    },
    {
      title: 'Recommend',
      actions: [
        {
          title: 'Coins in AI',
          prompt: 'Coins in AI',
        },
        {
          title: 'Portfolio adjustments',
          prompt: 'Portfolio adjustments',
        },
        {
          title: 'Risk management',
          prompt: 'Risk management',
        },
      ],
    },
    {
      title: 'Learn',
      actions: [
        {
          title: 'Greed & Fear Index',
          prompt: 'Greed & Fear Index',
        },
        {
          title: 'Current Market Sentiment',
          prompt: 'Current Market Sentiment',
        },
        {
          title: 'Analyze Fisher Model',
          prompt: 'Analyze Fisher Model',
        },
      ],
    },
  ],
  'contract-insight': [
    {
      title: 'Analysis',
      actions: [
        {
          title: 'Audit smart contract',
          prompt: 'Audit smart contract',
        },
        {
          title: 'Tax inspection',
          prompt: 'Tax inspection',
        },
        {
          title: 'Top 10 holders',
          prompt: 'Top 10 holders',
        },
      ],
    },
    {
      title: 'Alerts',
      actions: [
        {
          title: 'Burn events',
          prompt: 'Burn events',
        },
        {
          title: 'New liquidity pools',
          prompt: 'New liquidity pools',
        },
        {
          title: 'Fresh wallet attempts',
          prompt: 'Fresh wallet attempts',
        },
      ],
    },
    {
      title: 'Trace',
      actions: [
        {
          title: 'Track a wallet',
          prompt: 'Track a wallet',
        },
        {
          title: 'Track twitter influencers',
          prompt: 'Track twitter influencers',
        },
        {
          title: 'Track telegram calls',
          prompt: 'Track telegram calls',
        },
      ],
    },
  ],
  'crypto-buzz': [
    {
      title: 'Summarise',
      actions: [
        {
          title: "Today's news",
          prompt: "Today's news",
        },
        {
          title: 'News by SEC on crypto',
          prompt: 'News by SEC on crypto',
        },
        {
          title: 'Latest Articles',
          prompt: 'Latest Articles',
        },
      ],
    },
    {
      title: 'Buzzed',
      actions: [
        {
          title: 'On-chain coin',
          prompt: 'On-chain coin',
        },
        {
          title: 'Airdrops',
          prompt: 'Airdrops',
        },
        {
          title: 'Fair Launches%',
          prompt: 'Fair Launches%',
        },
      ],
    },
    {
      title: 'Monitor',
      actions: [
        {
          title: 'Influencers',
          prompt: 'Influencers',
        },
        {
          title: 'Major News Events',
          prompt: 'Major News Events',
        },
        {
          title: 'Venture Capitals',
          prompt: 'Venture Capitals',
        },
      ],
    },
  ],
}

export default function Chat({
  openAiCall,
  chatType,
  chatId,
  searchtab,
  started,
  messages,
  setLastUserMessage,
  handleRegenerate,
  setLastUserImage,
  // stopResponding,
  // cancelling,
  responding,
}: {
  openAiCall: (message?: string) => Promise<void>
  chatType:
    | 'chat-genius'
    | 'trade-analyzer'
    | 'contract-insight'
    | 'crypto-buzz'
  chatId: string
  searchtab?: string
  started: boolean
  messages: { content: string; role: MessageTypeEnum; fileUrl?: string }[]
  setLastUserMessage: Dispatch<string>
  handleRegenerate: () => Promise<void>
  setLastUserImage: Dispatch<string | undefined>
  // stopResponding: () => Promise<void>
  // cancelling: boolean
  responding: boolean
}) {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<any>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  function togglePanels(newPanel: any) {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close()
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    })
  }

  useEffect(() => {
    if (!boxRef || !boxRef.current) return
    boxRef.current.scrollTop = boxRef.current.scrollHeight
  }, [messages])

  return !started ? (
    <div className="noScrollbar flex h-full gap-2 overflow-y-scroll md:grid md:grid-cols-3 md:gap-4">
      {DefaultOptions[chatType].map((item, i) => (
        // <div
        //   key={item.title}
        //   className="flex h-fit flex-col gap-3 rounded-2xl bg-themeBgBlack p-4 shadow-lg shadow-themeBorderBlue/20"
        // >
        //   <div className="mb-1 text-2xl font-semibold text-[#918FFF]">
        //     {item.title}
        //   </div>
        //   {item.actions.map((action) => (
        //     <button
        //       className="w-fit rounded-full bg-[#131314] px-4 py-2 font-medium"
        //       key={action.title}
        //       onClick={() => openAiCall(action.prompt)}
        //     >
        //       {action.title}
        //     </button>
        //   ))}
        // </div>
        <ChatAccordion
          togglePanels={togglePanels}
          title={item.title}
          actions={item.actions}
          index={i}
          key={i}
          openAiCall={openAiCall}
        />
      ))}
    </div>
  ) : (
    <div
      ref={boxRef}
      className="relative mt-4 flex h-full flex-grow flex-col gap-4 overflow-y-scroll"
    >
      {messages.map((message, i) => {
        if (message.role === MessageTypeEnum.USER)
          return (
            <UserMessage
              key={i}
              message={message}
              setLastUserMessage={setLastUserMessage}
              setLastUserImage={setLastUserImage}
            />
          )
        if (message.role === MessageTypeEnum.ASSISTANT)
          return (
            <AssistantMessage
              key={i}
              idx={i}
              length={messages.length}
              message={message}
              handleRegenerate={handleRegenerate}
              responding={responding}
              last={i === messages.length - 1}
            />
          )
      })}
    </div>
  )
}
