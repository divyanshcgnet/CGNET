'use client'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, Fragment } from 'react'
import Button from '../shared/Button'
import { IoClose } from 'react-icons/io5'

export default function NftDroppedDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}) {
  function closeModal() {
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
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-themeDialogBlack p-6 text-left align-middle shadow-xl transition-all">
                <Image
                  src="/Navbar/nft-dropped.png"
                  width={948}
                  height={370}
                  alt="nft-dropped"
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
                    <div className="text-2xl font-semibold">NFTs Dropped!</div>
                    <div className="text-sm font-extralight">
                      And get an early access to the exciting world of crypto!
                    </div>
                  </div>
                  <Button>Claim Now</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
