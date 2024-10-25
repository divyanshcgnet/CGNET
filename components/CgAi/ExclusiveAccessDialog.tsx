'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, useCallback, useEffect, useState } from 'react'
import Button from '../shared/Button'
import { MdDone } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import useWallet from '@/hooks/useWallet'
import { FaXTwitter } from 'react-icons/fa6'
import { LiaTelegramPlane } from 'react-icons/lia'
import { HiOutlineMail } from 'react-icons/hi'
import { CgCommunity } from 'react-icons/cg'
import { emailRegex } from '@/utils/emailRegex'
import { usePrivy } from '@privy-io/react-auth'

// import {
//   TwitterAuthProvider,
//   getAdditionalUserInfo,
//   signInWithPopup,
// } from 'firebase/auth'
// import { authentication } from '@/utils/firebaseConfig'
import {
  addTelegram,
  addTempReferral,
  addTwitter,
  getUserDetails,
  userWalletByRefId,
  verifyUser,
} from '@/services/user'
import { useRouter, useSearchParams } from 'next/navigation'
import { whitelistedRefs } from '@/utils/whitelist'
import waitlist from '@/components/Homepage/Waitlist'
// import { LoginButton } from '@telegram-auth/react'
// import { IoRefreshCircleOutline } from 'react-icons/io5'
// import Link from 'next/link'
// import { Client, auth } from 'twitter-api-sdk'

interface ITelegram {
  first_name: string
  last_name: string
  id: number
  photo_url: string
  username: string
}

