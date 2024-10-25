'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, useEffect, useState } from 'react'
import Button from '../shared/Button'
import { MdDone } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import useWallet from '@/hooks/useWallet'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { emailRegex } from '@/utils/emailRegex'
import Link from 'next/link'
import { getUserDetails, joinWaitlist, verifyUser } from '@/services/user'
import WaitlistSwiper from '@/components/Login/WaitlistSwiper'

interface ITelegram {
  first_name: string
  last_name: string
  id: number
  photo_url: string
  username: string
}

export default function WaitlistDialog({
  isOpen,
  setIsOpen,
  setPosition,
  setPositionDialog,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  setPosition: Dispatch<number>
  setPositionDialog: Dispatch<boolean>
}) {
  const { isLoggedIn } = useWallet()
  const [twitter, setTwitter] = useState(false)
  const [loading, setLoading] = useState(false)
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
      }
    | undefined
  >()
  const [email, setEmail] = useState('')

  const handleContinue = async () => {
    setLoading(true)
    try {
      const res = await joinWaitlist()
      setLoading(false)
      setPosition(res.waitlistRank)
      setPositionDialog(true)
      setIsOpen(false)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  const getUserInfo = async () => {
    const res = await getUserDetails()
    // console.log({ res, userInfo })
    if (res.twitter != undefined) {
      // console.log('lmoa')
      setTwitter(true)
      setTwitterInfo(res.twitter)
    }

    if (res.email) {
      setEmail(res.email)
    }

    setUserInfo(res)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isLoggedIn) return
    getUserInfo()
  }, [isLoggedIn])

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
              <Dialog.Panel className="relative flex h-full w-full max-w-[1000px] flex-col items-center justify-center gap-12 overflow-hidden rounded-3xl px-4 pb-8 pt-8 mmd:aspect-[10/7] mmd:px-0 mmd:pt-0">
                <Image
                  src={'/Login/grid-background.svg'}
                  alt=""
                  className={
                    'absolute bottom-0 left-0 right-0 top-0 -z-1 h-full w-full object-cover'
                  }
                  width={1019}
                  height={700}
                />
                <Image
                  src={'/Login/bg1.png'}
                  alt=""
                  className={
                    'absolute bottom-0 left-0 right-0 top-0 z-0 h-full w-full object-cover opacity-40'
                  }
                  width={979}
                  height={679}
                />
                <Image
                  src={'/Login/yellow.png'}
                  alt=""
                  className={'absolute left-0 top-0 z-0 opacity-40'}
                  width={255}
                  height={136}
                />
                <button
                  onClick={closeModal}
                  className="group absolute right-4 top-4 rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                >
                  <IoClose className="text-2xl transition-all group-hover:text-themeVioletText" />
                </button>
                <div className="flex flex-col gap-4">
                  <div className="relative z-1 text-3xl font-semibold md:text-5xl">
                    Join The Waitlist
                  </div>
                  <div className="relative z-1 text-lg font-light text-white/40">
                    Being among the first to experience seamless, secure crypto
                    asset exchange at the speed of light.
                  </div>
                </div>
                <div className="relative z-1 flex items-center justify-center gap-4">
                  <Image
                    src="/Login/users.png"
                    width={573}
                    height={164}
                    alt={''}
                    className={'h-16 w-fit'}
                  />
                  <span className="text-xl font-bold text-themeLightViolet">
                    + 5070 more...
                  </span>
                </div>
                <div className="relative z-1 w-full max-w-lg transform overflow-hidden rounded-2xl bg-themeDialogBlack p-4 text-left align-middle shadow-xl transition-all md:p-6">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-white/40">Required</span>
                        <div
                          className={`flex h-14 items-center justify-between gap-2 rounded border-2 border-white/10 px-2 text-left md:gap-4 md:px-3`}
                        >
                          <div className="flex flex-grow items-center gap-2 md:gap-4">
                            <FaXTwitter className="text-3xl text-themeBorderBlue" />
                            <span className="flex-grow">
                              {twitter
                                ? 'Twitter Connected'
                                : 'Connect Twitter'}
                            </span>
                            {twitter && (
                              <span className="text-xs text-white/40">
                                (
                                {userInfo?.twitter
                                  ? userInfo?.twitter.username
                                  : twitterInfo?.username}
                                )
                              </span>
                            )}
                          </div>
                          {twitter && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                              <MdDone className="text-xl" />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-white/40">Optional</span>
                        <div
                          className={`flex h-14 items-center justify-between gap-4 rounded border-2 border-white/10 px-2 text-left md:px-3`}
                        >
                          <div className="flex flex-grow items-center gap-2 md:gap-4">
                            <HiOutlineMail className="text-3xl text-themeBorderBlue" />
                            {email ? email : 'Email not Added'}
                          </div>
                          {emailRegex.test(email) && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                              <MdDone className="text-xl" />
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center justify-center gap-2">
                        <Button
                          onClick={handleContinue}
                          loading={loading}
                          className={'w-full'}
                          disabled={
                            !twitter || !!(email && !emailRegex.test(email))
                          }
                        >
                          Join Waitlist
                        </Button>
                        <span className={'text-xs font-light text-white/60'}>
                          By clicking “Join Waitlist” you agree to our{' '}
                          <Link
                            className={'font-medium text-themeBorderBlue'}
                            href={'/help/privacy-policy'}
                          >
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link
                            className={'font-medium text-themeBorderBlue'}
                            href={'/help/terms-anc-conditions'}
                          >
                            Terms of Use
                          </Link>{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex h-8 w-full bg-gradient-to-br from-[#743FE0] to-[#5E5BFF]">
                  <WaitlistSwiper />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
