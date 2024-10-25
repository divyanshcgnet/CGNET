'use client'

import { Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import Button from '../shared/Button'
import { useAccount } from 'wagmi'
import { getLeaderBoard, getUserDetails, getUserRank } from '@/services/user'
import Toast from '../shared/Toast'

const SKIP = 10

export default function Leaderboard() {
  const { address } = useAccount()
  const [page, setPage] = useState(1)
  const [totalData, setTotalData] = useState(5000)
  const [totalPages, setTotalPages] = useState(500)
  const [current, setCurrent] = useState(2)
  const [user, setUser] = useState<any>()
  const [rank, setRank] = useState<number>()
  const [referralId, setReferralId] = useState('')
  const [reportData, setReportData] = useState<
    [
      {
        referrals: any
        walletAddress: string
        commission: number
      },
    ]
  >()

  const getUserInfo = async () => {
    const user = await getUserDetails()
    setUser(user)
  }

  const userRank = async () => {
    const rank = await getUserRank()
    setRank(rank.rank)
  }

  const leaderBoard = async () => {
    const board = await getLeaderBoard()
    setReportData(board.rank)
  }

  useEffect(() => {
    getUserInfo()
    userRank()
  }, [address])

  useEffect(() => {
    leaderBoard()
    const referralId = localStorage.getItem('referralId')
    referralId && setReferralId(referralId)
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="row-start-1 mb-6 text-3xl font-bold md:col-span-2 md:text-5xl">
        Referral Leaderboard
      </div>
      <div className="col-span-1 col-start-1 row-start-2 flex flex-col gap-4 md:col-span-2">
        <div className="flex flex-col overflow-x-scroll md:overflow-auto">
          <div className="grid min-w-[700px] grid-cols-8 gap-2 rounded-xl bg-themeBgBlack p-4 font-semibold md:min-w-0">
            <div className="col-span-1">Rank</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2">Referrals</div>
            <div className="col-span-2">Earnings</div>
          </div>
          {reportData &&
            reportData?.map((data, i) => (
              <div
                key={i}
                className="grid min-w-[700px] grid-cols-8 gap-2 rounded-xl p-4 font-light md:min-w-0"
              >
                <div className="col-span-1">{i + 1}</div>
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_EXPLORER}address/${data?.walletAddress}`}
                  className="col-span-3 truncate hover:text-themeBlue"
                >
                  ({data?.walletAddress})
                </a>
                <div className="col-span-2 truncate">
                  {data?.referrals?.length}
                </div>
                <div className="col-span-2 truncate">
                  {data?.commission?.toFixed(4)} USD
                </div>
              </div>
            ))}
        </div>
        {/* <div className="flex items-center justify-between gap-4 text-xs">
            <Pagination
              count={totalPages}
              page={current}
              onChange={(e, value) => setCurrent(value)}
              hidePrevButton
              hideNextButton
            />
            <span>
              Showing {} - {50} out of {totalData}
            </span>
          </div> */}
      </div>
      <div className="row-start-3 mb-6 mt-6 flex h-12 items-center justify-center text-center text-xl font-semibold md:col-start-3 md:row-start-1 md:mt-0 md:block md:text-left">
        Your Rank
      </div>
      <div className="row-start-4 h-fit rounded-3xl bg-[#131722CC] md:col-start-3 md:row-start-2">
        <div className="grid w-full grid-cols-8 gap-2 border-b border-themeTextGrey p-4 font-semibold">
          <span className="col-span-1 truncate">{rank}</span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={`${process.env.NEXT_PUBLIC_EXPLORER}address/${user?.walletAddress}`}
            className="col-span-3 truncate hover:text-themeBlue"
          >
            You {user?.walletAddress}
          </a>
          <span className="col-span-2 truncate">{user?.referrals?.length}</span>
          <span className="col-span-2 truncate">
            {user?.commission.toFixed(4)} USD
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 px-6 py-4">
          <span>Stand A Chance to win perks***</span>
          <Toast
            refId={referralId}
            disabled={referralId ? false : true}
            className="flex h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
          >
            Invite A friend
          </Toast>
        </div>
      </div>
    </div>
  )
}
