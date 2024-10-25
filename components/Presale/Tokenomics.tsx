import Image from 'next/image'
import Animated from '../shared/Animated'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Tokenomics() {
  return (
    <Animated
      id="tokenomics"
      className="relative z-1 flex flex-col items-center justify-center overflow-hidden px-4 py-16 mmd:px-16"
    >
      <div className="flex flex-col">
        <div className="relative z-1 text-lg font-semibold text-themeVioletText">
          Learn, Earn, Grow - Unleash the Potential with CG Token
        </div>
        <div className="relative z-10 pt-4 text-center text-3xl font-bold md:text-5xl">
          CG Tokenomics
        </div>
      </div>
      <Image
        src="/Presale/tokenomics.png"
        alt=""
        width={1116}
        height={814}
        className="relative z-1 hidden md:block"
      />{' '}
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -right-[50%] bottom-0 z-0 h-1/2 w-full"
      />
      <Image
        src="/Presale/tokenomics-mobile.png"
        alt=""
        width={333}
        height={303}
        className="relative z-1 md:hidden"
      />
      <a
        href="https://cryptograd.gitbook.io/cryptograd/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBorderBlue bg-themeBlack px-4 text-lg font-medium transition-all hover:text-themeVioletText md:px-6"
      >
        View Docs <FiArrowUpRight />
      </a>
    </Animated>
  )
}
