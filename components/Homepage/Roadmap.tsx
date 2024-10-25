import { FiArrowUpRight } from 'react-icons/fi'
import Animated from '../shared/Animated'
import RoadmapImage from './RoadmapImage'
import Image from 'next/image'

const Roadmap = ({ docs }: { docs?: boolean }) => {
  return (
    <Animated
      id="roadmap"
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-16 text-center md:pb-20 mmd:px-16"
    >
      <div className="absolute right-0 top-0 z-0 w-full opacity-20">
        <Image
          src="/effects/hero-eff-2.svg"
          alt=""
          className="w-full"
          width={870}
          height={609}
        />
      </div>
      <Image
        className="absolute -right-[40%] z-0 h-full w-fit"
        src="purpleEllispse.svg"
        width={526}
        height={526}
        alt=""
      />
      <div className="relative z-1 text-lg font-semibold text-themeVioletText">
        Our Roadmap
      </div>
      <div className="relative z-1 pt-4 text-3xl font-bold md:text-5xl">
        Road to Conquest
      </div>
      <div className="relative z-1 mt-4 text-white/80 mmd:w-[900PX]">
        Commencing the journey to conquest involves four key phases:
      </div>
      <RoadmapImage />
      {docs && (
        <a
          href="https://cryptograd.gitbook.io/cryptograd/"
          target="_blank"
          rel="noreferrer noopener"
          className="relative z-1 mt-8 flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          View Docs <FiArrowUpRight />
        </a>
      )}
    </Animated>
  )
}

export default Roadmap
