'use client'

import Image from 'next/image'
import Button from '@/components/shared/Button'
import useWallet from '@/hooks/useWallet'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { registerAi } from '@/services/user'

export default function UnlockPower() {
  const {
    connectWallet,
    isLoggedIn,
    isVerified,
    loginUser,
    setAiRegistered,
    aiRegistered,
  } = useWallet()
  const { address, isConnected } = useAccount()
  const router = useRouter()

  const handleContinue = async () => {
    await registerAi()
    setAiRegistered(true)
    router.push('/CG-AI/explore')
  }

  // const handleLogin = async (address: `0x${string}`) => {
  //   await loginUser(address)
  //   await handleContinue()
  // }
  //
  // useEffect(() => {
  //   if (isConnected && address) {
  //     handleLogin(address)
  //   }
  // }, [address])

  useEffect(() => {
    // if (!isVerified) return router.push('/login')
    if (aiRegistered) return router.push('/CG-AI/explore')
    if (isConnected && !aiRegistered) handleContinue()
  }, [isConnected, isLoggedIn, isVerified])

  return (
    <div className="pageHeight relative flex h-full w-full items-center justify-center overflow-hidden mmd:h-fit">
      <Image
        src="/effects/ellipse-1.svg"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        alt=""
        width={435}
        height={640}
      />
      <div className="floating absolute -left-8 top-0 z-0 hidden mmd:block">
        <Image
          src="/Presale/nfts (1).png"
          width={800}
          height={737}
          alt=""
          className="h-36 w-fit rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div
        className="floating absolute -right-8 bottom-0 z-0 hidden mmd:block"
        data-delay={1000}
      >
        <Image
          src="/CgAi/ChatAi/510.png"
          width={1000}
          height={1000}
          alt=""
          className="h-36 w-fit rotate-[27deg] object-contain mmd:h-48"
        />
      </div>
      <div
        className="floating absolute -top-4 right-[30%] z-0 hidden h-fit w-fit blur-2xs mmd:block"
        data-delay={1000}
      >
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="h-fit w-20 -rotate-12 object-contain"
          alt=""
          width={489}
          height={492}
        />
      </div>
      <div
        className="floating absolute -bottom-4 left-[30%] z-0 hidden h-fit w-fit blur-2xs mmd:block"
        data-delay={800}
      >
        <Image
          src="/Homepage/LargeToken/largeToken.png"
          className="h-fit w-20 -rotate-12 object-contain"
          alt=""
          width={489}
          height={492}
        />
      </div>

      <div
        className="floating absolute -left-8 bottom-[40%] z-0 hidden mmd:block"
        data-delay={1000}
      >
        <Image
          src="/CgAi/ChatAi/365.png"
          width={1000}
          height={1000}
          alt=""
          className="h-20 w-fit rotate-12 object-contain blur-2xs"
        />
      </div>
      <div
        className="floating absolute -right-12 top-[10%] z-0 hidden mmd:block"
        data-delay={1000}
      >
        <Image
          src="/CgAi/ChatAi/511.png"
          width={1000}
          height={1000}
          alt=""
          className="h-32 w-fit rotate-12 object-contain blur-2xs"
        />
      </div>
      <div className="pageHeight relative z-1 flex w-full flex-col items-start gap-4 p-4 text-2xl font-bold md:w-fit md:p-8 md:text-5xl mmd:h-fit mmd:justify-center">
        Unlock the full power of CryptoGrad AI
        <p className="text-xl font-normal text-white/60">
          Something beyond human limits
        </p>
        <div className="flex h-full flex-grow flex-col gap-6 py-8 mmd:h-fit mmd:flex-grow-0">
          <div className="flex gap-1 text-sm font-bold text-white/80 md:text-xl">
            <Image
              className="h-6 w-6 md:h-8 md:w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Discover Crypto Secrets from the Pros
          </div>
          <div className="flex gap-1 text-sm font-bold text-white/80 md:text-xl">
            <Image
              className="h-6 w-6 md:h-8 md:w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Access Live Market Data
          </div>
          <div className="flex gap-1 text-sm font-bold text-white/80 md:text-xl">
            <Image
              className="h-6 w-6 md:h-8 md:w-8"
              src="/landing/tick.png"
              alt=""
              width={800}
              height={800}
            />
            Expert Curated Crypto Knowledge
          </div>
        </div>
        <div className="text-base font-bold text-white/60 mmd:mb-8 mmd:text-xl">
          Enjoy 7 Days Free, Continue at Just $129.99/Month
        </div>
        <Button
          onClick={connectWallet}
          className={`
            h-16 !w-full !justify-between  !rounded-xl !pr-4 md:!w-[30rem] md:text-xl ${
              isLoggedIn ? 'pointer-events-none' : ''
            }
          `}
        >
          {!isLoggedIn && (
            <>
              <div className="flex items-center gap-4 text-base font-semibold md:text-xl">
                Connect Wallet
              </div>
              <div className="rounded-xl bg-[#191A21] px-4 py-2 text-sm">
                Recommended
              </div>
            </>
          )}
          {isLoggedIn && (
            <>
              <div className="flex items-center gap-4 text-base font-semibold md:text-xl">
                Connected
              </div>
              <div className="flex items-center gap-4 text-base font-semibold md:text-xl">
                {address?.substring(0, 5)}...
                {address?.substring(address?.length - 4, address?.length)}
              </div>
            </>
          )}
        </Button>
        {/*{isLoggedIn && (*/}
        {/*  <Button*/}
        {/*    disabled={!address}*/}
        {/*    className="h-16 w-full !rounded-xl !text-2xl font-normal md:w-[30rem] md:font-bold"*/}
        {/*    onClick={handleContinue}*/}
        {/*  >*/}
        {/*    Confirm*/}
        {/*  </Button>*/}
        {/*)}*/}
      </div>
    </div>
  )
}
