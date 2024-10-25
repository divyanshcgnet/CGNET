'use client'
import { useEffect, useState } from 'react'
import MembershipFaq from '@/components/Homepage/MembershipFaq'
import MembershipPlans from '@/components/Homepage/MembershipPlans'
import Animated from '@/components/shared/Animated'
import Image from 'next/image'
import axios from 'axios'
import { getUserTxn } from '@/services/user'
import MembershipPlanUpgrade from '@/components/Homepage/MembershipUpgrade'
import MembershipPlansUpgradeCard from '@/components/Homepage/MembershipPlansUpgrade'
interface Transaction {
  _id: string
  user: any
  plan: string
  transactionHash: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface TransactionData {
  total: number
  transactions: Transaction[]
}

const getToken = () => {
  // console.log('token', localStorage.getItem('privy:token'))
  return localStorage.getItem('privy:token')?.slice(1, -1)
}

export default function SubscriptionPage() {
  const [txnList, setTxnList] = useState<Transaction[] | null>(null)

  const getTxns = async () => {
    const info = await getUserTxn()
    setTxnList(info.transactions)
    console.log({ info })
  }

  useEffect(() => {
    getTxns()
  }, [])

  return (
    <Animated className="pageHeight relative flex w-full flex-col items-center justify-center overflow-hidden overflow-x-clip px-4 pt-16 text-center md:py-20 mmd:px-8">
      <Image
        src="/Referral/ellipse-right.svg"
        alt=""
        width={526}
        height={526}
        className="absolute -top-[60%] right-0 z-0 hidden w-full blur-2xs md:block"
      />
      <Image
        src="/effects/ellipse-1.svg"
        className="absolute left-0 top-0 z-0 hidden h-full w-full object-cover opacity-30 md:block"
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
      <Image
        src="/purpleEllispse.svg"
        alt=""
        width={526}
        height={526}
        className="absolute -bottom-[10%] -left-[50%] z-0 h-[800px] w-full"
      />
      <div className="relative z-1 text-3xl font-bold md:text-5xl">
        You&apos;re all set with your current plan!
      </div>
      <div className="mt-4 font-light">
        Manage your subscription, explore additional features, or upgrade to a
        different plan.
      </div>
      <div className="maxWidthSidebar">
      <div className="mt-10 mb-4 font-bold text-[#B6B5FF] ">Manage Your Subscription</div>
        <MembershipPlansUpgradeCard />
      </div>
      <div className="relative z-1 mt-10 flex w-full items-center justify-between text-3xl font-bold md:col-span-3">
        Subscription History
      </div>
      <div className="relative z-1 mt-6 flex w-full flex-col overflow-x-scroll md:col-span-3 md:overflow-auto">
        <div className="grid min-w-[900px] grid-cols-5 gap-2 rounded-xl bg-themeBgBlack p-4 font-semibold md:min-w-0">
          <div>TX Date</div>
          <div>Plan</div>
          <div>Referred By</div>
          <div>TX Hash</div>
          <div>Plan active till</div>
          {/* <div>
              Commission <br />
              Status
            </div> */}
        </div>
        {txnList != null &&
          txnList.map((data) => (
            <div
              key={data.transactionHash}
              className="grid min-w-[900px] grid-cols-5 gap-2 rounded-xl bg-themeBlackDeep p-4 font-light md:min-w-0"
            >
              <div>{new Date(data.createdAt).toString()}</div>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href={`${process.env.NEXT_PUBLIC_EXPLORER}address/${data.createdAt}`}
                className="truncate"
              >
                {data.plan}
              </a>
              <div className="truncate">{data.user.referrals[0]}</div>{' '}
              <div className="truncate">{data.transactionHash}</div>
              <div className="truncate">{data.updatedAt}</div>
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
      {/* <div className="relative z-1 col-span-1 flex items-center justify-between gap-4 text-xs md:col-span-3">
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
      </div> */}
    </Animated>
  )
}
