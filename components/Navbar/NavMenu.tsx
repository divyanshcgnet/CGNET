import Link from 'next/link'
import NavDropdown from './NavDropdown'
import NavAccordion from './NavAccordion'
import { IDrawerGeneric } from '@/types/navbar'
import { ECOSYSTEM_MENU } from '../CgAi/ChatAi/MainNavbar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Membership from '../Homepage/Membership'
import { usePrivy } from '@privy-io/react-auth'
import { getUserDetails } from '@/services/user'

interface UserData {
  planStatus: boolean
  access: boolean
}

const navMenuDropdowns = [
  // {
  //   title: 'Courses',
  //   menuItems: [
  //     {
  //       title: 'Novice',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Intermediate',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Experienced',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Master',
  //       path: '/',
  //       target: false,
  //     },
  //   ],
  // },
  // {
  //   title: 'CG AI',
  //   menuItems: [
  //     {
  //       title: 'Ai Dashboard',
  //       path: '/CG-AI/intro',
  //       target: false,
  //     },
  //     {
  //       title: 'ChatGenius',
  //       path: '/CG-AI/chat/chat-genius/newChat',
  //       target: false,
  //     },
  //     {
  //       title: 'TradeAnalyzer',
  //       path: '/CG-AI/chat/trade-analyzer/newChat',
  //       target: false,
  //     },
  //     // {
  //     //   title: 'ContractInsight',
  //     //   path: '/',
  //     //   target: false,
  //     // },
  //     // {
  //     //   title: 'CryptoBuzz ',
  //     //   path: '/',
  //     //   target: false,
  //     // },
  //   ],
  // },
  // {
  //   title: 'DApps',
  //   menuItems: [
  //     // {
  //     //   title: 'Blogs',
  //     //   path: '/',
  //     //   target: false,
  //     // },
  //     // {
  //     //   title: 'News',
  //     //   path: '/',
  //     //   target: false,
  //     // },
  //     {
  //       title: 'Swap',
  //       path: '/swap',
  //       target: false,
  //     },
  //     {
  //       title: 'CG NFTs',
  //       path: '/mint',
  //       target: false,
  //     },
  //   ],
  // },
  // {
  //   title: 'Market Updates',
  //   menuItems: [
  //     // {
  //     //   title: 'Blogs',
  //     //   path: '/',
  //     //   target: false,
  //     // },
  //     // {
  //     //   title: 'News',
  //     //   path: '/',
  //     //   target: false,
  //     // },
  //     {
  //       title: 'News',
  //       path: '/',
  //       target: false,
  //     },
  //     {
  //       title: 'Blogs',
  //       path: '/',
  //       target: false,
  //     },
  //   ],
  // },
  // {
  //   title: 'Ecosystem',
  //   menuItems: ECOSYSTEM_MENU,
  // },
  {
    title: 'Community',
    menuItems: [
      {
        title: 'Discord',
        path: 'https://discord.gg/GQJTSFdTwh',
        target: true,
      },
      {
        title: 'Telegram',
        path: 'https://t.me/cryptogradportal',
        target: true,
      },
      // {
      //   title: 'Instagram',
      //   path: 'https://www.instagram.com/cryptogradofficial/',
      //   target: true,
      // },
      {
        title: 'Twitter',
        path: 'https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw',
        target: true,
      },
    ],
  },
]

const NavMenu = ({ drawer, pathname, setOpen }: IDrawerGeneric) => {
  // const [subscribed, setSubscribed] = useState(false)
  // const [cglink, setCglink] = useState('')

  // useEffect(() => {
  //   const userDataString = localStorage.getItem('userData')
  //   let userData

  //   if (userDataString !== null) {
  //     userData = JSON.parse(userDataString)
  //   } else {
  //     userData = {}
  //   }

  //   const userPlan = userData?.plan

  //   if (['1M', '3M', '12M'].includes(userPlan)) {
  //     setSubscribed(true)
  //   } else {
  //     console.log('User is not subscribed')
  //   }
  // }, [])

  const router = useRouter()

  // const handleLinkClick = () => {
  //   if (subscribed) {
  //     setCglink('/CG-AI/explore')
  //   } else {
  //     // handlescroll()
  //     setCglink('/CG-AI/explore')
  //   }
  // }

  const handlescroll = () => {
    const eleid = document.getElementById('scrolltomemebership')
    eleid?.scrollIntoView({ behavior: 'smooth' })
  }

  const { ready, authenticated, login } = usePrivy()

  const handleLaunchApp = async (e: any) => {

    const user = await getUserDetails()
    if (ready && !authenticated) {
      login()
    } else if (user.planStatus || user.access) {
      router.push('CG-AI/explore')
    } else {
      handlescroll()
    }
  }

  return (
    <div
      className={`flex ${
        drawer ? 'flex-col' : 'flex-row'
      } items-center gap-4 font-medium`}
    >
      {/* {pathname === '/' && (
        
      )} */}

      {/* <Link
        href="/"
        className={`transition-all hover:text-themeVioletText ${
          drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
        }`}
      >
        Market
      </Link> */}
      {pathname.includes('/presale') ? (
        <>
          <Link
            href="/"
            onClick={() => setOpen && setOpen(false)}
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            How to Buy
          </Link>
          <Link
            href="/presale#tokenomics"
            onClick={() => setOpen && setOpen(false)}
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Tokenomics
          </Link>
          <Link
            href="/presale#roadmap"
            onClick={() => setOpen && setOpen(false)}
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Roadmap
          </Link>
          <Link
            href="/presale#growth"
            onClick={() => setOpen && setOpen(false)}
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            Refer & Earn
          </Link>
          <Link
            href="/presale#FAQ"
            onClick={() => setOpen && setOpen(false)}
            className={`text-sm font-light transition-all hover:text-themeVioletText ${
              drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
            }`}
          >
            FAQ
          </Link>
        </>
      ) : (
        pathname !== '/dashboard' && (
          <>
            {/* <Link
              href="/presale"
              onClick={() => setOpen && setOpen(false)}
              className={`transition-all hover:text-themeVioletText ${
                drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
              }`}
            >
              Pre-Sale
            </Link> */}

            <button
              onClick={handleLaunchApp}
              // onClick={() => {
              //   handleLinkClick() ;
              //   setOpen && setOpen(false)
              // }}
              className={`transition-all hover:text-themeVioletText ${
                drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack text-start' 
              }`}
            >
              Ecosystem
            </button>

            {!drawer &&
              navMenuDropdowns.map((item) => (
                <NavDropdown
                  key={item.title}
                  title={item.title}
                  menuItems={item.menuItems}
                  setOpen={setOpen}
                />
              ))}
            {drawer &&
              navMenuDropdowns.map((item) => (
                <NavAccordion
                  key={item.title}
                  title={item.title}
                  menuItems={item.menuItems}
                  setOpen={setOpen}
                />
              ))}

            <a
              href="https://cryptograd.gitbook.io/cryptograd/"
              target={'_blank'}
              // onClick={() => setOpen && setOpen(false)}
              // onClick={handleLinkClick}
              className={`transition-all hover:text-themeVioletText ${
                drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
              }`}
            >
              Whitepaper
            </a>
            <Link
              href="/help/FAQ"
              onClick={() => setOpen && setOpen(false)}
              className={`transition-all hover:text-themeVioletText ${
                drawer && 'w-full rounded-md px-2 py-1 hover:bg-themeBgBlack'
              }`}
            >
              FAQ
            </Link>
          </>
        )
      )}
    </div>
  )
}

export default NavMenu
