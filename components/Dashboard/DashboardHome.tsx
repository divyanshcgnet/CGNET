'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MdOutlineInfo } from 'react-icons/md'
import Button from '../shared/Button'
import { LuPen } from 'react-icons/lu'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { makeMeTwoDigits, trimString } from '@/utils/numberFix'
import { FaRegCopy } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {
  cgBougth,
  endSaleTime,
  getAmountRaised,
  getETHPrice,
  getTokenPrice,
} from '@/services/web3Helper'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import Toast from '../shared/Toast'
import copy from 'copy-to-clipboard'
import Link from 'next/link'

export default function DashboardHome() {
  const [balance, setBalance] = useState(0)
  const [raised, setRaised] = useState(10000)
  const [saleValue, setSaleValue] = useState(0.0011)
  const [usdEth, setUsdEth] = useState(0.0032)
  const [referralId, setReferralId] = useState('')
  const [timer, setTimer] = useState(1704649455000)
  const { address } = useAccount()
  const [referrer, setReferrer] = useState<any>()
  const [walletType, setWalletType] = useState('')
  const router = useRouter()
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const initialze = () => {
    const referralId = localStorage.getItem('referralId')
    referralId && setReferralId(referralId)
    const referrer = localStorage.getItem('referrer')
    if (referrer !== 'undefined') referrer && setReferrer(JSON.parse(referrer))
    const wallet = localStorage.getItem('wagmi.wallet')
    if (wallet === 'walletConnect') setWalletType('Mobile Wallet')
    else setWalletType('Browser Wallet')
  }

  const fetchTotalTokenBought = async () => {
    const tokenAmount = await cgBougth(address)
    setBalance(Number(tokenAmount))
  }

  const getEndTimeStamp = async () => {
    const endTime = await endSaleTime()
    setTimer(endTime * 1000)
  }

  const getAmountRaisedAndTotal = async () => {
    const amountRaised = await getAmountRaised()
    setRaised(Number(Number(amountRaised).toFixed(4)))
  }

  const getCGTokenPrice = async () => {
    const tokenPrice = await getTokenPrice()
    setSaleValue(Number(tokenPrice.toFixed(4)))
  }

  const handleCopy = () => {
    setIsAlertVisible(true)
    // navigator.clipboard.writeText(
    //   `${window.location.origin}/?ref=${referralId}`
    // );
    copy(`${window.location.origin}/login?ref=${referralId}`)
    setTimeout(() => {
      setIsAlertVisible(false)
    }, 3000)
  }

  const getETHUSDPrice = async () => {
    const tokenPrice = await getETHPrice()
    setUsdEth(Number((1 / tokenPrice[0]).toFixed(4)))
  }

  useEffect(() => {
    getAmountRaisedAndTotal()
    getEndTimeStamp()
    getCGTokenPrice()
    getETHUSDPrice()
  }, [])

  useEffect(() => {
    initialze()
    fetchTotalTokenBought()
  }, [address])

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <>Presale Coming soon!</>
    return (
      <div className="relative z-1 flex items-start gap-2 font-bold md:gap-4">
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-xl bg-themeBlack px-3 py-2 md:w-[4.25rem] md:py-4">
          <span className="text-xl leading-7 md:text-4xl">
            {makeMeTwoDigits(days)}
          </span>
          <span className="text-xs font-light">Days</span>
        </div>
        <span className="mt-2 text-xl md:text-4xl">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-xl bg-themeBlack px-3 py-2 md:w-[4.25rem] md:py-4">
          <span className="text-xl leading-7 md:text-4xl">
            {makeMeTwoDigits(hours)}
          </span>
          <span className="text-xs font-light">Hours</span>
        </div>
        <span className="mt-2 text-xl md:text-4xl">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-xl bg-themeBlack px-3 py-2 md:w-[4.25rem] md:py-4">
          <span className="text-xl leading-7 md:text-4xl">
            {makeMeTwoDigits(minutes)}
          </span>
          <span className="text-xs font-light">Mins</span>
        </div>
        <span className="mt-2 text-xl md:text-4xl">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-xl bg-themeBlack px-3 py-2 md:w-[4.25rem] md:py-4">
          <span className="text-xl leading-7 md:text-4xl">
            {makeMeTwoDigits(seconds)}
          </span>
          <span className="text-xs font-light">Secs</span>
        </div>
      </div>
    )
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
      <div className="mb-6 text-3xl font-bold md:col-span-3 md:text-5xl">
        Welcome, CryptoDozer!
      </div>
      <div className="row-start-2 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:row-start-2">
        <div className="flex gap-2">
          <Image
            src="/Homepage/LargeToken/largeToken.png"
            alt=""
            width={489}
            height={492}
            className="h-12 w-fit object-contain"
          />
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">Token Balance</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold mmd:text-4xl">
                {balance} CG
              </span>
              <MdOutlineInfo className="text-2xl !text-white/60" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Your contribution in</span>
          <span className="text-2xl font-bold">
            ${(balance * saleValue).toFixed(4)}{' '}
            <span className="text-base text-white/80">USD</span>
          </span>
        </div>
      </div>
      <div className="row-start-3 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:row-start-2">
        <div className="flex items-center gap-4 text-xl font-semibold">
          Private Sale
          <div className="rounded-full border border-[#41CB69] bg-black px-2 py-1 text-sm font-light">
            Running
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-medium">1 CG = {saleValue} USD</div>
          <span className="text-base text-white/80">1 USD = {usdEth} ETH</span>
        </div>
        <Button onClick={() => router.push('/presale')} className="h-12 w-fit">
          Buy Token
        </Button>
      </div>
      <div className="row-start-6 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:row-start-2">
        <div className="flex flex-col gap-2 text-xl font-semibold">
          Account Info
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={`${process.env.NEXT_PUBLIC_EXPLORER}address/${address}`}
            className="text-sm font-light text-white/80 hover:text-themeBlue"
          >
            Invited by{' '}
            {referrer?.walletAddress
              ? trimString(referrer?.walletAddress as any)
              : 'No Referrer'}
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-4 text-base font-light">
            Receiving Wallet <LuPen className="text-sm" />
          </span>
          <div className="text-2xl font-medium">
            {walletType}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`${process.env.NEXT_PUBLIC_EXPLORER}address/${address}`}
              className="text-base font-light text-white/80 hover:text-themeBlue"
            >
              {' '}
              {address ? trimString(address as any) : ''}
            </a>
          </div>
        </div>
      </div>
      <div className="row-start-4 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:col-span-2 md:row-start-3">
        <div className="flex items-center gap-4 text-xl font-semibold">
          Token Sales Progress
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-light text-white/80 md:text-base">
                Raised Amount
              </span>
              <span className="md:text-lg">
                {raised.toLocaleString('en-US')} CG
              </span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-sm font-light text-white/80 md:text-base">
                Total Amount
              </span>
              <span className="md:text-lg">
                {(100000000).toLocaleString('en-US')} CG
              </span>
            </div>
          </div>
          <div className="relative z-0 flex h-6 items-center justify-center overflow-hidden rounded-full bg-black">
            <div
              style={{
                width: `${(raised * 100) / 100000000}%`,
              }}
              className="absolute left-0 h-full bg-gradient-to-tr from-themeViolet to-themeBlue"
            ></div>
            <div className="text-xs font-light">
              {((raised * 100) / 100000000).toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="font-light text-white/80">Presale starts in:</div>
          <Countdown date={1706725800000} renderer={renderer} />
        </div>
      </div>
      <div className="row-start-5 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:row-start-3">
        <div className="flex flex-col gap-2 text-xl font-semibold capitalize">
          Refer and Earn upto
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold">7%</span>{' '}
            <span className="mb-0.5 text-sm font-light text-white/60">
              Commission
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex h-12 w-full items-center justify-between rounded-lg bg-[#070B16] px-4">
            {referralId}
            <button
              onClick={handleCopy}
              disabled={referralId ? false : true}
              className="flex items-center gap-2 text-sm font-light text-white/60"
            >
              {isAlertVisible ? 'Copied' : 'Copy'} <FaRegCopy />
            </button>
          </div>
          <Toast
            refId={referralId}
            disabled={referralId ? false : true}
            className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
          >
            Invite a Friend
          </Toast>
          <span className="text-xs font-light text-white/60">or</span>
          <button
            onClick={() => router.push('/referral')}
            className="flex items-center gap-2 text-left text-themeBorderBlue"
          >
            Estimate Referral Earnings <GoArrowRight />
          </button>
        </div>
        <Link
          href="/help/terms-and-conditions"
          className="text-right font-light text-themeTextGrey"
        >
          T&C apply<sup>*</sup>
        </Link>
      </div>
      <div className="row-start-7 flex flex-col justify-between gap-8 rounded-3xl bg-themeBgBlack p-4 md:col-span-3 md:row-start-4">
        <div className="flex text-xl font-semibold capitalize">
          Join the Community
        </div>
        <div className="overflow-x-scroll md:overflow-auto">
          <div className="relative z-1 grid w-full min-w-[800px] grid-cols-3 gap-4 md:min-w-0">
            <a
              href="https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">Twitter</div>
                <div className="text-sm font-light">General Announcements</div>
              </div>
              <FaXTwitter className="!text-4xl !text-white md:!text-7xl" />
            </a>
            <a
              href="https://t.me/cryptogradportal"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">
                  Telegram
                </div>
                <div className="text-sm font-light">Live Chat</div>
              </div>
              <FaTelegramPlane className="!text-4xl !text-[#229ED9] md:!text-7xl" />
            </a>
            <a
              href="https://discord.gg/GQJTSFdTwh"
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-56 w-full flex-col justify-between rounded-2xl bg-themeWebBg p-8 md:h-64"
            >
              <div className="flex flex-col items-start text-left">
                <div className="text-xl font-semibold md:text-3xl">Discord</div>
                <div className="text-sm font-light">
                  Access AI bots, Trading Signals, Whale <br /> Rooms,
                  Community, and much more...
                </div>
              </div>
              <FaDiscord className="!text-4xl !text-[#5865F2] md:!text-7xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
