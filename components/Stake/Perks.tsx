import Image from 'next/image'
import { MdLockOutline } from 'react-icons/md'

export default function Perks() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative flex items-center gap-4 rounded-lg bg-themeBgBlack px-4 py-8">
        <MdLockOutline className="absolute right-2 top-2 text-2xl text-white/30" />
        <Image
          src="/WLpictures/coin.png"
          alt=""
          width={80}
          height={81}
          className="h-20 w-20"
        />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-medium">Access to CryptoGrad AI</div>
          <div className="text-white/60">
            By staking CG tokens, you unlock access to CryptoGrad&apos;s AI tools,
            ensuring comprehensive guidance throughout your blockchain journey
            to success.
          </div>
        </div>
      </div>
      <div className="relative flex items-center gap-4 rounded-lg bg-themeBgBlack px-4 py-8">
        <MdLockOutline className="absolute right-2 top-2 text-2xl text-white/30" />
        <Image
          src="/WLpictures/coin.png"
          alt=""
          width={80}
          height={81}
          className="h-20 w-20"
        />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-medium">
            CryptoGrad Incubator Lab and LaunchPad
          </div>
          <div className="text-white/60">
            CryptoGrad empowers beginner innovators, offering expert advise for
            growth and development while simultaneously creating job
            opportunities within our thriving Web3 innovation community.
          </div>
        </div>
      </div>
      <div className="relative flex items-center gap-4 rounded-lg bg-themeBgBlack px-4 py-8">
        <MdLockOutline className="absolute right-2 top-2 text-2xl text-white/30" />
        <Image
          src="/WLpictures/coin.png"
          alt=""
          width={80}
          height={81}
          className="h-20 w-20"
        />
        <div className="flex flex-col gap-2">
          <div className="text-xl font-medium">CryptoGrad Community Access</div>
          <div className="text-white/60">
            Be part of a thriving community of crypto enthusiasts where you can
            collaborate, share knowledge, and network with like minded
            individuals.
          </div>
        </div>
      </div>
    </div>
  )
}
