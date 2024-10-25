import Image from 'next/image'
import Animated from '../shared/Animated'
import Section3Video from './Section3Video'

const Section3 = () => {
  return (
    <Animated className="relative pb-8 md:!py-16">
      <Image
        src="/effects/sec3-eff.svg"
        className="absolute z-0"
        alt=""
        width={870}
        height={609}
      />
      <div className="relative z-1 px-4 mmd:px-16 w-full flex flex-col items-center gap-8 mmd:flex-row">
        <div className="w-full text-3xl font-bold md:text-5xl">
          Get A Glimpse Of the <br className="hidden md:block" /> CG Member
          experience
        </div>
        <Section3Video />
      </div>
    </Animated>
  )
}

export default Section3
