'use client'

import { usePathname } from 'next/navigation'
import Brand from './Brand'
import ConnectWallet from './ConnectWallet'
import Drawer from './Drawer'
import NavMenu from './NavMenu'
import DashboardDrawer from '../Dashboard/DashboardDrawer'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className="sticky top-0 z-10 mx-auto flex h-16 w-full items-center justify-between border-themeBorder/30 bg-themeNavBlack/80 bg-opacity-80 px-4 backdrop-blur-lg mmd:h-20 mmd:px-16">
      <div className="flex items-center gap-4">
        <Brand />
        {pathname.includes('/dashboard') && (
          <div className="rounded-full bg-[#20222B] px-4 py-2 text-xs font-light">
            Private Sale
          </div>
        )}
      </div>
      {pathname.includes('/presale') ? (
        <>
          <div className="hidden mmd:flex">
            <NavMenu pathname={pathname} />
          </div>
          <div className="hidden mmd:flex">
            <ConnectWallet pathname={pathname} />
          </div>
        </>
      ) : (
        pathname !== '/dashboard' && (
          <>
            <div className="hidden mmd:flex">
              <NavMenu pathname={pathname} />
            </div>
            <div className="hidden mmd:flex">
              <ConnectWallet pathname={pathname} />
            </div>
          </>
        )
      )}
      {!pathname.includes('/dashboard') && <Drawer />}
      {pathname.includes('/dashboard') && <DashboardDrawer />}
    </nav>
  )
}

export default Navbar
