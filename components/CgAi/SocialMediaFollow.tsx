'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from '../shared/Button'
import { MdDone } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import { FaPercent } from 'react-icons/fa'
import { usePrivy } from '@privy-io/react-auth'
import { MdCreditCard } from 'react-icons/md'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { TbBrandTelegram } from 'react-icons/tb'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineMail } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { Input } from '@mui/material'
import Link from 'next/link'
export default function SocialMediaFollow({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) {
  const closeModal = () => {
    setIsOpen(false)
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
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg" />
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
                <div className="flex w-full flex-row">
                  <span className="w-full text-center text-2xl font-bold">
                    Follow Our Socials
                  </span>
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 block rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                  >
                    <IoClose className="text-3xl transition-all hover:text-themeVioletText" />
                  </button>
                </div>
                <div className="mt-4 flex w-full flex-col gap-4">
                  <Link href={'https://t.me/cryptogradportal'}>
                    <div className="flex w-full flex-row items-center justify-start gap-3 rounded-sm border border-gray-700 p-2 text-white">
                      <span className="text-3xl text-themeViolet">
                        <TbBrandTelegram />
                      </span>
                      <span>Join our Telegram Group</span>
                    </div>
                  </Link>
                  <Link
                    href={
                      'https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw'
                    }
                  >
                    <div className="flex w-full flex-row items-center justify-start gap-3 rounded-sm border border-gray-700 p-2 text-white">
                      <span className="text-3xl text-themeViolet">
                        <FaXTwitter />
                      </span>
                      <span>Follow Twitter</span>
                    </div>
                  </Link>
                  <Link href={'https://discord.com/invite/GQJTSFdTwh'}>
                    <div className="flex w-full flex-row items-center justify-start gap-3 rounded-sm border border-gray-700 p-2 text-white">
                      <span className="text-3xl text-themeViolet">
                        <FaDiscord />
                      </span>
                      <span>Join our Discord</span>
                    </div>
                  </Link>

                  {/* <div className="flex w-full flex-row items-center justify-start gap-3 rounded-sm border border-gray-700 p-2 text-white">
                    <span className="text-3xl text-themeViolet">
                      <AiOutlineMail />
                    </span>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="h-full w-full bg-transparent outline-none placeholder:text-white"
                    />
                  </div> */}
                  <Button onClick={closeModal}>Continue</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
