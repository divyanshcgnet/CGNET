import Image from 'next/image'
import Animated from '../shared/Animated'
import SystemChart from './SystemChart'
import Link from 'next/link'

export default function System() {
  return (
    <Animated className="relative flex flex-col items-center justify-center overflow-hidden px-8 pt-20 md:gap-12 md:px-16 md:pt-32">
      <Image
        src="/Homepage/LargeToken/largeToken.png"
        alt=""
        width={489}
        height={492}
        className="absolute -right-36 top-[50%] hidden h-64 w-64 mmd:block"
      />
      <Image
        src="/Homepage/LargeToken/largeToken.png"
        alt=""
        width={489}
        height={492}
        className="blur-2xs absolute rotate-[30deg] right-8 top-[45%] hidden h-16 w-16 mmd:block"
      />
      <Image
        src="/Homepage/LargeToken/largeToken.png"
        alt=""
        width={489}
        height={492}
        className="blur-2xs absolute bottom-0 left-32 hidden h-16 w-16 mmd:block"
      />
      <div className="flex flex-col items-center justify-center gap-4 md:pb-12">
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          Layered referral System
        </div>
        <div className="text-center font-light mmd:w-3/5">
          Stake the token for rewards, locking in gains and maximizing your
          investment potential. Your path to growth starts here!
        </div>
      </div>
      {/* <Image
        src="/Referral/system.svg"
        width={1240}
        height={668}
        alt="referral-system"
      /> */}
      <SystemChart />
      <Link href="/help/terms-and-conditions" className="text-center text-xs font-light text-white/40">
        Terms & Conditions Apply*
      </Link>
    </Animated>
  )
}
