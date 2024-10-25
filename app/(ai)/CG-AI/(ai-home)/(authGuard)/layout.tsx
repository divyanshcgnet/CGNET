'use client'

import useWallet from '@/hooks/useWallet'
import { Children } from '@/types/generics'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { usePrivy } from '@privy-io/react-auth'

export default function AuthGuardLayout({ children }: Children) {
  const { isVerified, aiRegistered, isLoggedIn, waitlisted } = useWallet()
  const {ready, authenticated } = usePrivy()
  const router = useRouter()

  useEffect(() => {
    console.log({ authenticated })
    // if (!isVerified || !isLoggedIn || waitlisted) return router.push('/login')
    // if (!isVerified || !isLoggedIn) return router.push('/login')
    if (ready && !authenticated) return router.push('/')
    if (!aiRegistered) return router.push('/CG-AI/intro')
  }, [ready])
  return <>{children}</>
}
