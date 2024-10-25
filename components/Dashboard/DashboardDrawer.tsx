'use client'

import { sidebarItems } from '@/types/sidebar'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Fragment, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Brand from '../Navbar/Brand'
import ConnectWallet from '../Navbar/ConnectWallet'

const DashboardDrawer = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const params = useSearchParams()
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
              <Dialog.Panel className="flex h-screen w-[280px] flex-col gap-8 overflow-y-auto bg-gradient-to-br from-themeNavBlack to-themeBgBlack p-8">
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
                  <div className="flex flex-col gap-5">
                    {sidebarItems.map((item, i) => (
                      <Link
                        key={item.path + i}
                        href={`/dashboard?tab=${item.path}`}
                        onClick={() => setOpen && setOpen(false)}
                        className={`relative flex items-center gap-4`}
                      >
                        {item.icon()}
                        {item.title}
                      </Link>
                    ))}
                  </div>
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

export default DashboardDrawer
