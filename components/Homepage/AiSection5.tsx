import Animated from '../shared/Animated'
import Button from '../shared/Button'
import AiSection5Image from './AiSEction5Image'

const AiSection5 = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col-reverse items-center px-4 md:min-w-fit md:py-20 mmd:flex-row mmd:px-16">
      <AiSection5Image />
      <div className="flex w-full flex-col items-center gap-8 mmd:items-start">
        <div className="text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">With AI, </span>
          It&apos;s possible
        </div>
        <div className="text-center flex flex-col items-center gap-4 text-lg mmd:items-start mmd:text-left">
          <div>⚙️ Get Proactive and Predictive results</div>
          <div>📈 Explore Live Market Data like Never Before</div>
          <div>✨ Turn Ideas into Decisions </div>
        </div>
        {/* <Button className="h-12 w-fit text-xl">Get Started</Button> */}
      </div>
    </Animated>
  )
}

export default AiSection5
