import Sidebar from '@/components/Dashboard/Sidebar'
import StickyReferral from '@/components/Dashboard/StickyReferral'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="pageHeight flex h-full w-full">
        <Sidebar />
        {children}
      </div>
      <StickyReferral />
    </>
  )
}
