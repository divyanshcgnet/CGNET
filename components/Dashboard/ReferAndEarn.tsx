'use client'

import { MdOutlineInfo } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import Image from 'next/image'
import Button from '../shared/Button'
import { ButtonType } from '@/types/buttton'
import { Pagination } from '@mui/material'
import Link from 'next/link'
import GlossaryDialog from './GlossaryDialog'
import LearnMoreDialog from './LearnMoreDialog'
import { claimToken, referalIncome, rewards } from '@/services/web3Helper'
import { useAccount } from 'wagmi'
import { userCommission } from '@/services/comission'
import { getUserDetails, getUserRank, getUserReferrals } from '@/services/user'
import { toOrdinal } from 'number-to-words'
import Toast from '../shared/Toast'
import { currencies, getName } from '@/utils/currencies'
import ResponseDialog, { DialogType } from '../shared/ResponseDialog'
import useWallet from '@/hooks/useWallet'
import { usePrivy } from '@privy-io/react-auth'
import moment from 'moment-timezone'


export default function ReferAndEarn() {
  const { address } = useAccount()
  const [comission, setComission] = useState(0)
  const [reward, setReward] = useState(0)
  const [totalData, setTotalData] = useState(5000)
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(1)
  const [glossary, setGlossary] = useState(false)
  const [learnMore, setLearnMore] = useState(false)
  const [referralId, setReferralId] = useState<string | null>()
  const [dialog, setDialog] = useState(false)
  const [dialogType, setDialogType] = useState(DialogType.SUCCESS)
  const [message, setMessage] = useState('')
  const [referrals, setReferrals] = useState(0)
  const [reportData, setReportData] = useState<
    [
      {
        transactionHash: string
        createdAt: string
        depositWallet: string
        token: string
        comissionAmount: number
        baseAmount: number
        level: number
        comissionedFrom: any
        isClaimed: boolean
      },
    ]
  >()
  const [rank, setRank] = useState<string>()
  const [referralsList, setReferralsList] = useState<
    {
      _id: string
      walletAddress: `0x${string}`
      twitter: {
        username: string
      }
      telegramUsername: string
      createdAt: string
    }[]
  >([])
  const { isLoggedIn } = useWallet()

  const getReferralIncome = async () => {
    const referralIncome = await referalIncome(address)
    setComission(Number(referralIncome.toFixed(4)))
  }

  const { authenticated } = usePrivy()

  const getUser = async () => {
    const user = await getUserDetails()
    setReferrals(user.referrals.length ? user.referrals.length : 0)
    setReferralId(user.referralId)
    console.log(user)
  }

  const getReferrals = async () => {
    const info = await getUserReferrals()
    setReferralsList(info)
    console.log({ info })
  }

  const getUserComission = async () => {
    const comission: any = await userCommission(current)
    console.log(comission.receivingUserComission)
    setReportData(comission.receivingUserComission)
    setTotalData(comission.total)
    setTotalPages(comission.total / 10)
  }

  const getRewards = async () => {
    let reward: any = await rewards(currencies[0].address, address)
    reward += await rewards(currencies[1].address, address)
    reward += await rewards(currencies[2].address, address)
    setReward(reward)
  }

  const claimUserToken = async () => {
    setLoading(true)
    try {
      await claimToken(address)
      setLoading(false)
      setDialog(true)
      setDialogType(DialogType.SUCCESS)
    } catch (error) {
      setLoading(false)
      setDialog(true)
      setDialogType(DialogType.FAILED)
      setMessage('')
    }
  }

  const userRank = async () => {
    const rank = await getUserRank()
    setRank(toOrdinal(rank.rank))
  }

  useEffect(() => {
    userRank()
  }, [address])

  useEffect(() => {
    getUserComission()
  }, [current])

  useEffect(() => {
    getReferralIncome()
    getRewards()
    getUser()
    getReferrals()

  }, [address])


  return (
    <>
      <div className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
        <Image
          src="/Referral/ellipse-right.svg"
          alt=""
          width={526}
          height={526}
          className="absolute -right-4 -top-[20%] z-0 hidden w-full blur-2xs md:-right-8 md:block"
        />
        <Image
          src="/effects/ellipse-1.svg"
          className="absolute -left-4 top-0 z-0 hidden h-full w-full object-cover opacity-30 md:-left-8 md:block"
          alt=""
          width={435}
          height={640}
        />
        <Image
          src="/effects/hero-eff-1.svg"
          className="absolute -top-[500px] z-0 hidden opacity-80 md:block"
          alt=""
          width={870}
          height={609}
        />
        <div className="relative z-1 flex w-full flex-col gap-2 rounded-3xl bg-themeBgBlack p-4 text-sm md:col-span-3 md:w-fit md:flex-row md:items-center md:gap-4 md:rounded-full md:p-1 md:pl-4">
          <div>Refer a friend and earn upto 5 CG Points</div>
          <Toast
            refId={referralId!}
            disabled={authenticated ? false : true}
            className="flex w-fit items-center gap-2 rounded-full bg-themeBlackDeep px-4 py-2 text-white/50 md:py-1"
          >
            Copy Affiliate Link <FaRegCopy />
          </Toast>
        </div>
        <div className="relative z-1 flex flex-col gap-4 md:col-span-3">
          <div className="text-3xl font-bold capitalize md:text-5xl">
            Referral Dashboard
          </div>
          {/* <div className="text-white/80">
            All facilitated by a single game-changing platform. Experience the
            revolution of blockchain in an unparalleled way.
          </div> */}
          {/*<div className="flex gap-2 text-xs text-white/40">*/}
          {/*  *Based on your level, view{' '}*/}
          {/*  <Link href="/help/terms-and-conditions" className="underline">*/}
          {/*    T&Cs for more details.*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
        <div className="relative z-1 flex flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-themeViolet bg-themeBgBlack pt-4">
          <div className="flex items-center gap-4 px-4 text-lg font-medium capitalize">
            Total <br />
            Commission Made
          </div>
          <div className="flex items-center gap-4 px-4">
            <span className="text-3xl font-semibold">
              {/*{comission}*/}
              {referrals * 10 + 5}
              <span className="text-base font-light text-white/60"> CG Points</span>
            </span>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-r from-themeViolet to-themeBorderBlue py-3 text-sm font-light">
            {/* Refer To Earn More! */}
            Claim
          </div>
        </div>
        {/*<div className="relative z-1 flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">*/}
        {/*  <div className="flex flex-col gap-2 text-lg font-medium capitalize">*/}
        {/*    <div>*/}
        {/*      Your <br />*/}
        {/*      Affiliate Level*/}
        {/*    </div>*/}
        {/*    <span className="text-sm font-light text-white/80">*/}
        {/*      Start your journey to 7% more!*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*  <button className="w-fit text-left text-sm text-themeBorderBlue underline">*/}
        {/*    Refer now & unlock level 1*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/*<div className="relative z-1 flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-themeBgBlack p-4 pt-4">*/}
        {/*  <div className="flex flex-col gap-2 text-lg font-medium capitalize">*/}
        {/*    <div>*/}
        {/*      Want Learn more & <br />*/}
        {/*      dive deeper?*/}
        {/*    </div>*/}
        {/*    <span className="text-sm font-light text-white/80">*/}
        {/*      View your referral stats.*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*  <button*/}
        {/*    onClick={() => setLearnMore(true)}*/}
        {/*    className="w-fit text-left text-sm text-themeBorderBlue underline"*/}
        {/*  >*/}
        {/*    Know More*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/*<button*/}
        {/*  onClick={() => setGlossary(true)}*/}
        {/*  className="relative z-1 flex items-center gap-2 text-xs font-light md:col-span-3 md:justify-end"*/}
        {/*>*/}
        {/*  <MdOutlineInfo className="text-xl" />*/}
        {/*  Confused?*/}
        {/*  <button className="text-themeBorderBlue underline">*/}
        {/*    View Glossary*/}
        {/*  </button>*/}
        {/*</button>*/}
        {/*<div className="relative z-1 flex flex-col justify-between gap-4 rounded-3xl bg-themeBgBlack p-4 pr-6 md:col-span-3 md:flex-row md:items-center">*/}
        {/*  <div className="flex flex-col gap-4 md:flex-row md:items-center">*/}
        {/*    <Image*/}
        {/*      src="/Mint/crown.png"*/}
        {/*      width={169}*/}
        {/*      height={154}*/}
        {/*      alt=""*/}
        {/*      className="h-full w-fit object-contain"*/}
        {/*    />*/}
        {/*    <div className="flex flex-col text-xl font-semibold capitalize">*/}
        {/*      <div className="text-white/60">Your Referral Rank</div>*/}
        {/*      <span className="text-4xl font-bold">{rank}</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <Link*/}
        {/*    href="/dashboard?tab=leaderboards"*/}
        {/*    className="flex h-12 min-h-[2.5rem] w-fit items-center justify-center gap-2 rounded-lg border-2 border-themeBorderBlue bg-themeBlack px-4 text-lg font-medium transition-all hover:text-themeVioletText md:px-6"*/}
        {/*  >*/}
        {/*    View Leaderboard*/}
        {/*  </Link>*/}
        {/*</div>*/}
        <div className="relative z-1 mt-4 flex items-center justify-between text-3xl font-bold md:col-span-3">
          Referrals
          {/*{reportData && reportData?.length > 0 ? (*/}
          {/*  <Button*/}
          {/*    onClick={claimUserToken}*/}
          {/*    loading={loading}*/}
          {/*    type={ButtonType.SECONDARY}*/}
          {/*    // disabled={reward === 0 ? false : true}*/}
          {/*    className="text-sm font-light"*/}
          {/*  >*/}
          {/*    Claim*/}
          {/*  </Button>*/}
          {/*) : (*/}
          {/*  <span>0</span>*/}
          {/*)}*/}
        </div>
        <div className="relative z-1 flex flex-col overflow-x-scroll md:col-span-3 md:overflow-auto">
          <div className="grid min-w-[900px] grid-cols-4 gap-2 rounded-xl bg-themeBgBlack p-4 font-semibold md:min-w-0">
            <div>Timestamp</div>
            <div>Wallet Address</div>
            {/* <div>Twitter Username</div>
            <div>Telegram Username</div> */}
            {/* <div>
              Commission <br />
              Status
            </div> */}
          </div>
          {referralsList.map((data) => (
            <div
              key={data._id}
              className="grid min-w-[900px] grid-cols-4 gap-2 rounded-xl p-4 font-light md:min-w-0"
            >
              <div>

              {moment(data.createdAt)
                  .tz('UTC')
                  .format('DD-MM-YYYY hh:mm A z')}

              </div>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={`${process.env.NEXT_PUBLIC_EXPLORER}address/${data.walletAddress}`}
                className="truncate"
              >
                {data.walletAddress}
              </a>
              {/* <div className="truncate">{data.twitter?.username}</div>{' '}
              <div className="truncate">{data.telegramUsername}</div> */}
              {/*<div className="truncate">*/}
              {/*  {Number(data.baseAmount).toLocaleString('en-US')}{' '}*/}
              {/*  {getName(data.token)}*/}
              {/*</div>*/}
              {/*<div className="truncate">*/}
              {/*  {Number(data.comissionAmount).toLocaleString('en-US')}{' '}*/}
              {/*  {getName(data.token)}*/}
              {/*</div>*/}
              {/*<a*/}
              {/*  rel="noreferrer noopener"*/}
              {/*  target="_blank"*/}
              {/*  href={`${process.env.NEXT_PUBLIC_EXPLORER}tx/${data.transactionHash}`}*/}
              {/*  className="truncate"*/}
              {/*>*/}
              {/*  {data.transactionHash}*/}
              {/*</a>*/}
              {/* <div className="flex justify-center">
                  {data?.isClaimed || data?.isClaimed === false ? (
                    <span onClick={claimUserToken}>
                      <Button
                        type={ButtonType.SECONDARY}
                        className="text-sm font-light"
                      >
                        Claim
                      </Button>
                    </span>
                  ) : (
                    'Claimed'
                  )}
                </div> */}
            </div>
          ))}
        </div>
        <div className="relative z-1 col-span-1 flex items-center justify-between gap-4 text-xs md:col-span-3">
          <Pagination
            count={totalPages}
            page={current}
            onChange={(e, value) => setCurrent(value)}
            hidePrevButton
            hideNextButton
          />
          <span>
            Showing {} -{' '}
            {reportData ? (current - 1) * 10 + reportData?.length : 0} out of{' '}
            {totalData}
          </span>
        </div>
      </div>
      <GlossaryDialog isOpen={glossary} setIsOpen={setGlossary} />
      <LearnMoreDialog isOpen={learnMore} setIsOpen={setLearnMore} />
      <ResponseDialog
        call={() => setDialog(false)}
        isOpen={dialog}
        message={message}
        setIsOpen={setDialog}
        type={dialogType}
      />
    </>
  )
}
