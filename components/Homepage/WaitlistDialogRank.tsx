'use client'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, Fragment, useState } from 'react'
import Button from '../shared/Button'
import { IoClose } from 'react-icons/io5'

interface IWaitlistDialogRank {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}

const WaitlistDialogRank = ({ isOpen, setIsOpen }: IWaitlistDialogRank) => {
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black backdrop-blur-lg bg-opacity-25" />
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
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-themeDialogBlack p-6 text-left align-middle shadow-xl transition-all">
                <Image
                  src="/Homepage/Waitlist/waitlistRank.webp"
                  width={1132}
                  height={1148}
                  alt="check-rank"
                  className="object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                >
                  <IoClose className="text-2xl transition-all hover:text-themeVioletText " />
                </button>
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-2xl font-semibold">
                      Congratulations! You have joined the beta!
                    </div>
                    <div className="text-sm font-extralight">
                      Refer your friends to the beta to earn CG tokens and
                      get a chance at win one of three valuable project NFTs!
                    </div>
                  </div>
                  <Button>Check Your Rank</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default WaitlistDialogRank
