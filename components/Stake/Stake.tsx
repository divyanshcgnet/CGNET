'use client'

import { useState } from 'react'
import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { useRouter } from 'next/navigation'

export default function Stake() {
  const [tab, setTab] = useState<'stake' | 'unstake'>('stake')
  const [amount, setAmount] = useState<number | undefined>()
  const [stakePlan, setStakePlan] = useState<'1' | '3' | '12'>('1')
  const [unStakePlan, setUnStakePlan] = useState<25 | 50 | 75 | 100>(25)
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4 md:row-span-2">
      <div className="text-3xl font-semibold capitalize">{tab} CG Token</div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 rounded-lg bg-themeBgBlack p-1">
          <button
            className={`w-full rounded-md transition-all ${
              tab === 'stake' && 'bg-themeBlackDeep'
            } py-1`}
            onClick={() => setTab('stake')}
          >
            Stake
          </button>
          <button
            className={`w-full rounded-md transition-all ${
              tab === 'unstake' && 'bg-themeBlackDeep'
            } py-1`}
            onClick={() => setTab('unstake')}
          >
            Unstake
          </button>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-themeBgBlack p-4">
          <div className="text-lg font-medium">
            {tab === 'stake' ? 'Stake' : 'Unstake'}
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-medium">Amount</div>
            <div className="flex h-12 items-center rounded-lg border-2 border-themeTextGrey px-2 font-semibold">
              <input
                type="number"
                value={amount}
                className="w-full bg-inherit focus:outline-none"
                onChange={(e) =>
                  setAmount(
                    !e.target.value ? undefined : Number(e.target.value)
                  )
                }
              />
              <span className="whitespace-nowrap text-sm font-medium text-white/30">
                Min 100 USD
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-medium">Staking Plan</div>
            {tab === 'stake' ? (
              <div className="flex gap-2">
                <Button
                  onClick={() => setStakePlan('1')}
                  className="!px-4 text-sm"
                  type={
                    stakePlan === '1'
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  1 Month
                </Button>
                <Button
                  onClick={() => setStakePlan('3')}
                  className="!px-4 text-sm"
                  type={
                    stakePlan === '3'
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  3 Month
                </Button>
                <Button
                  onClick={() => setStakePlan('12')}
                  className="!px-4 text-sm"
                  type={
                    stakePlan === '12'
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  12 Month
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={() => setUnStakePlan(25)}
                  className="w-full !px-4 text-sm"
                  type={
                    unStakePlan === 25
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  25%
                </Button>
                <Button
                  onClick={() => setUnStakePlan(50)}
                  className="w-full !px-4 text-sm"
                  type={
                    unStakePlan === 50
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  50%
                </Button>
                <Button
                  onClick={() => setUnStakePlan(75)}
                  className="w-full !px-4 text-sm"
                  type={
                    unStakePlan === 75
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  75%
                </Button>
                <Button
                  onClick={() => setUnStakePlan(100)}
                  className="w-full !px-4 text-sm"
                  type={
                    unStakePlan === 100
                      ? ButtonType.PRIMARY
                      : ButtonType.SECONDARY
                  }
                >
                  100%
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-medium">Available to Stake: 111111111</div>
            {tab === 'stake' ? (
              <Button className="h-12 w-full">Stake Tokens</Button>
            ) : (
              <div className="flex gap-4">
                <Button
                  type={ButtonType.SECONDARY}
                  className="h-12 w-full !px-2 text-sm"
                >
                  Immediate Withdraw
                </Button>
                <Button
                  onClick={() => router.push('/stake/withdraw')}
                  className="h-12 w-full !px-2 text-sm"
                >
                  Withdraw
                </Button>
              </div>
            )}
          </div>
          {tab === 'unstake' && (
            <p className="text-sm font-light text-white/40">
              There is an 7 day free trial period when unstaking. Before this
              period you can claim your tokens with no penalty. If you wish to
              withdraw immediately there is a 40% transaction fee. Rewards can
              be claimed or staked immediately with no penalty.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
