'use client'

import Button from '@/components/shared/Button'
import useWallet from '@/hooks/useWallet'
import { ButtonType } from '@/types/buttton'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useAccount, useNetwork } from 'wagmi'
import { LuLogOut } from 'react-icons/lu'
import { usePrivy } from '@privy-io/react-auth'

export default function FunctionalNav({
  notification,
}: {
  notification?: boolean
}) {
  const { address } = useAccount()
  const { chain } = useNetwork()
  const { user } = usePrivy()
  const [userTokens, setUserTokens] = useState(0)

  return (
    <div className="hidden h-full items-center gap-6 mmd:flex">
      {/* <Button type={ButtonType.SECONDARY} className="py-2">
        <span>Tokens</span>
        <span>{userTokens}</span>
        <Image
          src="/WLpictures/coin.png"
          width={80}
          height={81}
          className="h-6 w-6"
          alt=""
        />
      </Button> */}
      {notification && (
        <Link href={'/CG-AI/notifications'} className="p-2">
          <Image
            src="/Navbar/bell.svg"
            width={18.7}
            height={23.3}
            alt="notifications"
          />
        </Link>
      )}
      <span className="h-full border border-white/20"></span>
      <div className="flex h-fit items-center gap-3 text-sm">
        <Image
          src={`/crypto/ETH.png`}
          alt="chain"
          width={2000}
          height={2000}
          className="h-6 w-6"
        />
        <span className="h-4 border border-white/20"></span>
        <span className="text-white/40">
          {user?.wallet?.address?.substring(0, 5)}...
          {user?.wallet?.address?.substring(
            user?.wallet?.address?.length - 4,
            user?.wallet?.address?.length
          )}
        </span>
      </div>
      <Link href={'/logout'} className="flex items-center gap-2">
        <LuLogOut className="text-xl" />
        <span className="text-sm">Log Out</span>
      </Link>
    </div>
  )
}
