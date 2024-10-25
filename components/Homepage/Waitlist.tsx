import Animated from '../shared/Animated'
import Image from 'next/image'
import WaitlistActions from './WaitlistActions'

const Waitlist = () => {
  return (
    <Animated className="flex flex-col items-center justify-center px-4 mmd:px-16 pt-16 pb-8 text-center">
      <div className="text-3xl font-bold md:text-5xl">
        Join the beta and invite your friends to{' '}
        <br className="hidden mmd:block" />
        Win CG Tokens
      </div>
      <div className="mt-4">
        Top three ranks will be eligible to claim valuable NFTs
      </div>
      <WaitlistActions />
      <div className="hidden items-center justify-center gap-2 md:flex">
        <Image
          src="/Homepage/Waitlist/waitlist.png"
          width={400}
          height={56}
          alt=""
          className="h-12 w-fit object-contain"
        />
        <span className="font-extralight">
          +200 people are already in the beta
        </span>
      </div>
    </Animated>
  )
}

export default Waitlist
