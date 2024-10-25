import Section3Video from '@/components/Homepage/Section3Video'
import Animated from '@/components/shared/Animated'
import Button from '@/components/shared/Button'
import { ButtonType } from '@/types/buttton'

export default function WithdrawPage() {
  return (
    <>
      <Animated className="relative z-1 flex w-full flex-col items-center px-4 pt-8 md:min-w-fit md:py-20 mmd:px-16">
        <div className="text-center text-3xl font-bold md:text-5xl">
          H1 for the reassurance video of Vansh
        </div>
        <div className="mb-16 mt-4 text-center text-white/60">
          All facilitated by a single game-changing platform. Experience the{' '}
          <br className="hidden mmd:block" /> revolution of blockchain in an
          unparalleled way.
        </div>
        <Section3Video />
      </Animated>
      <Animated className="relative z-1 flex w-full flex-col items-center gap-12 px-4 py-20 md:min-w-fit mmd:flex-row mmd:px-16">
        <div className="flex w-full flex-col items-center mmd:items-start">
          <div className="mmd:left relative z-1 text-center text-lg font-medium text-themeBlue">
            Cryptograd Helpline
          </div>
          <div className="mt-2 whitespace-nowrap text-center text-3xl font-bold md:text-5xl mmd:text-left">
            Need assistance? <br /> Our team is here to help!
          </div>
          <div className="mb-8 mt-2 text-center font-light text-white/60 mmd:text-left">
            Connect with CryptoGrad
          </div>
          <Button>Connect with an expert</Button>
        </div>
        <div className="aspect-square w-full rounded-xl bg-themeBlackBg"></div>
      </Animated>
      <Animated className="relative z-1 flex w-full flex-col items-center px-4 pb-16 md:min-w-fit mmd:px-16">
        <div className="text-center text-3xl font-bold md:text-5xl">
          Do you still want to withdraw?
        </div>
        <div className="mb-10 mt-4 text-center text-white/60">
          Step into a space where ideas flourish, like minds connect, and
          inspiration knows no bounds. Join us now!
        </div>
        <div className="flex gap-4">
          <Button>Not Now</Button>
          <Button type={ButtonType.SECONDARY}>Withdraw tokens</Button>
        </div>
      </Animated>
    </>
  )
}
