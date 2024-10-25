'use client'

import { BsDiscord } from 'react-icons/bs'
// import { BiLogoInstagramAlt } from 'react-icons/bi'
// import JoinTheBeta from '../shared/JoinTheBets'
import Button from '../shared/Button'
import useWallet from '@/hooks/useWallet'
import { useRouter } from 'next/navigation'
import { FaTelegramPlane } from 'react-icons/fa'
import { usePrivy } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'
import { getUserDetails } from '@/services/user'

const HeroSectionActions = () => {
  const router = useRouter()
  const { authenticated, ready, login } = usePrivy()

  const handlescroll = () => {
    const eleid = document.getElementById('scrolltomemebership')
    eleid?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleGetStartedClick = async () => {
    if (ready && !authenticated) {
      login()
    }
    const user = await getUserDetails()
    if (user.planStatus || user.access) {
      router.push('/CG-AI/explore')
    } else {
      router.push('/join')
    }
  }

  // const { connectWallet, isLoggedIn } = useWallet()
  // const { authenticated } = usePrivy()

  const handleClick = () => {
    // if (authenticated) return router.push('/CG-AI/dashboard')
    // router.push('/login')
    // // connectWallet()
  }

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

  // const router = useRouter()

  // const handleLinkClick = () => {
  //   if (subscribed) {
  //      setCglink('CG-AI/subscription')
  //   } else {
  //     setCglink('CG-AI/subscription')
  //     // handlescroll()
  //   }
  // }

  return (
    <div className="relative z-5 mt-8 flex items-center justify-center gap-2 md:gap-4">
      {/* <JoinTheBeta buttonText='Get Started' /> */}
      <Button onClick={handleGetStartedClick} className="!h-12 min-h-[2.5rem]">
        Get Started
      </Button>
      {/*<a*/}
      {/*  href="https://discord.gg/GQJTSFdTwh"*/}
      {/*  target="_blank"*/}
      {/*  rel="noreferrer noopener"*/}
      {/*  className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"*/}
      {/*>*/}
      {/*  <BsDiscord className="!text-2xl" />*/}
      {/*</a>      */}
      <a
        href="https://t.me/cryptogradportal"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <FaTelegramPlane className="!text-2xl" />
      </a>
      {/* <a
        href="https://twitter.com/cgradofficial"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BsTwitter className="!text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/cryptogradofficial/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BiLogoInstagramAlt className="!text-3xl" />
      </a> */}
    </div>
  )
}

export default HeroSectionActions
