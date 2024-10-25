import Image from 'next/image'
import Animated from './Animated'
import JoinTheBeta from './JoinTheBets'

export default function StakingBenefits({
  buttonText,
}: {
  buttonText?: string
}) {
  return (
    <Animated className="relative z-2 flex flex-col items-center justify-center px-4 pt-16 mmd:px-16">
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -left-[50%] bottom-[50%] z-0 h-full w-full"
      />
      <div className="relative z-1 text-lg font-semibold text-themeLightViolet">
        Staking Benefits
      </div>
      <div className="relative z-10 pb-8 pt-4 text-center text-3xl font-bold md:text-5xl">
        Grab, Stake, and Reap Rewards
      </div>
      <Image
        className="absolute right-0 top-[20%] z-0 h-fit w-4/5 md:hidden"
        src="/Homepage/discordEllipse.svg"
        width={312}
        height={679}
        alt=""
      />
      <Image
        className="absolute bottom-0 left-0 z-0 h-fit w-4/5 rotate-180 md:hidden"
        src="/Homepage/discordEllipse.svg"
        width={312}
        height={679}
        alt=""
      />
      <JoinTheBeta buttonText={buttonText} />
      <div className="grid max-w-[1200px] grid-cols-1 gap-4 py-8 mmd:grid-cols-3">
        <div className="relative flex flex-col rounded-lg bg-[#20222B]">
          <Image
            src="/Homepage/StakingBenefits/benefit (1).png"
            alt=""
            width={440}
            height={280}
            className="w-full"
          />
          <Image
            src="/Homepage/StakingBenefits/gradient.svg"
            alt=""
            width={59}
            height={133}
            className="absolute -left-12 h-3/5 w-fit"
          />
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-4 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#5E5BFF] to-[#743FE0] text-xl">
                1
              </span>
              Grab Early Tokens
            </div>
            <div className="text-left text-sm text-themeLightGrey">
              Grab premium tokens at unmatched early prices during this
              exclusive pre-sale event.
            </div>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg bg-[#20222B]">
          <Image
            src="/Homepage/StakingBenefits/benefit (2).png"
            alt=""
            width={440}
            height={280}
            className="relative z-1 w-full"
          />
          <Image
            src="/Homepage/StakingBenefits/gradient.svg"
            alt=""
            width={59}
            height={133}
            className="absolute -left-12 z-0 h-3/5 w-fit"
          />
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-4 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#5E5BFF] to-[#743FE0] text-xl">
                2
              </span>
              Lock-In Your Stake
            </div>
            <div className="text-left text-sm text-themeLightGrey">
              Lock in your $CG stake, securing growth solidifying gains and
              propelling your investment forward.
            </div>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg bg-[#20222B]">
          <Image
            src="/Homepage/StakingBenefits/benefit (3).png"
            alt=""
            width={389}
            height={247}
            className="w-full"
          />
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-4 text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#5E5BFF] to-[#743FE0] text-xl">
                3
              </span>
              Exclusive Rewards Await
            </div>
            <div className="text-left text-sm text-themeLightGrey">
              Stake with patience, unveil exclusive rewards: advanced CG AI
              tools, premium educational content and be a part of a vibrant
              community.
            </div>
          </div>
        </div>
      </div>
    </Animated>
  )
}
