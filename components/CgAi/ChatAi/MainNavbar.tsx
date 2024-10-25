import Brand from '@/components/Navbar/Brand'
import AiDrawer from './AiDrawer'
import FunctionalNav from './FunctionalNav'
// import ChatDrawer from './ChatDrawer'
import NavDropdown from '@/components/Navbar/NavDropdown'
import BackButton from './BackButton'

export const ECOSYSTEM_MENU = [
  // {
  //   title: '$CG Presale',
  //   path: '/presale',
  //   target: false,
  // },
  {
    title: 'CryptoGrad AI',
    path: '/CG-AI/explore',
    target: false,
  },
  {
    title: 'Market Stats',
    path: '/CG-AI/dashboard',
    target: false,
  },
  {
    title: 'News & Blogs',
    path: '/CG-AI/trade-ideas',
    target: false,
  },
  {
    title: 'LaunchPad',
    path: '#',
    target: false,
  },
]

export default function MainNavbar() {
  return (
    <nav className="sticky top-0 z-10 mx-auto flex h-16 w-full items-center justify-between border-themeBorder/30 bg-themeNavBlack/80 bg-opacity-80 px-4 backdrop-blur-lg mmd:h-20 mmd:px-16">
      <div className="flex items-center gap-4">
        {/* <ChatDrawer /> */}
        <BackButton />
        <Brand />
        <div className="ml-2 rounded-full bg-themeBlackDeep px-4 py-2 text-xs font-light">
          BETA
        </div>
        {/* <NavDropdown
          title={'Ecosystem'}
          menuItems={ECOSYSTEM_MENU}
          className="hidden mmd:block"
        /> */}
      </div>
      <FunctionalNav />
      <AiDrawer />
    </nav>
  )
}
