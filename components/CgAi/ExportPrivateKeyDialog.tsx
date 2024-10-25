'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, useEffect, useState } from 'react'
import Button from '../shared/Button'
import { MdDone } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import useWallet from '@/hooks/useWallet'
import { FaCross, FaXTwitter } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { emailRegex } from '@/utils/emailRegex'
import Link from 'next/link'
import { getUserDetails, joinWaitlist, verifyUser } from '@/services/user'
import WaitlistSwiper from '@/components/Login/WaitlistSwiper'
import { BiCopy } from 'react-icons/bi'
import { usePrivy } from '@privy-io/react-auth'
import copy from 'copy-to-clipboard'
import { IoMdCloseCircle } from "react-icons/io";

interface ITelegram {
  first_name: string
  last_name: string
  id: number
  photo_url: string
  username: string
}

export default function ExportPrivateKeyDialog({
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

  const { ready, authenticated, user, exportWallet } = usePrivy()

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

  const copyToClipboard = (text: string) => {
    copy(text)
  }

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
                <div className="relative flex w-full max-w-[470px] flex-col gap-4 rounded bg-themeDialogBlack p-6">
                    
                    <h2 className="text-3xl font-semibold">
                      Export Private Key
                    </h2>
                    <IoMdCloseCircle onClick={closeModal} className="absolute right-2 top-2 h-7 w-7 cursor-pointer text-themeViolet hover:text-red-500" />
                

                  <div className="mt-4 rounded bg-themeGrey p-3 py-4 text-left leading-7">
                    Cryptograd creates a wallet for all users who don&apos;t sign up
                    using a wallet. <br />
                    <br />
                    Your Private Key provides full access to your wallet and
                    funds. Do not share this with anyone. Cryptograd Support
                    will not request this
                  </div>
                  <div className="mt-4 text-left">
                    <p className="text-sm text-themeTextGrey">Wallet Address</p>
                    <div
                      onClick={() =>
                        user?.wallet && copyToClipboard(user.wallet.address)
                      }
                      className="mt-2 flex w-full gap-4"
                    >
                      <Button className="w-full py-2">
                        Wallet Address
                        <BiCopy className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-left">
                    <p className="text-sm text-themeTextGrey">Private Key</p>
                    <div className="mt-2 flex w-full gap-4">
                      <Button onClick={exportWallet} className="w-full py-2">
                        Private Key
                        <BiCopy className="h-8 w-8" />
                      </Button>
                    </div>
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
