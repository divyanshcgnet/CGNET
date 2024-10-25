import Image from 'next/image'
import Animated from '../shared/Animated'

const LiveEducator = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col items-center gap-8 px-4 py-20 md:min-w-fit mmd:flex-row mmd:px-16">
      <div className="relative z-1 w-full">
        <Image
          src="/Homepage/LiveEducator/liveEdu.webp"
          alt=""
          width={2448}
          height={2416}
          className="w-full object-contain"
        />
      </div>
      <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -left-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      />
      <div className="flex w-full flex-col gap-8">
        <div className="text-3xl font-bold mmd:whitespace-nowrap md:text-5xl">
          <span className="text-themeBorderBlue">Trade in Stride </span>
          with <br className='mmd:block hidden' /> Educator by Your Side
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex gap-2">
            <span>📈 </span>Receive up-to-the-minute market analysis and trends
          </div>
          <div className="flex gap-2">
            <span>💬 </span>Engage in live Q&A sessions and discussions
          </div>
          <div className="flex gap-2">
            <span>📱 </span>Get started with CryptoGrad suggested applications
            and accessories
          </div>
        </div>
      </div>
    </Animated>
  )
}

export default LiveEducator
