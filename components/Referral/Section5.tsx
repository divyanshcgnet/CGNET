import { ButtonType } from '@/types/buttton'
import Button from '../shared/Button'
import StakingBenefits from '../shared/StakingBenefits'
import Animated from '../shared/Animated'
import JoinTheBeta from '../shared/JoinTheBets'
import Image from 'next/image'

export default function Section5() {
  return (
    <Animated className="relative flex flex-col items-center justify-center">
      <Image
        src="/Homepage/LargeToken/largeToken.png"
        alt=""
        width={489}
        height={492}
        className="absolute -bottom-12 -left-48 hidden h-64 w-64 rotate-180 mmd:block"
      />
      <div className="relative z-1 flex flex-col items-center justify-center px-4 pt-16 md:pt-32 mmd:px-16">
        <div className="relative z-10 pb-8 pt-4 text-center text-3xl font-bold md:text-5xl">
          Entering into CG Ecosystem
        </div>
        <div className="text-center font-light mmd:w-3/5">
          Stake the token for rewards, locking in gains and maximizing your
          investment potential. Your path to growth starts here!
        </div>
        {/*<Button type={ButtonType.SECONDARY} className="mt-8">*/}
        {/*  Know More*/}
        {/*</Button>*/}
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
      </div>
    </Animated>
  )
}
