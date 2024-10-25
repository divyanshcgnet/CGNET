'use client'

import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { IDrawerGeneric } from '@/types/navbar'
import ConnectWalletDialog from './ConnectWalletDialog'
import useWallet from '@/hooks/useWallet'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePrivy } from '@privy-io/react-auth'
import { getUserDetails, privyLogin } from '@/services/user'
import { IPrivyLoginData } from '@/types/user'
import ExportPrivateKeyDialog from '../CgAi/ExportPrivateKeyDialog'
import GetDiscountDialog from '../CgAi/GetDiscountDialog'
import Link from 'next/link'

const ConnectWallet = ({ drawer }: IDrawerGeneric) => {
  const [firstTimeUser, setFirstTimeUser] = useState(false)
  const { dialog, setDialog } = useWallet()
  const [linkDialog, setLinkedDialog] = useState(false)
  const [waitlist, setWaitlist] = useState(false)
  const [positionDialog, setPositionDialog] = useState(false)
  const [position, setPosition] = useState(1)
  const { ready, authenticated, login, user, logout, getAccessToken } =
    usePrivy()
  // const { logout } = useLogout()
  const [name, setName] = useState('')
  // const { address, isConnected } = useAccount()
  // const { loginUser } = useWallet()
  // const search = useSearchParams()

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

  const [ShowManageSubButton, setShowManageSubButton] = useState(false)
  const [hasRedirected, setHasRedirected] = useState(false)


  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    console.log('loggin out')
    localStorage.clear()
  }

  const parseDisplayString = (): string => {
    // return ''
    if (user?.google) {
      if (user.google.name) return user.google.name
      return `${user.google.email.substring(
        0,
        5
      )}...${user.google.email.substring(
        user.google.email.length - 4,
        user.google.email.length
      )}`
    }
    if (user?.twitter) {
      return user.twitter.username as string
    }
    if (user?.discord) {
      const [username, tag] = user.discord.username!.split('#')
      return username
    }
    const address = user?.email ? user?.email.address : user?.wallet?.address
    return `${address?.substring(0, 5)}...${address?.substring(
      address?.length - 4,
      address?.length
    )}`
  }

  // useEffect(() => {
  //   const refId = search.get('ref')
  //   if (isConnected == true && address) {
  //     if (refId) loginUser(address, refId)
  //     else loginUser(address)
  //   }
  // }, [address])

  const loginUser = async () => {
    const data: IPrivyLoginData = {
      walletAddress: user?.wallet?.address!,
      id: user?.id!,
    }

    if (user?.google) {
      data.google = {
        id: user.google.subject,
        name: user.google.name ? user.google.name : '',
        email: user.google.email,
      }
    }

    if (user?.twitter) {
      data.twitter = {
        id: user.twitter.subject,
        name: user.twitter.name ? user.twitter.name : '',
        username: user.twitter.username ? user.twitter.username : '',
        photoURL: user.twitter.profilePictureUrl
          ? user.twitter.profilePictureUrl
          : '',
      }
    }

    if (user?.email) {
      data.email = user.email.address
    }

    await privyLogin(data)
    const accessToken = await getAccessToken()
    localStorage.setItem('accessToken', accessToken!)
    const userData = await getUserDetails()
    setFirstTimeUser(userData.firstTimeUser)
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  const handlescroll = () => {
    const eleid = document.getElementById('scrolltomemebership')
    eleid?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLinkClick = async () => {
    const user = await getUserDetails()
    if (user.planStatus || user.access) {
      router.push('/CG-AI/subscription')
    } else {
      handlescroll()
    }
  }

  useEffect(() => {
    // console.log(user)
    // console.log({ authenticated })
    if (!user) return
    setName(parseDisplayString())
    loginUser()
  }, [user, authenticated])

  const [popShow, setPopShow] = useState(false)

  useEffect(() => {
    if (firstTimeUser) setPopShow(true)
  }, [firstTimeUser])

  const ShowButton = async () => {
    try {
      const username = await getUserDetails()
      console.log('User details:', username)
      const usernamevalue = username as {
        planStatus?: boolean
        access?: boolean
      }
      if (usernamevalue.planStatus || usernamevalue.access) {
        setShowManageSubButton(true)
      } else {
      }
    } catch (error) {
      console.error('Error in ShowButton:', error)
    }
  }

  useEffect(() => {
    ShowButton()
  }, [])

  const redirect = useCallback(async () => {
    try {
      const username = await getUserDetails()
      if (!username.planStatus && !username.access) {
        router.push('/join')
        localStorage.setItem('redirected', 'true')
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    const hasRedirected = localStorage.getItem('redirected')
    if (!hasRedirected)
      redirect()
  }, [])

  return (
    <>
      <ExportPrivateKeyDialog
        isOpen={linkDialog}
        setIsOpen={setLinkedDialog}
        setPositionDialog={setPositionDialog}
        setPosition={setPosition}
      />

      {/* {popShow && (
        <GetDiscountDialog
          isOpen={popShow}
          setIsOpen={setPopShow}
          setFirstTimeUser={setFirstTimeUser}
        />
      )} */}

      <div
        className={`flex items-center ${
          drawer ? 'w-full flex-col gap-2' : 'gap-4'
        }`}
      >
        {authenticated ? (
          drawer ? (
            <div className="flex w-full flex-col gap-2">
              <div className="flex gap-2">
                {/*<Button*/}
                {/*  onClick={() => router.push('/dashboard?tab=dashboard')}*/}
                {/*  className="w-full !px-4 text-sm"*/}
                {/*>*/}
                {/*  Dashboard*/}
                {/*</Button>*/}
                <Button
                  type={ButtonType.SECONDARY}
                  className="flex-grow !px-4 text-sm"
                  onClick={handleLogout}
                  // onClick={() => {
                  //   router.push('/logout')
                  // }}
                >
                  Logout
                </Button>
              </div>
              <Button className="cursor-default">{name}</Button>
            </div>
          ) : (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`flex min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6 ${
                    drawer ? 'w-full' : ''
                  }`}
                >
                  {name}
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-themeBlack shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="flex flex-col gap-1 p-2">
                    {/*<Menu.Item>*/}
                    {/*  <Link*/}
                    {/*    href="/dashboard?tab=dashboard"*/}
                    {/*    className={`px-3 py-1`}*/}
                    {/*  >*/}
                    {/*    Dashboard*/}
                    {/*  </Link>*/}
                    {/*</Menu.Item>*/}
                    <Menu.Item>
                      <button
                        onClick={handleLogout}
                        className={`px-3 py-1 text-left`}
                      >
                        Logout
                      </button>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={() => setLinkedDialog(true)}
                        className={`px-3 py-1 text-left`}
                      >
                        Export Private Key
                      </button>
                    </Menu.Item>
                    {ShowManageSubButton && (
                      <Menu.Item>
                        <button
                          onClick={() => handleLinkClick()}
                          className={`px-3 py-1 text-left`}
                        >
                          Manage Subscription
                        </button>
                      </Menu.Item>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )
        ) : (
          <>
            {/* <button onClick={() => {}}>Log In</button> */}
            <Button
              // loading={loading}
              disabled={!ready}
              onClick={login}
              className={drawer ? 'w-full' : ''}
            >
              Login
            </Button>
            {/*<Button*/}
            {/*  // loading={loading}*/}
            {/*  onClick={connectWallet}*/}
            {/*  className={drawer ? 'w-full' : ''}*/}
            {/*>*/}
            {/*  Connect Wallet*/}
            {/*</Button>*/}
          </>
        )}
      </div>
      <ConnectWalletDialog isOpen={dialog} setIsOpen={setDialog} />
    </>
  )
}

export default ConnectWallet
