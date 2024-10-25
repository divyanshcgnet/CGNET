import { Dispatch, Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import Button from '@/components/shared/Button'
import { SocialIcon } from 'react-social-icons'
import copy from 'copy-to-clipboard'
import { MdOutlineDone } from 'react-icons/md'
import { useRouter, useSearchParams } from 'next/navigation'
import { FaDiscord, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

export default function WaitlistPositonDialog({
  isOpen,
  setIsOpen,
  position,
  setPosition,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  position: Number
  setPosition: Dispatch<number>
}) {
  const [isAlertVisible, setIsAlertVisible] = useState(false)
  const search = useSearchParams()
  const router = useRouter()

  const handleButtonClick = (url: string) => {
    setIsAlertVisible(true)
    copy(url)
    setTimeout(() => {
      setIsAlertVisible(false)
    }, 3000)
  }
  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    const pos = search.get('pos')
    if (pos) {
      try {
        setPosition(Number(pos))
        router.replace('/login')
      } catch (e) {
        setPosition(0)
      }
    }
  }, [])

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
              <Dialog.Panel className="relative flex w-full max-w-lg flex-col items-end gap-4 transition-all">
                <button
                  onClick={closeModal}
                  className="group rounded-full border-none bg-themeBgBlack p-2 outline-none"
                >
                  <IoClose className="text-2xl transition-all group-hover:text-themeVioletText" />
                </button>
                <div className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl bg-themeDialogBlack px-4 py-8 md:w-[500px]">
                  <div className="flex flex-col items-center justify-center text-center text-3xl font-semibold capitalize">
                    Your position <br />
                    in the waitlist
                  </div>
                  <div className="text-7xl font-bold text-themeBorderBlue">
                    #{String(position)}
                  </div>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-xl border-2 border-white/10 px-6 py-2"
                    >
                      <FaTwitter className={"text-3xl text-[#1DA1F2]"} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cryptograd"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-xl border-2 border-white/10 px-6 py-2"
                    >
                      <FaLinkedinIn className={"text-3xl text-[#0072B1]"} />
                    </a>
                    <a
                      href="https://discord.gg/GQJTSFdTwh"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-xl border-2 border-white/10 px-6 py-2"
                    >
                      <FaDiscord className={"text-3xl text-[#5865f2]"} />
                    </a>
                    <a
                      href="https://www.instagram.com/cryptograd.ai/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-xl border-2 border-white/10 px-6 py-2"
                    >
                      <FaInstagram className={"text-3xl text-[#C13584]"} />
                    </a>
                  </div>
                  <div className="flex h-14 w-full items-center justify-between gap-2 truncate rounded border-2 border-white/10 px-2 text-left text-white/60 md:gap-4 md:px-3">
                    {window.location.origin}/login?pos={String(position)}
                  </div>
                  <Button
                    disabled={isAlertVisible}
                    onClick={() =>
                      handleButtonClick(
                        `${window.location.origin}/login?pos=${position}`
                      )
                    }
                    className="!h-12 w-full !px-4"
                  >
                    {isAlertVisible ? (
                      <>
                        Copied <MdOutlineDone />
                      </>
                    ) : (
                      'Copy Link'
                    )}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
