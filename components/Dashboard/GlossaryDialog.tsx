'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment } from 'react'
import Button from '../shared/Button'
import { IoClose } from 'react-icons/io5'

export default function GlossaryDialog({
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
              <Dialog.Panel className="flex flex-col items-end gap-4 bg-transparent !p-0 shadow-none">
                <button
                  onClick={closeModal}
                  className="hidden rounded-full border-none bg-themeDialogBlack p-2 outline-none hover:bg-themeBgBlack md:flex"
                >
                  <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                </button>
                <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-themeDialogBlack p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 block rounded-full border-none p-2 outline-none hover:bg-themeBgBlack md:hidden"
                  >
                    <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                  </button>
                  <div className="flex flex-col gap-4">
                    <div className="text-3xl font-bold">Glossary</div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xl font-semibold">
                        Total Invites Sent
                      </div>
                      <div className="font-light">
                        Number of invitations dispatched to recipients. Tracks
                        outreach activity for events or initiatives.
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xl font-semibold">
                        Average Commission %
                      </div>
                      <div className="font-light">
                        The average percentage of commission earned by referring
                        users.
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xl font-semibold">
                        Your Affiliate Level
                      </div>
                      <div className="font-light">
                        Indicates the tier achieved in the affiliate program,
                        tied to staking volume. Higher levels will offer
                        increased average referral % commission
                      </div>
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
