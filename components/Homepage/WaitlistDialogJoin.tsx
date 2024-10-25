'use client'

import { Dialog, Transition } from '@headlessui/react'
import { ChangeEvent, Dispatch, FormEvent, Fragment } from 'react'
import { IoClose } from 'react-icons/io5'
import Button from '../shared/Button'

interface IWaitlistDialogJoin {
  isOpen: boolean
  loading: boolean
  setIsOpen: Dispatch<boolean>
  next: (e: FormEvent<HTMLFormElement>) => void
  info: {
    name: string
    email: string
    phone: string
    otp: string
    referral: string
  }
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const WaitlistDialogJoin = ({
  isOpen,
  loading,
  setIsOpen,
  next,
  info,
  handleChange,
}: IWaitlistDialogJoin) => {
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
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 rounded-full border-none p-2 outline-none hover:bg-themeBgBlack"
                >
                  <IoClose className="text-2xl transition-all hover:text-themeVioletText " />
                </button>
                <form autoComplete='off' onSubmit={next} className="flex flex-col gap-6">
                  <div>
                    <div className="text-xl font-bold">Join the beta!</div>
                    <div className="font-extralight">
                      And get an early access to the exciting world of crypto!
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={info.name}
                      onChange={handleChange}
                      required
                      className="col-span-2 w-full rounded-lg border-2 border-themeTextGrey bg-themeTextInputBg px-3 py-2 font-bold"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={info.email}
                      onChange={handleChange}
                      required
                      className="col-span-2 w-full rounded-lg border-2 border-themeTextGrey bg-themeTextInputBg px-3 py-2 font-bold"
                    />
                    <div className="relative col-span-2 w-full">
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        pattern="[0-9]{10}"
                        name="phone"
                        value={info.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border-2 border-themeTextGrey bg-themeTextInputBg px-3 py-2 font-bold"
                      />
                      <Button
                        disabled={info.phone.length !== 10}
                        className="absolute bottom-0 right-2 top-0 z-1 my-auto !h-8 !min-h-[2rem] !px-3 !py-1 !text-xs"
                      >
                        Send OTP
                      </Button>
                    </div>
                    <input
                      type="number"
                      placeholder="OTP"
                      pattern="[0-9]{6}"
                      name="otp"
                      value={info.otp}
                      onChange={handleChange}
                      required
                      className=" w-full rounded-lg border-2 border-themeTextGrey bg-themeTextInputBg px-3 py-2 font-bold"
                    />
                    <input
                      type="text"
                      placeholder="Referral Code"
                      name="referral"
                      value={info.referral}
                      onChange={handleChange}
                      className=" w-full rounded-lg border-2 border-themeTextGrey bg-themeTextInputBg px-3 py-2 font-bold"
                    />
                  </div>
                  <Button loading={loading} className="w-fit">
                    Join Now
                  </Button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default WaitlistDialogJoin
