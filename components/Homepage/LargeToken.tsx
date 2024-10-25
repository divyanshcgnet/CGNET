import Image from 'next/image'
import Animated from '../shared/Animated'
// import Button from '../shared/Button'
import Link from 'next/link'

const LargeToken = () => {
  return (
    <div className="relative z-1 flex w-full flex-col items-center px-4 md:min-w-fit md:py-10 mmd:flex-row mmd:px-16">
      {/* <Image
        src="/effects/hero-eff-2.svg"
        className="absolute -top-[15%] right-0 z-0 w-full scale-y-[-1]"
        alt=""
        width={870}
        height={609}
      /> */}
      <Image
        className="absolute -bottom-[30%] -left-[30%] z-0 hidden h-[200%] !w-full rotate-90 mmd:block"
        src="/Homepage/Community/ellipse.svg"
        width={1920}
        height={1920}
        alt=""
      />
      <Animated className="relative z-1 flex w-full items-center justify-center md:py-10">
        <Image
          src="/Homepage/LargeToken/largeTokenNew.png"
          className="hidden object-contain md:block"
          alt=""
          width={1248}
          height={1176}
        />
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="block object-contain md:hidden"
          alt=""
          width={489}
          height={492}
        />
      </Animated>
      <Animated className="relative z-1 flex w-full flex-col items-center gap-2 md:py-10 mmd:items-start">
        <div className="relative z-1 text-lg font-semibold text-themeLightViolet">
          Exclusive Pre-Sale
        </div>
        <div className="mb-4 text-center text-3xl font-bold md:text-5xl mmd:text-left">
          Cryptograd Presale: <br /> Secure Your Tokens Now!
        </div>
        <div className="mb-4 text-center font-light capitalize mmd:text-left">
          Discover CG Tokens: Where Cutting-Edge AI Meets Blockchain{' '}
          <br className="hidden mmd:block" /> Excellence. Be a part of our
          vibrant community and unlock the <br className="hidden mmd:block" />{' '}
          potential of AI-enhanced crypto mastery now
        </div>
        <Link
          href={'/presale'}
          className="flex !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          Grab Now
        </Link>
      </Animated>
    </div>
  )
}

export default LargeToken
