'use client'

import { usePathname } from 'next/navigation'
import NftDroppingTimer from './NftDroppingTimer'
import Link from 'next/link'
import { usePrivy } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'


const NftDroppingNav = () => {
  const pathname = usePathname()
  const { login, authenticated } = usePrivy()
  const router = useRouter()

  if (pathname === '/presale') {
    return null
  }

  const handleExplore = () => {
    if (authenticated) {
      router.push('/CG-AI/explore')
    } else {
      login()
    }
  }

  return (
    <div className="relative z-10 flex h-fit items-center justify-center gap-2 bg-gradient-to-r from-themeViolet to-themeBlue px-4 py-1 md:gap-4 mmd:px-16">
      {/* <Image
        src="/Navbar/nft-wait-head.png"
        className="h-full object-contain object-left"
        width={336}
        height={119}
        alt=""
      /> */}
      <NftDroppingTimer />
      
        <button onClick={handleExplore} className="text-xs font-bold underline md:text-base">
          Know More
        </button>
      
      {/* <Image
        src="/Navbar/nft-wait-head-1.png"
        className="h-full object-contain object-right"
        width={333}
        height={119}
        alt=""
      /> */}
    </div>
  )
}

export default NftDroppingNav
