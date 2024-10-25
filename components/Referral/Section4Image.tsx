import Image from 'next/image'
import Animated from '../shared/Animated'

export default function Section4Image() {
  return (
    <div className="relative w-full">
      <Image
        src="/Homepage/Growth/growth.png"
        className="w-full"
        width={2097}
        height={1559}
        alt=""
      />
      <Animated
        delay={200}
        className="absolute -left-12 top-[22%] !scale-50 rounded-lg border border-themeTextGrey/30 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:left-[5%] md:top-[20%] md:scale-100 mmd:scale-75 xl:scale-100"
      >
        🎓 Jenny, Student
      </Animated>
      <Animated
        delay={400}
        className="absolute -right-8 top-[35%] !scale-50 rounded-lg border border-themeTextGrey/40 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:right-[5%] md:top-[50%] md:scale-100 mmd:scale-75 xl:scale-100"
      >
        🧳 Jason, Coder
      </Animated>
      <Animated
        delay={600}
        className="absolute bottom-[12%] left-[20%] !scale-50 rounded-lg border border-themeTextGrey/40 bg-themeBlack/75 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        ️🎙️ Anna Kat, The Influencer
      </Animated>
    </div>
  )
}
