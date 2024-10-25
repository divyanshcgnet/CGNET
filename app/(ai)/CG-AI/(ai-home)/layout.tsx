'use client'

import AiSidebar from '@/components/AiDashboard/AiSidebar'
import { usePathname } from 'next/navigation'
import MainNavbar from '@/components/CgAi/ChatAi/MainNavbar'
import Brand from '@/components/Navbar/Brand'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  console.log(path)
  return (
    <div className="relative mx-auto flex w-full flex-col">
      {path.includes('intro') || path.includes('landing') ? (
        <div className="relative z-1 flex h-16 w-full items-center justify-center border-b border-b-[#fdfdfd99] bg-[#131722CC] backdrop-blur-sm mmd:h-20">
          <Brand />
        </div>
      ) : (
        <MainNavbar />
      )}
      <div className="pageHeight flex h-full w-full bg-[#0D0D17]">
        {!path.includes('intro') && !path.includes('landing') && <AiSidebar />}
        {children}
      </div>
    </div>
  )
}
