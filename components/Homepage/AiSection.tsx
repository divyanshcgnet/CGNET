import Image from 'next/image'
import Animated from '../shared/Animated'
import AiSectionButton from './AiSectionButton'

const AiSection = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center justify-center px-4 py-20 md:min-w-fit mmd:flex-row mmd:px-16">
      {/* <Image
        src="/effects/ai-eff-1.svg"
        className="absolute right-0 z-0"
        alt=""
        width={435}
        height={640}
      /> */}
      <div className="w-full">
        <div className="relative z-1 text-center text-lg font-semibold text-themeLightViolet mmd:text-left">
          Something Beyond Human Limits
        </div>
        <div className="mt-2 whitespace-nowrap text-center text-3xl font-bold md:text-5xl mmd:text-left">
          Your AI 🧠 <br /> Your trading partner
        </div>
        <div className="mx-auto md:ml-0 flex w-full flex-col md:justify-center md:w-fit">
          <div className="my-8 flex flex-col items-start gap-4 text-lg mmd:text-left">
            <div>⚙️ Get Proactive and Predictive results</div>
            <div>📈 Discover data about the market</div>
            <div>✨ Transform dreams into decisions </div>
          </div>
          <AiSectionButton />
        </div>
      </div>
      <div className="relative mt-8 flex w-full items-center justify-center mmd:mt-0">
        <Image
          src="/Homepage/AiSection/topPart.svg"
          width={579}
          height={671}
          alt=""
          className="relative z-0 mmd:w-[80%]"
        />
      </div>
    </Animated>
  )
}

export default AiSection
