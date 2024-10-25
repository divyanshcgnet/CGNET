'use client'

import { sidebarItems } from '@/types/sidebar'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Sidebar() {
  const params = useSearchParams()
  console.log(params.get('tab'), 'tabb')
  return (
    <div className="hidden min-h-full min-w-[250px] flex-col gap-5 bg-[#131722CC] py-12 mmd:flex">
      {sidebarItems.map((item, i) => (
        <Link
          key={item.path + i}
          href={`/dashboard?tab=${item.path}`}
          className={`relative flex items-center gap-4 pl-6 text-xl ${params.get('tab') === item.path
              ? 'after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:rounded after:bg-themeViolet'
              : ''
            }`}
        >
          {item.icon()}
          {item.title}
        </Link>
      ))}
    </div>
  )
}
