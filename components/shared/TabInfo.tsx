'use client'

import Image from 'next/image'
import { useState } from 'react'
import Animated from './Animated'

export default function TabInfo() {
  const [tab, setTab] = useState('chat')
  return (
    <Animated className="relative z-5 flex w-full flex-col items-center justify-center overflow-hidden px-2 pt-8 md:px-4 mmd:px-16">
      <Image
        src="/effects/hero-eff-2.svg"
        className="absolute bottom-0 right-0 z-0 block w-full rotate-90 md:hidden"
        alt=""
        width={870}
        height={609}
      />
      <div className="mb-8 text-center font-bold text-[#878992] md:text-xl">
        The Power of Insight and Intelligence at Your Command
      </div>
      <div className="noScrollbar mb-8 flex w-full overflow-x-scroll mmd:mb-8">
        <div className="flex w-full min-w-[500px] items-center justify-center gap-4 border-b-2 border-white/10 px-2 font-light md:text-2xl mmd:gap-8 mmd:text-3xl xl:gap-12">
          <button
            onClick={() => setTab('chat')}
            className={`rounded-full ${
              tab === 'chat' &&
              'h-full font-semibold text-themeBorderBlue after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-4 font-medium hover:text-themeBorderBlue`}
          >
            Chat Genius
          </button>
          <button
            onClick={() => setTab('analyzer')}
            className={`rounded-full ${
              tab === 'analyzer' &&
              'h-full font-semibold text-themeBorderBlue after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-4 font-medium hover:text-themeBorderBlue`}
          >
            Trade Analyzer
          </button>
          <button
            onClick={() => setTab('buzz')}
            className={`rounded-full ${
              tab === 'buzz' &&
              'h-full font-semibold text-themeBorderBlue after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-4 font-medium hover:text-themeBorderBlue`}
          >
            Crypto Buzz
          </button>
          <button
            onClick={() => setTab('insight')}
            className={`rounded-full ${
              tab === 'insight' &&
              'h-full font-semibold text-themeBorderBlue after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-themeBorderBlue'
            } relative pb-4 font-medium hover:text-themeBorderBlue`}
          >
            Contract Insight
          </button>
        </div>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden   mmd:max-h-[550px] ">
        {/* <Image
          src="/Homepage/Hero/HeroMain.svg"
          className="w-full object-cover"
          width={1312}
          height={743}
          alt=""
        /> */}
        {tab === 'chat' && (
          <div className="absolute -bottom-2 left-0 right-0 top-0 mx-auto flex justify-center    rounded-t-2xl md:-bottom-8 mmd:max-w-[800px]">
            <Image
              src="/Homepage/border.png"
              alt=""
              width={967}
              height={665}
              className="absolute left-0 right-0 top-0 w-full"
            />
            <video
              autoPlay
              loop
              muted
              className="mx-auto mt-[0.5%] h-full !w-[95%] max-w-none"
              playsInline
            >
              <source src="/Homepage/1.mov" type="video/mp4" />
            </video>
          </div>
        )}
        {tab === 'analyzer' && (
          <div className="absolute -bottom-2 left-0 right-0 top-0 mx-auto flex justify-center overflow-hidden rounded-t-2xl md:-bottom-4 mmd:max-w-[800px]">
            <Image
              src="/Homepage/border.png"
              alt=""
              width={967}
              height={665}
              className="absolute left-0 right-0 top-0 w-full"
            />
            <video
              autoPlay
              loop
              muted
              className="mx-auto mt-[1%] h-full !w-[94.1%] max-w-none"
              playsInline
            >
              <source src="/Homepage/2.mov" type="video/mp4" />
            </video>
          </div>
        )}
        {tab === 'insight' && (
          <div className="absolute -bottom-[3%] left-0 right-0 top-0 mx-auto flex justify-center overflow-hidden rounded-t-2xl mmd:max-w-[800px]">
            <Image
              src="/Homepage/border.png"
              alt=""
              width={967}
              height={665}
              className="absolute left-0 right-0 top-0 z-10 w-full"
            />
            <video
              autoPlay
              loop
              muted
              className="relative z-0 mx-auto mt-[2%] h-full !w-[94.1%] max-w-none"
              playsInline
            >
              <source src="/Homepage/3.mov" type="video/mp4" />
            </video>
          </div>
        )}
        {tab === 'buzz' && (
          <div className="absolute -bottom-[2%] left-0 right-0 top-0 mx-auto flex justify-center overflow-hidden rounded-t-2xl mmd:max-w-[800px]">
            <Image
              src="/Homepage/border.png"
              alt=""
              width={967}
              height={665}
              className="absolute left-0 right-0 top-0 z-10 w-full"
            />
            <video
              autoPlay
              loop
              muted
              className="relative mx-auto mt-[2%] h-full !w-[94.1%] max-w-none"
              playsInline
            >
              <source src="/Homepage/4.mov" type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </Animated>
  )
}
