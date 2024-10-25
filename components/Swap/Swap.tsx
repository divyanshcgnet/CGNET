'use client'
import Button from '@/components/shared/Button'
import useWallet from '@/hooks/useWallet'
import { currencies } from '@/utils/currencies'
import { Dialog, Listbox, Switch, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { IoArrowDown, IoClose, IoSettingsOutline } from 'react-icons/io5'
import { useAccount } from 'wagmi'

export default function Swap({ className }: { className?: string }) {
  const [topInput, setTopInput] = useState<number | undefined>()
  const [bottomInput, setBottomInput] = useState<number | undefined>()
  const [selected, setSelected] = useState(currencies[0])
  const [isOpen, setIsOpen] = useState(false)
  const [selected1, setSelected1] = useState(currencies[1])
  const [loading, setLoading] = useState(false)
  const { isConnected } = useAccount()
  const [slippage, setSlippage] = useState<number | undefined>()
  const [timeout, setTimeout] = useState<number | undefined>()
  const { connectWallet } = useWallet()
  const [info, setInfo] = useState(false)
  const [enabled, setEnabled] = useState(false)

  const handleSwap = () => {
    return
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleExpertMode = (state: boolean) => {
    if (state) return setInfo(true)
    setEnabled(false)
  }

  const activateExpertMode = () => {
    setInfo(false)
    setEnabled(true)
  }

  return (
    <>
      <div
        className={`flex w-full flex-col gap-4 rounded-xl bg-themeBlackBg p-4 md:w-[500px] md:rounded-3xl md:p-6 ${className}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Swap</span>
          <button
            onClick={() => setIsOpen(true)}
            className="!text-xl text-themeBorderBlue"
          >
            <IoSettingsOutline />
          </button>
        </div>
        <div className="relative mb-2 flex flex-col gap-3">
          <div className="flex items-center justify-between rounded-xl bg-themeWebBg py-2 pl-3 pr-2 md:py-4 md:pl-6 md:pr-4">
            <input
              type="number"
              placeholder="0.00"
              className="w-full border-none bg-inherit text-2xl font-bold focus:outline-none"
              value={topInput}
              onChange={(e) =>
                setTopInput(
                  !e.target.value ? undefined : Number(e.target.value)
                )
              }
            />
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="relative z-0 flex w-[100px] min-w-fit items-center gap-2 rounded-md bg-themeBlackBg px-3 py-2 pl-2 font-semibold">
                  <Image
                    src={selected.icon}
                    alt=""
                    width={2000}
                    height={2000}
                    className="h-6 w-6"
                  />
                  <span className="block truncate">{selected.name}</span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlackBg py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {currencies.map((person, personIdx) => (
                      <Listbox.Option
                        disabled={person.address === selected1.address}
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none px-2 py-2 font-medium ${
                            active ? 'bg-themeBorderBlue' : ''
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <span
                            className={`flex items-center gap-2 truncate ${
                              selected ? 'font-semibold' : ''
                            }`}
                          >
                            <Image
                              src={person.icon}
                              alt=""
                              width={2000}
                              height={2000}
                              className="h-6 w-6"
                            />
                            {person.name}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-10 w-9 items-center justify-center rounded border-2 border-themeBlackBg bg-themeWebBg text-themeBorderBlue ">
            <IoArrowDown className="!text-2xl" />
          </div>
          <div className="flex items-center justify-between rounded-xl bg-themeWebBg py-2 pl-3 pr-2 md:py-4 md:pl-6 md:pr-4">
            <input
              type="number"
              placeholder="0.00"
              className="w-full border-none bg-inherit text-2xl font-bold focus:outline-none"
              value={bottomInput}
              onChange={(e) =>
                setBottomInput(
                  !e.target.value ? undefined : Number(e.target.value)
                )
              }
            />
            <Listbox value={selected1} onChange={setSelected1}>
              <div className="relative">
                <Listbox.Button className="relative z-0 flex w-[100px] min-w-fit items-center gap-2 rounded-md bg-themeBlackBg px-3 py-2 pl-2 font-semibold">
                  <Image
                    src={selected1.icon}
                    alt=""
                    width={2000}
                    height={2000}
                    className="h-6 w-6"
                  />
                  <span className="block truncate">{selected1.name}</span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlackBg py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {currencies.map((person, personIdx) => (
                      <Listbox.Option
                        disabled={person.address === selected.address}
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none px-2 py-2 font-medium ${
                            active ? 'bg-themeBorderBlue' : ''
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <span
                            className={`flex items-center gap-2 truncate ${
                              selected ? 'font-semibold' : ''
                            }`}
                          >
                            <Image
                              src={person.icon}
                              alt=""
                              width={2000}
                              height={2000}
                              className="h-6 w-6"
                            />
                            {person.name}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
        {isConnected ? (
          <Button loading={loading} onClick={handleSwap} className="h-12">
            Swap
          </Button>
        ) : (
          <Button loading={loading} onClick={connectWallet} className="h-12">
            Connect Wallet
          </Button>
        )}
      </div>
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
                <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-themeBlackBg p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col gap-6">
                    <div className="flex w-full items-center justify-between text-2xl">
                      {info ? 'Expert Mode' : 'Transaction Settings'}
                      {info ? (
                        <button
                          onClick={() => setInfo(false)}
                          className="border-none outline-none"
                        >
                          <IoClose className="text-2xl transition-all hover:text-themeVioletText " />
                        </button>
                      ) : (
                        <button
                          onClick={closeModal}
                          className="border-none outline-none"
                        >
                          <IoClose className="text-2xl transition-all hover:text-themeVioletText " />
                        </button>
                      )}
                    </div>
                    {info ? (
                      <>
                        <p>
                          Expert mode turns off the confirm transaction prompt
                          and allows high slippage trades that often result in
                          bad rates and lost funds.
                        </p>
                        <p>
                          ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.
                        </p>
                        <Button className="h-12" onClick={activateExpertMode}>
                          Turn On Expert Mode
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col gap-2">
                          <div className="font-light">Slippage tolerance</div>
                          <div className="flex gap-4">
                            <Button className="h-12 w-48">Auto</Button>
                            <input
                              type="number"
                              value={slippage}
                              placeholder="0.10.%"
                              className="flex h-12 w-full items-center rounded-lg border-2 border-themeTextGrey bg-inherit px-2 text-right font-semibold focus:outline-none"
                              onChange={(e) =>
                                setSlippage(
                                  !e.target.value
                                    ? undefined
                                    : Number(e.target.value)
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="font-light">
                            Transaction dedadline
                          </div>
                          <input
                            type="number"
                            value={timeout}
                            placeholder="30 minutes"
                            className="flex h-12 w-full items-center rounded-lg border-2 border-themeTextGrey bg-inherit px-2 text-right font-semibold focus:outline-none"
                            onChange={(e) =>
                              setTimeout(
                                !e.target.value
                                  ? undefined
                                  : Number(e.target.value)
                              )
                            }
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          Expert Mode
                          <Switch
                            checked={enabled}
                            onChange={handleExpertMode}
                            className={`relative inline-flex h-[24px] w-[46px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-themeBlackDeep transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                          >
                            <span
                              aria-hidden="true"
                              className={`${
                                enabled ? 'translate-x-6' : 'translate-x-1'
                              }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-themeBlackBg shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                          </Switch>
                        </div>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
