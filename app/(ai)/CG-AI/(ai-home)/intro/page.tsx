import Image from 'next/image'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import Animated from '@/components/shared/Animated'
import AiIntroImage from '@/components/AiDashboard/AiIntroImage'

export default function IntroPage() {
  return (
    <div className="pageHeight relative flex w-full flex-col items-center gap-8 overflow-hidden p-4 md:p-8 mmd:flex-row mmd:gap-16">
      <Image
        src="/purpleEllispse.svg"
        className="absolute -right-[20%] bottom-[5%] z-0 h-fit w-[150%] object-cover md:left-0 md:top-0 md:h-full"
        alt=""
        width={526}
        height={526}
      />
      <Image
        src="/purpleEllispse.svg"
        className="absolute right-0 top-[10%] z-0 h-fit w-[150%] object-cover md:left-0 md:top-0 md:h-full"
        alt=""
        width={526}
        height={526}
      />
      <Image
        src="/purpleEllispse.svg"
        className="absolute -left-[20%] -top-[10%] z-0 h-fit w-[150%] object-cover md:left-0 md:top-0 md:h-full"
        alt=""
        width={526}
        height={526}
      />
      <div className="relative w-full md:h-fit">
        <AiIntroImage />
      </div>
      <Animated className="relative z-1 flex h-full w-full flex-col justify-between gap-4 md:gap-8 mmd:justify-center">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-center text-3xl font-semibold leading-[130%] md:text-5xl mmd:text-left">
            Hello from <br /> Cryptograd AI
          </h1>
          <p className="text-center font-normal leading-[140%] text-white/80 md:text-xl mmd:text-left">
            Tailored for Traders, Crafted by Traders
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-6 md:hidden">
            <span className="h-0.5 w-full bg-gradient-to-l from-[#743FE0] to-[#5E5AFF00]"></span>
            <div className="whitespace-nowrap text-xs text-white/30">
              Driven by AI, Inspired by You!
            </div>
            <span className="h-0.5 w-full bg-gradient-to-r from-[#743FE0] to-[#5E5AFF00]"></span>
          </div>
          <Link
            href="/CG-AI/landing"
            className='className="!h-12 text-lg" flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6 mmd:w-fit'
          >
            Get Started
          </Link>
        </div>
      </Animated>
    </div>
  )
}
