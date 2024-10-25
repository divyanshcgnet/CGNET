'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, useState } from 'react'
import Button from '../shared/Button'
import { IoClose } from 'react-icons/io5'

export default function LearnMoreDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}) {
  const [comission, setComission] = useState(7)
  const [referrals, setReferrals] = useState(5)
  const [affiliateLevel, setAffiliateLevel] = useState(0)

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
              <Dialog.Panel className="flex flex-col items-end gap-4 bg-transparent !p-0 shadow-none mmd:!min-w-[800px]">
                <button
                  onClick={closeModal}
                  className="hidden rounded-full border-none bg-themeDialogBlack p-2 outline-none hover:bg-themeBgBlack md:flex"
                >
                  <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                </button>
                <div className="relative w-full transform overflow-hidden rounded-3xl bg-themeDialogBlack p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 block rounded-full border-none p-2 outline-none hover:bg-themeBgBlack md:hidden"
                  >
                    <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                  </button>
                  <div className="grid grid-cols-1 gap-4 mmd:grid-cols-3">
                    <div className="flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-themeViolet bg-themeBgBlack pt-4 mmd:col-span-3">
                      <div className="flex items-center gap-4 px-4 text-xl font-semibold capitalize">
                        Total <br />
                        Commission Made
                      </div>
                      <div className="flex items-center gap-4 px-4">
                        <span className="text-5xl font-bold">
                          {comission}
                          <span className="text-base font-light text-white/60">
                            {' '}
                            USDT
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center justify-center bg-gradient-to-r from-themeViolet to-themeBorderBlue py-3 text-sm font-light">
                        Refer to start your earning journey
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">
                      <div className="flex flex-col gap-2 text-xl font-semibold capitalize">
                        <div>
                          Total <br />
                          Referrals
                        </div>
                        {referrals === 0 && (
                          <span className="text-sm font-light text-white/80">
                            Refer friends to start your earning journey
                          </span>
                        )}
                      </div>
                      {referrals === 0 && (
                        <button className="w-fit text-left text-sm text-themeBorderBlue underline">
                          Invite friends
                        </button>
                      )}
                      {referrals > 0 && (
                        <div className="text-4xl font-semibold">
                          {referrals}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">
                      <div className="flex flex-col gap-2 text-xl font-semibold capitalize">
                        <div>
                          Avg. <br />
                          Commission (%)
                        </div>
                        {comission === 0 && (
                          <span className="text-sm font-light text-white/80">
                            Start your journey to 7% more!
                          </span>
                        )}
                      </div>
                      {comission === 0 && (
                        <button className="w-fit text-left text-sm text-themeBorderBlue underline">
                          Refer & earn
                        </button>
                      )}
                      {comission > 0 && (
                        <div className="text-4xl font-semibold">
                          {comission}%
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">
                      <div className="flex flex-col gap-2 text-xl font-semibold capitalize">
                        <div>
                          Your <br />
                          Affiliate Level
                        </div>
                        {affiliateLevel === 0 && (
                          <span className="text-sm font-light text-white/80">
                            Start your journey to 7% more!
                          </span>
                        )}
                      </div>
                      {affiliateLevel === 0 && (
                        <button className="w-fit text-left text-sm text-themeBorderBlue underline">
                          Refer now & unlock level 1
                        </button>
                      )}
                      {affiliateLevel > 0 && (
                        <div className="text-4xl font-semibold">
                          {affiliateLevel}
                        </div>
                      )}
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
