import Image from 'next/image'
import Animated from '../shared/Animated'

export default function HeroSectionHoveringNfts({ bg }: { bg?: boolean }) {
  return (
    <Animated
      delay={100}
      className="relative z-0 flex h-[30vw] w-full flex-col items-center justify-center px-4 py-10 mmd:px-16 mmd:py-20"
    >
      {bg && (
        <Image
          src="/effects/hero-eff-2.svg"
          className="absolute z-0 w-full opacity-80"
          alt=""
          width={870}
          height={609}
        />
      )}
      <Image
        src="/Homepage/Hero/hero (1).png"
        className="floating absolute bottom-0 left-8 z-1 w-1/4"
        alt=""
        width={414}
        height={430}
        data-delay={600}
      />

      <Image
        src="/Homepage/Hero/hero (2).png"
        className="floating absolute bottom-0 z-3 w-1/3"
        alt=""
        width={566}
        height={567}
      />
      <Image
        src="/Homepage/Hero/hero (3).png"
        className="floating absolute bottom-0 left-[18%] z-2 w-[28%]"
        alt=""
        width={462}
        height={463}
        data-delay={300}
      />
      <Image
        src="/Homepage/Hero/hero (4).png"
        className="floating absolute bottom-0 right-8 z-1 w-1/4"
        alt=""
        width={356}
        height={372}
        data-delay={600}
      />
      <Image
        src="/Homepage/Hero/hero (5).png"
        className="floating absolute bottom-0 right-[18%] z-2 w-[28%]"
        alt=""
        width={434}
        height={435}
        data-delay={300}
      />
    </Animated>
  )
}
