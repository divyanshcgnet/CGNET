import Sidebar from '@/components/Dashboard/Sidebar'
import { ReactNode } from 'react'
import Image from 'next/image'

export default function TasksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pageHeight bg-custom-background w-full">
      {children}
    </div>
  )
}
