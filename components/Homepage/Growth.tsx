import Animated from '../shared/Animated'
import GrowthActions from './GrowthAction'
import GrowthImage from './GrowthImage'
import Image from 'next/image'

const Growth = () => {
  return (
    <Animated
      id="growth"
      className="relative z-1 flex w-full flex-col items-center gap-8 px-4 py-20 md:min-w-fit mmd:flex-row mmd:px-16"
    >
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -left-[50%] -top-[30%] z-0 h-full w-full"
      />
      <div className="relative z-1 flex w-full flex-col items-center text-center md:items-start md:text-left">
        <div className="relative z-1 text-lg font-semibold text-themeLightViolet">
          Double the Joy: Refer & Earn!
        </div>
        <div className="whitespace-nowrap pt-4 text-3xl font-bold md:text-5xl">
          Share & Rejoice: <br /> Refer Now!
        </div>
        <div className="mb-8 mt-6 font-light mmd:max-w-[28rem]">
          Double the joy by inviting friends to our platform! Share
          <br className="hidden mmd:block" /> the excitement, expand our
          community, and enjoy
          <br className="hidden mmd:block" />
          exclusive referral rewards. More friends mean more
          <br className="hidden mmd:block" /> perks – Referral Points, exclusive
          groups, and discounts await.
          <br className="hidden mmd:block" />
          Let&apos;s grow and thrive together at Cryptograd!
        </div>
        <GrowthActions />
      </div>
      <GrowthImage />
    </Animated>
  )
}

export default Growth
