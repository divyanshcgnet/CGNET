import Image from 'next/image'
import Animated from '../shared/Animated'
import MembershipPlans from './MembershipHome'

const Membership = () => {
  return (
    <Animated
      className="relative flex w-full flex-col items-center justify-center overflow-visible px-4 pt-16 text-center md:py-20 mmd:px-8"
      id="scrolltomemebership"
    >
      {/* <Image
        src="/effects/hero-eff-2.svg"
        className="absolute right-0 top-0 z-0 hidden w-full md:block"
        alt=""
        width={870}
        height={609}
      /> */}
      <Image
        className="absolute -bottom-[20%] z-0 h-fit w-full md:-top-[50%] md:h-[200%]"
        src="/Homepage/Community/ellipse.svg"
        width={1920}
        height={1920}
        alt=""
      />
      <Image
        className="absolute -left-[40%] top-[10%] z-0 h-fit w-[150%] md:hidden"
        src="/purpleEllispse.svg"
        width={526}
        height={526}
        alt=""
      />
      <div className="relative z-1 text-lg font-semibold text-themeLightViolet">
        Beta is Live
      </div>
      <div className="relative z-1 text-3xl font-bold md:text-5xl">
        Join the Club
      </div>
      <div className="mt-4 text-center font-light mmd:max-w-[60%]">
        Experience unmatched membership privileges with AI-driven cryptocurrency
        education and expert guidance on one powerful platform.
      </div>
      <MembershipPlans />
      {/* <div className="mx-auto mt-4 w-full max-w-[900px] px-4 text-center text-xs font-light text-white/60">
        Disclaimer: All prices given are in USDT, user will have to stake a
        minimum of $129.99 worth of CryptoGrad Native Tokens to get access to
        features given above
      </div> */}
      {/* <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -right-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      /> */}
    </Animated>
  )
}

export default Membership
