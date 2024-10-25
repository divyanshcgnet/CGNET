import Image from 'next/image'
import Animated from '../shared/Animated'

const CgToken = () => {
  return (
    <Animated className="relative z-1 flex w-full overflow-hidden flex-col items-center px-4 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -right-[50%] bottom-0 z-0 h-4/5 w-full"
      />
      <div className="flex w-full flex-col items-start gap-8">
        <div className="w-fit rounded-full border border-themeBorderBlue/25 px-3 py-1 backdrop-blur-lg">
          What is CG Token?
        </div>
        <div className="mt-2 text-3xl font-bold md:text-5xl">CG Tokens</div>
        <div className="font-light text-white/80">
          Discover CG Token: Where Cutting-Edge AI Meets Blockchain{' '}
          <br className="hidden mmd:block" /> Excellence. Join Our Thriving
          Community and Discover the <br className="hidden mmd:block" /> Power
          of AI-Driven Crypto Mastery Today
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm text-white/50">Launching soon on...</div>
          <div className="flex items-center md:gap-8 gap-4 text-sm">
            <div className="flex items-center md:gap-4 gap-1.5">
              <Image
                src="/crypto/ETH.png"
                alt=""
                width={56}
                height={56}
                className="md:h-12 md:w-12 h-8 w-8"
              />
              <div>Ethereum</div>
            </div>
            <div className="flex items-center md:gap-4 gap-1.5">
              <Image
                src="/Presale/BinanceSmartChainBadge.png"
                alt=""
                width={56}
                height={56}
                className="md:h-12 md:w-12 h-8 w-8"
              />
              <div>Solana</div>
            </div>
            <div className="flex items-center md:gap-4 gap-1.5">
              <Image
                src="/Presale/UniswapBadge.png"
                alt=""
                width={56}
                height={56}
                className="md:h-12 md:w-12 h-8 w-8"
              />
              <div>
                Revealing <br />
                Soon
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center py-12">
        {/*<Image*/}
        {/*  src="/Presale/Reward  & Earn Wheel.png"*/}
        {/*  alt=""*/}
        {/*  width={127}*/}
        {/*  height={127}*/}
        {/*  className="spinner absolute right-20 top-0 hidden mmd:block"*/}
        {/*/>*/}
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="object-contain"
          alt=""
          width={489}
          height={492}
        />
      </div>
    </Animated>
  )
}

export default CgToken
