'use client'

import MainNavbar from '@/components/CgAi/ChatAi/MainNavbar'
import { HistoryProvider } from '@/context/HistoryContext'
import useWallet from '@/hooks/useWallet'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ChatSidebar from '@/components/CgAi/Sidebars/ChatSidebar'
import { usePrivy } from '@privy-io/react-auth'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isVerified, aiRegistered } = useWallet()
  const { authenticated } = usePrivy()
  const router = useRouter()

  useEffect(() => {
    if (!authenticated) return router.push('/')
    if (!isVerified) router.push('/login')
    if (!aiRegistered) return router.push('/CG-AI/intro')
  }, [])
  return (
    <HistoryProvider>
      <div className="relative mx-auto flex w-full flex-col">
        <MainNavbar />
        <div className="pageHeight flex h-full w-full">
          <ChatSidebar />
          {children}
        </div>
      </div>
    </HistoryProvider>
  )
}
