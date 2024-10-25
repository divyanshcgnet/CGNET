'use client'

import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function BackButton() {
  const pathname = usePathname()
  return (
    pathname.includes('chat') && (
      <Link href="/CG-AI/dashboard">
        <FaArrowLeft className="text-2xl transition-all hover:text-themeBorderBlue" />
      </Link>
    )
  )
}
