'use client'

import { useAccount } from 'wagmi'
import Button from '../shared/Button'
import Toast from '../shared/Toast'
import { useEffect, useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import { getUserDetails } from '@/services/user'

export default function GrowthActions() {
  const { isConnected } = useAccount()
  const [referralId, setReferralId] = useState('')
  const { ready, authenticated } = usePrivy()
  const router = useRouter()

  const connectWallet = () => {
    router.push('/login')
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await getUserDetails()
      if (user && user.referralId) {
        setReferralId(user.referralId)
      }
    }

    if (authenticated) {
      fetchUserDetails()
    }
  }, [authenticated])

  return (
    <div className="flex justify-center md:justify-start">
      {ready && authenticated ? (
        <Toast
          refId={referralId}
          disabled={!authenticated}
          className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          Generate Referral link
        </Toast>
      ) : (
        <Button onClick={connectWallet} className="!text-base !font-light">
          Connect Wallet & Generate Referral link
        </Button>
      )}
    </div>
  )
}
