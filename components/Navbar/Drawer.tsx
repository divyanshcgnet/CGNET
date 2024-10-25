'use client'

import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Brand from './Brand'
import NavMenu from './NavMenu'
import ConnectWallet from './ConnectWallet'
import { usePathname } from 'next/navigation'

const Drawer = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="transition-all hover:text-themeVioletText mmd:hidden"
      >
        <HiOutlineMenu className="text-3xl" />
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-start justify-start">
            <Transition.Child
              enter="transition duration-100 ease-out"
              enterFrom="transform translate-x-[-280px] opacity-0"
              enterTo="transform translate-x-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform translate-x-0 opacity-100"
              leaveTo="transform translate-x-[-280px] opacity-0"
              as={Fragment}
            >
              <Dialog.Panel className="flex h-screen w-[280px] flex-col gap-8 overflow-y-auto bg-gradient-to-br from-themeNavBlack to-themeBgBlack p-8 sm:pb-0 pb-32">
                <Dialog.Title className="flex items-center justify-between gap-8">
                  <Brand />
                  <button
                    onClick={() => setOpen(false)}
                    className="border-none outline-none"
                  >
                    <IoClose className="text-2xl transition-all hover:text-themeVioletText " />
                  </button>
                </Dialog.Title>
                <Dialog.Description className="flex h-full flex-col justify-between gap-8">
                  <NavMenu drawer pathname={pathname} setOpen={setOpen} />
                  <ConnectWallet drawer pathname={pathname} />
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
