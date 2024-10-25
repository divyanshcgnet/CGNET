import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'

const NativeToken = () => {
  return (
    <Animated className="w-full relative z-1 flex flex-col items-center gap-8 px-4 mmd:px-16 py-20 md:min-w-fit mmd:flex-row">
      <div className="relative z-1 mmd:w-2/5 w-full">
        <Image
          src="/Homepage/NativeToken/nativeToken.png"
          alt=""
          width={343}
          height={552}
          className="sm:w-3/5 w-full object-contain md:h-[50vh] mx-auto"
        />
      </div>
      <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -left-[20%] z-0 h-full md:h-[100vh] object-bottom"
        alt=""
        width={635}
        height={840}
      />
      <div className="flex mmd:w-3/5 w-full flex-col gap-8">
        <div className="text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">
            CryptoGrad&apos;s Native Token
          </span>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          Designed with real-world utility in mind, $CG powers our AI-driven
          learning platform, fuels trading opportunities, and unlocks a world of
          exclusive benefit
        </div>
        <Button className="h-12 w-fit text-xl">Swap</Button>
      </div>
    </Animated>
  )
}

export default NativeToken
