'use client'

import { aiSidebarItems } from '@/types/sidebar'
import { useState } from 'react'
import Button from '../shared/Button'
import ExportPrivateKeyDialog from '../CgAi/ExportPrivateKeyDialog'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { BiExport } from 'react-icons/bi'
export default function AiSidebar() {
  const params = useSearchParams()
  const path = usePathname()
  const [linkDialog, setLinkedDialog] = useState(false)
  const [waitlist, setWaitlist] = useState(false)
  const [positionDialog, setPositionDialog] = useState(false)
  const [position, setPosition] = useState(1)
  return (
    <div className="fixedHeight noScrollbar sticky left-0 top-20 hidden min-w-[250px] flex-col gap-1 overflow-y-scroll bg-[#131722CC] py-8 mmd:flex">
      {aiSidebarItems.map((item, i) => (
        <>
          {item.seprator && (
            <div className="my-4 w-full border-t-2 border-white/20"></div>
          )}
          <Link
            key={item.path + i}
            href={item.path}
            className={`relative flex items-center gap-4 py-2 pl-6 text-xl transition-all after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:rounded hover:bg-themeAiChatSidebarBgLight ${
              path.includes(item.path) ? 'after:bg-themeViolet' : ''
            }`}
          >
            {item.icon()}
            {item.title}
          </Link>
        </>
      ))}
      <div
        onClick={() => setLinkedDialog(true)}
        className="relative flex cursor-pointer items-center gap-4 py-2 pl-6 text-xl transition-all after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:rounded hover:bg-themeAiChatSidebarBgLight"
      >
        <BiExport />
        Export Private Key
      </div>
      <ExportPrivateKeyDialog
        isOpen={linkDialog}
        setIsOpen={setLinkedDialog}
        setPositionDialog={setPositionDialog}
        setPosition={setPosition}
      />
    </div>
  )
}
