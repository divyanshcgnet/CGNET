'use client'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, Fragment, useState } from 'react'
import Button from '../shared/Button'
import { IoClose } from 'react-icons/io5'

const ConnectWalletDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}) => {
  const [error, setError] = useState(false)
  const [errWallet, setErrWallet] = useState('metamask')

  const handleWallet = (wallet: string) => {
    setErrWallet(wallet)
    setError(true)
  }

  function closeModal() {
    setIsOpen(false)
    setError(false)
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
                {!error && (
                  <>
                    <button
                      onClick={closeModal}
                      className="absolute right-4 top-4 rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                    >
                      <IoClose className="text-2xl transition-all hover:text-themeVioletText" />
                    </button>
                    <div className="text-2xl font-semibold">Connect Wallet</div>
                    <div className="mt-6 flex flex-col gap-4">
                      <button
                        onClick={() => handleWallet('metamask')}
                        className="flex items-center gap-4 rounded-lg border border-themeTextGrey/40 px-4 py-2 font-extralight"
                      >
                        <Image
                          src="/Navbar/metamask.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                        Metamask
                      </button>
                      <button
                        onClick={() => handleWallet('trust')}
                        className="flex items-center gap-4 rounded-lg border border-themeTextGrey/40 px-4 py-2 font-extralight"
                      >
                        <Image
                          src="/Navbar/trust.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                        Trust Wallet
                      </button>
                      <button
                        onClick={() => handleWallet('metamask')}
                        className="flex items-center gap-4 rounded-lg border border-themeTextGrey/40 px-4 py-2 font-extralight"
                      >
                        <Image
                          src="/Navbar/metamask.png"
                          width={40}
                          height={40}
                          alt=""
                        />
                        Metamask
                      </button>
                    </div>
                  </>
                )}
                {error && (
                  <>
                    <div className="text-center text-2xl font-semibold capitalize">
                      {errWallet} Wallet Not Detected
                    </div>
                    <div className="relative mx-auto my-8 w-fit">
                      {errWallet === 'metamask' && (
                        <Image
                          src="/Navbar/metamask.svg"
                          width={100}
                          height={100}
                          alt=""
                        />
                      )}
                      {errWallet === 'trust' && (
                        <Image
                          src="/Navbar/trust.svg"
                          width={100}
                          height={100}
                          alt=""
                        />
                      )}
                      <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border border-themeRed bg-themeRed/30">
                        !
                      </span>
                    </div>
                    {errWallet === 'metamask' && (
                      <Button
                        onClick={() => setError(false)}
                        className="!h-12 w-full"
                      >
                        Connect to Trust Wallet
                      </Button>
                    )}
                    {errWallet === 'trust' && (
                      <Button
                        onClick={() => setError(false)}
                        className="!h-12 w-full"
                      >
                        Connect to Metamask
                      </Button>
                    )}
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ConnectWalletDialog
