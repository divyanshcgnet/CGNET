import Image from 'next/image'
import Animated from '../shared/Animated'
import HeroSectionActions from './HeroSectionActions'
// import JoinTheBeta from '../shared/JoinTheBets'
// import BackedBy from '../shared/BackedBy'
// import StakingBenefits from '../shared/StakingBenefits'
// import TabInfo from '../shared/TabInfo'

const HeroSection = () => {
  return (
    <>
      <Animated className="relative z-1 flex flex-col items-center justify-center px-4 py-16 md:pt-32 mmd:px-16">
        <Image
          src="/effects/hero-eff-1.svg"
          className="absolute bottom-[60%] z-0 block md:bottom-[40%]"
          alt=""
          width={870}
          height={609}
        />
        <Image
          src="/effects/hero-eff-2.svg"
          className="absolute right-0 top-0 z-0 hidden w-full md:block"
          alt=""
          width={870}
          height={609}
        />
        <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
          {/* Your Solution To Everything Crypto */}
          The New Era of Crypto Trading Education
        </div>
        <div className="z-10 text-center text-xl font-light">
          By Traders, For Traders
          {/* All facilitated by a single game-changing platform. Experience the{' '}
          <br className="hidden md:block" />
          revolution of blockchain in an unparalleled way. */}
        </div>
        <HeroSectionActions />
      </Animated>
      {/* <HeroSectionHoveringNfts bg /> */}
    </>
  )
}

export default HeroSection
