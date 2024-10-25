import Animated from '../shared/Animated'
import NeverMissABeatAnimatedCards from './NeverMissABeatAnimatedCards'

const NeverMissABeat = () => {
  return (
    <Animated className="w-full relative z-1 flex flex-col-reverse items-center gap-8 px-4 mmd:px-16 py-0 md:min-w-fit md:py-20 mmd:flex-row">
      <div className="flex w-full flex-col gap-8">
        <div className="text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">Never Miss a Beat </span>
          in Crypto
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex gap-2">
            <span>📈 </span>Resurrect timely market insights with alerts
          </div>
          <div className="flex gap-2">
            <span>👥 </span>Stay in the crypto loop with our exclusive news and community 
          </div>
          <div className="flex gap-2">
            <span>📝 </span>Fuel your quest to conquer with recommended apps and tools
          </div>
        </div>
      </div>
      <NeverMissABeatAnimatedCards />
    </Animated>
  )
}

export default NeverMissABeat