export default function ExclusiveAccountDialog({
  isOpen,
  setIsOpen,
  setWaitlist,
  setPosition,
  setPositionDialog,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  setWaitlist: Dispatch<boolean>
  setPosition: Dispatch<number>
  setPositionDialog: Dispatch<boolean>
}) {
  const { linkTwitter, linkEmail, user } = usePrivy()
  // console.log(user)
  const { isConnected, address } = useAccount()

  const { connectWallet, isLoggedIn, setIsVerified } = useWallet()
  const [twitter, setTwitter] = useState(false)
  // console.log({ isConnected, address, isLoggedIn })

  // console.log({ twitter })
  // console.log({ isLoggedIn })
  const [refLocked, setRefLocked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [telegram, setTelegram] = useState(false)
  const [ref, setRef] = useState('')
  // const [telegramInfo, setTelegramInfo] = useState<ITelegram | undefined>()
  const search = useSearchParams()
  const [refStatus, setRefStatus] = useState(false)
  const [telegramInfo, setTelegramInfo] = useState('')
  const [twitterInfo, setTwitterInfo] = useState<
    | {
        username: string
      }
    | undefined
  >()
  const [userInfo, setUserInfo] = useState<
    | {
        twitter: {
          username: string
        }
        telegram: {
          username: string
        }
        email: string | undefined
        verified: boolean
        walletAddress: string
      }
    | undefined
  >()
  const [email, setEmail] = useState('')
  const router = useRouter()
  // const [twitterUserName, setTwitterName] = useState('')
  const searchParams = useSearchParams()

  const checkReferral = async () => {
    try {
      const res = await userWalletByRefId(ref.trim())
      // console.log(res)
      if (!res.data) return setRefStatus(false)
      setRefStatus(true)
    } catch (error) {
      console.log(error)
      setRefStatus(false)
    }
    try {
      await addTempReferral(ref)
    } catch (err) {
      console.log(err)
    }
  }

  // const handleTelegram = async () => {
  //   if (!telegramInfo) return
  //   try {
  //     await addTelegram(telegramInfo)
  //     setTelegram(true)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const telegramAuth = () => {
  //   if (!telegramInfo) {
  //     //@ts-ignore
  //     window.Telegram.Login.auth(
  //       { bot_id: 6631921066, request_access: true },
  //       (data: any) => {
  //         if (!data) {
  //           // authorization failed
  //           console.log('error')
  //           return
  //         }
  //         setTelegramInfo(data)
  //       }
  //     )
  //   }
  // }

  const handleContinue = async () => {
    setLoading(true)
    const reqData: {
      email?: string
      telegram?: string
      referral?: string
      waitlisted: boolean
    } = {
      // waitlisted: false, //! Need to change this when waitlist is implimented
      waitlisted: true,
    }
    if (telegramInfo) {
      reqData.telegram = telegramInfo.trim()
    }
    if (email) {
      reqData.email = email.trim()
    }
    if (refStatus) {
      reqData.referral = ref.trim()
    }

    if (whitelistedRefs.find((item) => item === ref.trim())) {
      reqData.waitlisted = false
    }
    // console.log(reqData)

    try {
      await verifyUser(reqData)
      setLoading(false)
      setIsVerified(true)
      if (reqData.waitlisted) {
        setWaitlist(true)
        setIsOpen(false)
      } else {
        router.push('/CG-AI/dashboard')
      }
      // router.push('/CG-AI/dashboard')
    } catch (error) {
      setLoading(false)
    }
  }

  // console.log({ isLoggedIn, isConnected })

  const twitterLogin = async () => {
    const token = searchParams.get('twitter')
    console.log({ token })
    if (!token) return
    const twitter = parseJwt(token)
    // console.log(twitter)
    setTwitterInfo(twitter)
    await addTwitter({ _id: twitter.id })
    setTwitter(true)
    router.replace('/login')
  }

  const getUserInfo = async () => {
    const res = await getUserDetails()
    // console.log({ res, userInfo })
    console.log("hehlo")

    if (!res) return
    console.log({ res })
    if (res.twitter) {
      setTwitter(true)
      setTwitterInfo(res.twitter)
    }
    if (res.telegramUsername) {
      setTelegramInfo(res.telegramUsername)
      setTelegram(true)
    }
    if (res.email) {
      setEmail(res.email)
    }
    if (res.referredBy) {
      setRef(res.referredBy.referralId)
    }
    if (res.verified) {
      if (res.waitlisted) {
        if (res.waitlistRank > 0) {
          setPosition(Number(res.waitlistRank))
          setPositionDialog(true)
          setIsOpen(false)
        } else {
          setWaitlist(true)
          setIsOpen(false)
        }
      } else {
        router.push('/CG-AI/dashboard')
      }
      // router.push('/CG-AI/dashboard')
    }

    setUserInfo(res)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function parseJwt(token: string) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  }

  useEffect(() => {
    const refId = search.get('ref')
    if (refId) setRef(refId)
    console.log('a  ')
    getUserInfo()
    if (!isLoggedIn) return
    console.log('a  ')

    console.log('f  ')
    twitterLogin()
  }, [])

  // console.log({ isConnected, twitter })

  useEffect(() => {
    checkReferral()
  }, [ref, isLoggedIn, checkReferral])

  useEffect(() => {
    if (!user) return
    if (user.email) {
      setEmail(user.email.address)
    }
  }, [user])

  useEffect(() => {
    if (search.get('pos')) {
      setIsOpen(false)
      setPositionDialog(true)
    }
  })

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black  bg-opacity-25 backdrop-blur-lg" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-themeDialogBlack p-4 text-left align-middle shadow-xl transition-all md:p-6">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 block rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                >
                  <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                </button>
                <div className="flex flex-col gap-8">
                  <div className="text-center text-xl font-medium md:text-3xl">
                    Exclusive Access
                  </div>
                  <div className="flex flex-col gap-6">
                    <button
                      disabled={!isConnected}
                      onClick={connectWallet}
                      className="flex h-14 items-center justify-between gap-2 rounded border-2 border-white/10 px-2 text-left md:gap-4 md:px-3"
                    >
                      <div className="flex flex-grow items-center gap-2 md:gap-4">
                        <Image
                          src="/Navbar/metamask.png"
                          width={508}
                          height={471}
                          className="h-8 w-fit"
                          alt=""
                        />
                        <span className="flex-grow text-xs text-white/60 md:text-sm">
                          {!isConnected || isLoggedIn
                            ? user?.wallet?.address.substring(0, 5) +
                              '...' +
                              user?.wallet?.address.substring(
                                user?.wallet?.address.length - 4,
                                user?.wallet?.address.length
                              )
                            : 'Connect Wallet'}
                        </span>
                        {isConnected && isLoggedIn && (
                          <span className="text-xs text-white/40">
                            ({address?.substring(0, 5)}...
                            {address?.substring(
                              address?.length - 4,
                              address?.length
                            )}
                            )
                          </span>
                        )}
                      </div>
                      {isConnected && isLoggedIn && (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                          <MdDone className="text-xl" />
                        </span>
                      )}
                    </button>

                    <div className="flex flex-col gap-1">
                      <div className="flex items-end justify-between">
                        <span className="text-sm text-white/40">Required</span>
                        {ref && !refStatus && (
                          <span className="text-xs font-bold text-red-500">
                            Invalid Referral
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex h-14 items-center ${
                          refLocked ? 'opacity-50' : ''
                        } justify-between gap-4 rounded border-2 border-white/10 px-2 text-left md:px-3`}
                      >
                        <div className="flex flex-grow items-center gap-2 md:gap-4">
                          <CgCommunity className="text-3xl text-themeBorderBlue" />
                          <input
                            type="text"
                            value={ref}
                            placeholder="Referral"
                            disabled={refLocked}
                            onChange={(e) => setRef(e.target.value)}
                            className="flex-grow border-none bg-inherit outline-none"
                          />
                        </div>
                        {refStatus && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                            <MdDone className="text-xl" />
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={handleContinue}
                      loading={loading}
                      disabled={!(isConnected || twitter)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
