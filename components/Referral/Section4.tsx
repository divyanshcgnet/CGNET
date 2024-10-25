import Image from 'next/image'
import Animated from '../shared/Animated'
import Section4Image from './Section4Image'

export default function Section4() {
  return (
    <Animated className="relative flex flex-col-reverse items-center justify-center gap-12 px-8 pt-16 md:px-16 md:pt-24 mmd:flex-row">
      <Image
        src="/Referral/ellipse-right.svg"
        alt=""
        width={526}
        height={526}
        className="blur-2xs absolute -bottom-[80%] -left-[30%] z-0 hidden h-[200%] w-full rotate-180 md:block"
      />
      <Image
        src="/Referral/ellipse-right.svg"
        alt=""
        width={526}
        height={526}
        className="blur-2xs absolute -right-[30%] -top-[60%] z-0 hidden h-[200%] w-full md:block"
      />
      <Section4Image />
      <div className="flex w-full flex-col items-center gap-6 mmd:items-start">
        <div className="relative z-10 mb-2 text-left text-3xl font-bold md:text-5xl">
          Who Is It For?
        </div>
        <div className="w-full">
          <span className="text-xl">🎓 </span> Aspiring College Students Seeking
          Additional Income
        </div>
        <div className="w-full">
          <span className="text-xl">🧳 </span> Employees Eager to Supplement
          Their Income
        </div>
        <div className="w-full">
          <span className="text-xl">️🎙 </span> Influencers Boasting a Massive
          Following
        </div>
        <div className="w-full">
          <span className="text-xl">🏢 </span> Syndicate leaders running
          syndicate
        </div>
      </div>
    </Animated>
  )
}
