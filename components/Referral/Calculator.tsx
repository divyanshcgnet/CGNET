'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Calculator({
  className,
  hero,
}: {
  className?: string
  hero?: boolean
}) {
  const [commission, setCommission] = useState(100)
  const [friends, setFriends] = useState<number | undefined>(undefined)
  const [amount, setAmount] = useState<number | undefined>(undefined)

  useEffect(() => {
    setCommission((friends ? friends : 0) * (amount ? amount : 0) * 0.07)
  }, [friends, amount])
  return (
    <div className="relative z-5 flex w-full items-center justify-center">
      {hero ? (
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          alt=""
          width={489}
          height={492}
          className="blur-xs absolute -top-8 left-8 z-0 hidden h-20 w-20 mmd:block"
        />
      ) : (
        <>
          <Image
            src="/Homepage/LargeToken/largeToken.png"
            alt=""
            width={489}
            height={492}
            className="blur-2xs absolute -bottom-6 left-4 z-0 hidden h-8 w-8 mmd:block"
          />
          <Image
            src="/Homepage/LargeToken/largeToken.png"
            alt=""
            width={489}
            height={492}
            className="blur-2xs absolute -bottom-2 left-8 z-0 hidden h-28 w-28 mmd:block"
          />
        </>
      )}
      <div className="relative z-1 flex w-full flex-col items-center justify-center gap-4">
        <div
          className={`flex flex-col overflow-hidden rounded-3xl bg-themeDialogBlack md:max-w-[433px] md:gap-8 ${className}`}
        >
          <div className="grid grid-cols-2 gap-4 p-6 md:gap-8 md:p-8">
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-white/60 mmd:text-xl">
                Invited Friends
              </div>
              <input
                type="number"
                value={friends}
                onChange={(e) =>
                  setFriends(
                    !e.target.value ? undefined : Number(e.target.value)
                  )
                }
                placeholder="10"
                className="border-b-2 border-white/10 bg-inherit text-3xl font-bold text-white focus:outline-none"
              />
              <div className="text-white/50">
                No. of friends investing in token
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-white/60 mmd:text-xl">
                Amount Invested
              </div>
              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    !e.target.value ? undefined : Number(e.target.value)
                  )
                }
                placeholder="10"
                className="border-b-2 border-white/10 bg-inherit text-3xl font-bold text-white focus:outline-none"
              />
              <div className="text-white/50">
                Amount each friend will invest
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-themeViolet to-themeBorderBlue py-4">
            <div className="text-xl font-semibold text-white/60">
              Commision Made
            </div>
            <div className="flex items-end gap-2 text-4xl font-bold">
              {Number(commission.toFixed(2)).toLocaleString('en-US')}{' '}
              <span className="pb-1 text-base font-normal">USDT</span>
            </div>
          </div>
        </div>
        <div className="text-sm font-light text-white/40">
          *Based on your level, view{' '}
          <Link className="underline" href="/help/terms-and-conditions">
            T&Cs for more details.
          </Link>
        </div>
      </div>
    </div>
  )
}
