import Image from 'next/image'
import { HiOutlineMicrophone } from 'react-icons/hi'
import Animated from '../shared/Animated'

const AiSection5Image = () => {
  return (
    <div className="z-2 w-full scale-[.80] pb-24 pr-8 md:scale-100 md:pr-0 mmd:scale-75 xl:scale-90 2xl:scale-100">
      <div className="relative mx-auto w-fit">
        <Image
          src="/Homepage/AiSection/ai2.png"
          width={505}
          height={582}
          alt=""
          className="relative z-0 mx-auto px-12 pl-0 md:pl-12"
        />
        <Animated delay={200} className="absolute -top-[12%] right-0 z-1 pt-16">
          <div className="flex w-fit flex-col gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
            <div className="font-semibold uppercase text-themeVioletText">
              📌 Daily Nuggets of Wisdom
            </div>
            <div className="text-themeBorder">
              Choose your leverage wisely with the power of AI.
            </div>
          </div>
        </Animated>
        <Animated
          delay={400}
          className="absolute -right-[14%] top-[50%] z-1 pt-16"
        >
          <div className="flex w-80 flex-col gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/80 p-4 text-xs backdrop-blur-sm">
            <div className="flex items-center gap-2 text-base font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-themeBorderBlue">
                <Image
                  src="/logo.png"
                  width={200}
                  height={32}
                  alt=""
                  className="w-5"
                />
              </div>
              AI Chat
            </div>
            <div className="flex gap-2 overflow-hidden">
              <div className="flex min-w-[9.5rem] flex-col gap-1 rounded-xl border border-themeTextGrey p-3">
                <span>Analyse my trade</span>
                <span className="text-2xs font-extralight text-themeBorder">
                  Upload a tradingview photo to get a trade analyzed
                </span>
              </div>
              <div className="flex min-w-[9.5rem] flex-col gap-1 rounded-xl border border-themeTextGrey p-3">
                <span>Analyse BTC chart</span>
                <span className="text-2xs font-extralight text-themeBorder">
                  Share your trading strategy
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-themeDialogBlack bg-themeNavBlack px-4 py-3">
              <div className="opacity-50">Write your prompt here</div>
              <HiOutlineMicrophone className="text-lg text-themeBorderBlue" />
            </div>
          </div>
        </Animated>
      </div>
    </div>
  )
}

export default AiSection5Image
