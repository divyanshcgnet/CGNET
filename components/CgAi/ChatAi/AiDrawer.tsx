'use client'

import Brand from '@/components/Navbar/Brand'
import ConnectWallet from '@/components/Navbar/ConnectWallet'
import { aiSidebarItems } from '@/types/sidebar'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import ChatSidebarItems from '../Sidebars/ChatSidebarItems'
import HistorySidebarItems from '../Sidebars/HistorySidebarItems'

const AiDrawer = () => {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="transition-all hover:text-themeVioletText mmd:hidden"
      >
        <HiOutlineMenu className="text-3xl" />
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog onClose={handleClose} className="relative z-50">
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
              <Dialog.Panel
                className={`flex h-screen w-[280px] flex-col gap-8 overflow-y-auto bg-gradient-to-br from-themeNavBlack to-themeBgBlack ${
                  path.includes('/CG-AI/chat') ? 'p-0 py-8' : 'p-8'
                }`}
              >
                <Dialog.Title
                  className={`flex items-center justify-between gap-8 ${
                    path.includes('/CG-AI/chat') ? 'px-8' : ''
                  }`}
                >
                  <Brand />
                  <button
                    onClick={handleClose}
                    className="border-none outline-none"
                  >
                    <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                  </button>
                </Dialog.Title>
                <Dialog.Description className="flex h-full flex-col justify-between gap-8">
                  <div className="flex flex-col gap-5">
                    {!path.includes('/CG-AI/chat') &&
                      aiSidebarItems.map((item, i) => (
                        <div className="w-full" key={i}>
                          {item.seprator && (
                            <div className="mb-8 w-full border-t-2 border-white/20"></div>
                          )}
                          <Link
                            href={item.path}
                            onClick={handleClose}
                            className={`relative flex items-center gap-4 pl-6 text-xl after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:rounded ${
                              path.includes(item.path)
                                ? 'after:bg-themeViolet'
                                : 'after:bg-white/5'
                            }`}
                          >
                            {item.icon()}
                            {item.title}
                          </Link>
                        </div>
                      ))}

                    {path.includes('/CG-AI/chat') &&
                      !path.includes('/CG-AI/chat/history') && (
                        <div className="flex flex-col">
                          <ChatSidebarItems handleClose={handleClose} />
                        </div>
                      )}

                    {path.includes('/CG-AI/chat/history') && (
                      <HistorySidebarItems handleClose={handleClose} />
                    )}
                  </div>
                  <div className={path.includes('/CG-AI/chat') ? 'px-8' : ''}>
                    <ConnectWallet drawer pathname={path} />
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AiDrawer
