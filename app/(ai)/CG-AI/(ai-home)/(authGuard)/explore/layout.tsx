import Sidebar from '@/components/Dashboard/Sidebar'
import { ReactNode } from 'react'
import Image from 'next/image'

export default function ExploreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pageHeight bg-custom-background w-full">
      {children}
    </div>
  )
}
