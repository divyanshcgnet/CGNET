/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import Animated from '../shared/Animated'
import Image from 'next/image'

interface BoxProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const Box: React.FC<BoxProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <div className="flex h-full w-full grow flex-col justify-center rounded-md border-[0.5px] border-white/20 py-4 text-left">
    <div className="flex flex-col px-4 pb-4">
      <div className="relative aspect-square w-10">
        <Image src={imageSrc} alt={imageAlt} fill />
      </div>
      <h3 className="mt-3 text-xl font-bold leading-7 text-white">{title}</h3>
      <p className="mt-2 text-xs leading-4 text-gray-400">{description}</p>
    </div>
  </div>
)

interface QuestionBoxProps {
  title: string
  highlightedText: string
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  title,
  highlightedText,
}) => {
  const parts = title.split(highlightedText)

  return (
    <div className="max-w-md grow items-start justify-center rounded-md border border-solid border-white border-opacity-10 bg-[#20222B] px-6 pb-7 pt-6 text-left text-xl font-semibold capitalize leading-9 tracking-tight text-white">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          <span className="font-bold">{part}</span>
          {index < parts.length - 1 && (
            <span className="font-bold text-indigo-400">{highlightedText}</span>
          )}
          {index === parts.length - 2}
        </React.Fragment>
      ))}
    </div>
  )
}

export const ProblemStatementSection: React.FC = () => {
  const boxData = [
    {
      title: 'Chat Genius',
      description:
        'Without Chat Genius, users may struggle to access real-time insights and expert guidance in the ever-evolving blockchain space. This can lead to missed learning opportunities in understanding blockchain, cryptocurrency trends, and coding in Solidity, leaving users disconnected from critical advancements and best practices in the industry.',
      imageSrc: '/Homepage/ProblemStatement/1.png',
      imageAlt: 'Chat Genius icon',
    },
    {
      title: 'Trade Analyzer',
      description:
        'Without Cryptograd\'s Trade Analyzer, users struggle to identify profitable trading opportunities, assess market trends accurately, and learn how to trade effectively, resulting in missed chances for successful trades and a higher risk of uninformed decisions.',
      imageSrc: '/Homepage/ProblemStatement/2.png',
      imageAlt: 'Trade Analyzer icon',
    },
    {
      title: 'Contract Insight',
      description:
        'Without Cryptograd\'s Contract Insight, users face challenges in analyzing numerical data in  smart contracts, understanding key metrics, and detecting potential risks. This can lead to uninformed decisions, security vulnerabilities, and missed opportunities in the fast-paced world of blockchain.',
      imageSrc: '/Homepage/ProblemStatement/3.png',
      imageAlt: 'Contract Insight icon',
    },
    {
      title: 'Crypto Buzz',
      description:
        'Without Cryptograd\'s Crypto Buzz feature, traders miss out on vital market sentiment analysis and news updates, leading to a lack of awareness regarding market trends and potential opportunities. This can result in missed investment opportunities and decreased profitability.',
      imageSrc: '/Homepage/ProblemStatement/4.png',
      imageAlt: 'Crypto Buzz icon',
    },
  ]

  const questionBoxData = [
    {
      title: 'Why Is Learning Solidity So Difficult?',
      highlightedText: 'Solidity',
    },
    {
      title: 'Why Do I Always Lose Money In Crypto?',
      highlightedText: 'Money',
    },
    {
      title: 'Why Is crypto Knowledge So Scattered?',
      highlightedText: 'Knowledge',
    },
  ]

  return (
    <Animated className="my-16 mt-20 flex w-full  flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center md:py-20 mmd:px-16">
      <h1 className="relative z-1 text-3xl font-bold md:text-5xl">
        You&apos;re Probably Wondering...
      </h1>
      <div className="mt-16 flex w-full  justify-center gap-0 max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
        <div className="my-auto flex justify-center max-md:max-w-full">
          <div className="mx-auto flex flex-col gap-4 md:gap-6 mmd:flex-row">
            <div className="relative min-h-[8rem] w-full min-w-[12rem] md:min-h-[4rems]">
              <Image
                src="/Homepage/ProblemStatement/coin.png"
                fill
                className={'object-contain'}
                alt=""
              />
            </div>
            {questionBoxData.map((data, index) => (
              <div key={index} className={`flex h-full w-full`}>
                <QuestionBox
                  title={data.title}
                  highlightedText={data.highlightedText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="relative z-1 mt-16 text-3xl font-bold md:text-5xl mmd:hidden">
        How Cryptograd <br /> Helps You
      </h1>
      <div className="mt-8 w-full">
        <div className="flex flex-col gap-5 mmd:flex-row">
          {boxData.map((data, index) => (
            <div key={index} className={`flex w-full flex-col`}>
              <Box
                title={data.title}
                description={data.description}
                imageSrc={data.imageSrc}
                imageAlt={data.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </Animated>
  )
}
