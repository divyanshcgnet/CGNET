'use client'

import useWallet from '@/hooks/useWallet'
import { usePrivy } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

export default function Logout() {
  // const { logout } = useWallet()
  const { logout } = usePrivy()
  const router = useRouter()

  const logoutUser = useCallback(() => {
    logout()
    localStorage.clear()
    router.push('/')
  }, [logout, router])

  useEffect(() => {
    logoutUser()
  }, [logoutUser])

  return <></>
}
