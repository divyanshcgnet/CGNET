'use client'

import { ICurrency, currencies } from '@/utils/currencies'
import { makeMeTwoDigits } from '@/utils/numberFix'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { Listbox, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'
import useWallet from '@/hooks/useWallet'
import {
  buyToken,
  endSaleTime,
  getAmountRaised,
  getDecimals,
  getETHPrice,
  getEventReferralDistributed,
  getEventValue,
  getTokenAmount,
} from '@/services/web3Helper'
import { useAccount } from 'wagmi'
import { useRouter, useSearchParams } from 'next/navigation'
import { addTransaction } from '@/services/transaction'
import { addComission } from '@/services/comission'
import { addReferral, userWalletByRefId } from '@/services/user'
import ResponseDialog, { DialogType } from '../shared/ResponseDialog'

export default function Hero() {
  const [timer, setTimer] = useState(Date.now() + 5000)
  const [pledged, setPledged] = useState(0)
  const [currency, setCurrency] = useState<ICurrency | null>(null)
  const [amount, setAmount] = useState<number | undefined>(undefined)
  const [currencyValue, setCurrencyValue] = useState(0)
  // const { isLoggedIn, connectWallet } = useWallet()
  const [price, setPrice] = useState<number>()
  const [walletType, setWalletType] = useState('')
  const { address, isConnected } = useAccount()
  const [loading, setLoading] = useState(false)
  const [dialog, setDialog] = useState(false)
  const [error, setError] = useState(false)
  const [errorStat, setErrorStat] = useState(false)
  const [dialogType, setDialogType] = useState(DialogType.SUCCESS)
  const search = useSearchParams()
  const router = useRouter()
  const [amountRaised, setAmountRaised] = useState<number>(0)

  const getTokenPrice = async () => {
    if (!amount) return setPrice(0)
    const price = await getTokenAmount(currency?.address, amount)
    setPrice(price)
  }

  const fetchAmountRaised = async () => {
    const amt = await getAmountRaised()
    setAmountRaised(Number(amt))
  }

  // useEffect(() => {
  //   setTimer(1704627525000)
  // }, [])

  const getETHUSDPrice = async (name: string) => {
    const tokenPrice = await getETHPrice()
    setCurrencyValue(
      Number(
        (name === 'ETH'
          ? tokenPrice[0]
          : name === 'USDT'
            ? tokenPrice[1]
            : tokenPrice[2]
        ).toFixed(4)
      )
    )
  }

  useEffect(() => {
    fetchAmountRaised()
  }, [loading])

  useEffect(() => {
    getETHUSDPrice(currency?.name as any)
  }, [currency])

  const getEndDate = async () => {
    const endDateTimeStamp = await endSaleTime()
    setTimer(endDateTimeStamp * 1000)
  }

  const getWalletType = () => {
    const wallet = localStorage.getItem('wagmi.wallet')
    if (wallet === 'walletConnect') setWalletType('Mobile Wallet')
    else setWalletType('Browser Wallet')
  }

  useEffect(() => {
    if (isConnected) getWalletType()
  }, [address])

  const buyCGTokens = async () => {
    try {
      const prices = await getETHPrice()
      const tokenPrice =
        currency?.address === currencies[0].address
          ? prices[0]
          : currency?.address === currencies[1].address
            ? prices[1]
            : prices[2]
      console.log({
        amount: tokenPrice * Number(amount),
        value: amount,
        tokenPrice,
      })
      if (
        tokenPrice * Number(amount) < 5 ||
        tokenPrice * Number(amount) > 50000
      ) {
        setError(true)
        setErrorStat(true)
        return
        // throw new Error('Amount should be more then 5 and less then 50000') // TODO
      }
      const refId = search.get('ref')
      const user: any = refId && (await userWalletByRefId(refId))
      setLoading(true)
      const res = await buyToken(
        amount,
        address,
        user?.data?.walletAddress,
        currency?.address
      )
      const tokenBought = await getEventValue(res, 'TokensBought')
      const referralAdded = await getEventValue(res, 'ReferralAdded')
      const referalIncomeDistributed = await getEventReferralDistributed(res)
      const transactionObj = {
        baseAmount: Number(tokenBought.usdAmount) / Math.pow(10, 18),
        tokenQuantity: Number(tokenBought.tokenAmount) / Math.pow(10, 18),
        transactionHash: res?.transactionHash,
        token: tokenBought.token,
        depositWallet: walletType,
      }
      await addTransaction(transactionObj)
      if (referralAdded) {
        await addReferral()
      }
      console.log({ referalIncomeDistributed })
      if (referalIncomeDistributed) {
        for (let i = 0; i < referalIncomeDistributed?.length; i++) {
          const obj = referalIncomeDistributed[i]
          const decimals = await getDecimals(obj.token)
          const commisonObj = {
            receivingUser: obj.referrer,
            level: Number(obj.level),
            comissionedFrom: obj.user,
            comissionAmount: Number(obj.referalAmount) / Math.pow(10, decimals),
            baseAmount: Number(obj.amountPurchased) / Math.pow(10, decimals),
            transactionHash: res?.transactionHash,
            token: obj.token,
            usdPrice: tokenPrice,
          }
          await addComission(commisonObj)
        }
      }
      setLoading(false)
      setDialogType(DialogType.SUCCESS)
      setDialog(true)
    } catch (error) {
      console.log({ error })
      setDialogType(DialogType.FAILED)
      setDialog(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isConnected) {
      console.log({ isConnected })
      getEndDate()
    }
  }, [address])

  useEffect(() => {
    getTokenPrice()
  }, [currency, amount, address])

  useEffect(() => {
    setCurrency(currencies[0])
  }, [])

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <>Presale coming soon…</>
    return (
      <div className="flex items-start gap-2">
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(days)}
          </span>
          <span className="text-2xs font-light">Days</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(hours)}
          </span>
          <span className="text-2xs font-light">Hours</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(minutes)}
          </span>
          <span className="text-2xs font-light">Mins</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(seconds)}
          </span>
          <span className="text-2xs font-light">Secs</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Animated className="relative z-1 flex flex-col items-center justify-center gap-16 bg-gradient-to-b from-[#6754f82b] via-transparent to-transparent px-4 pb-0 pt-16 md:from-transparent md:pt-24 mmd:flex-row mmd:px-16">
        <div className="flex w-full flex-col gap-2 text-left">
          <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl mmd:text-left">
            Cryptograd Presale: <br />
            Secure Your Tokens Now!
          </div>
          <div className="z-10 text-center font-light text-white/80 mmd:text-left">
            Crypto exploration redefined. One platform, endless learning possibilities
          </div>
          <div className="flex w-full justify-center mmd:justify-start">
            <Button className="mt-4 h-12 w-fit !font-normal">
              Buy & Stake Now
            </Button>
          </div>
        </div>
        {/* <div className="relative z-1 flex w-full items-center justify-center">
          <div className="presaleCardBg relative mt-4 flex w-full flex-col gap-6 rounded-xl border border-[#6754F842] p-4 pt-6">
            <div className="absolute -top-4 w-fit rounded-full border border-themeBorderBlue/25 bg-gradient-to-b from-white/5 to-white/0 px-3 py-1 backdrop-blur-lg">
              Token Presale
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-sm font-medium">Presale ends in:</div>
              <Countdown date={timer} renderer={renderer} />
              <div className="text-sm">
                ${amountRaised.toLocaleString('en-US')} Pledged of $
                {(2000000).toLocaleString('en-US')} Goal
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-light">
                Choose your preferred currency:
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[#6754F842] p-4">
                {currency?.name && (
                  <Image
                    src={currency?.icon}
                    alt={currency?.name}
                    width={2000}
                    height={2000}
                    className="h-6 w-6 object-contain"
                  />
                )}
                <input
                  type="number"
                  placeholder="100"
                  value={amount}
                  onChange={(e) => {
                    setErrorStat(false)
                    setAmount(
                      !e.target.value ? undefined : Number(e.target.value)
                    )
                  }}
                  className="w-full border-none bg-inherit text-base font-medium focus:outline-none"
                />
                <Listbox value={currency} onChange={setCurrency}>
                  {({ open }) => (
                    <div className="relative mt-1">
                      <Listbox.Button className="relative flex w-fit items-center gap-2 pl-12">
                        <span className="block truncate">{currency?.name}</span>
                        <FaChevronDown
                          className={`transition-all ${
                            open ? '-rotate-180' : ''
                          }`}
                        />
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlackBg py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {currencies.map((curr, idx) => (
                            <Listbox.Option
                              key={curr.name}
                              className={({ active }) =>
                                `relative flex cursor-pointer select-none items-center gap-3 px-3 py-2 ${
                                  active ? 'text-themeBorderBlue' : 'text-white'
                                }`
                              }
                              value={curr}
                            >
                              {({ selected }) => (
                                <>
                                  <Image
                                    src={curr.icon}
                                    alt={curr.name}
                                    width={2000}
                                    height={2000}
                                    className="h-4 w-4 object-contain"
                                  />
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {curr.name}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  )}
                </Listbox>
              </div>
              <div className="flex items-center justify-between text-xs font-light">
                <span>
                  1 {currency?.name} = {currencyValue} USD
                </span>
                <span>
                  Buying amount = $
                  {(isNaN(Number(amount)) ? 0 : Number(amount)) * currencyValue}{' '}
                  USD
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-light">Token to Claim</div>
              <div className="flex items-center gap-2 rounded-lg border border-[#6754F842] p-4">
                <Image
                  src="/crypto/CG.png"
                  alt="CG-TOKEN"
                  width={2000}
                  height={2000}
                  className="h-6 w-6 object-contain"
                />
                <input
                  type="number"
                  placeholder="100"
                  value={price}
                  onChange={(e) => {
                    setErrorStat(false)
                    setPrice(
                      !e.target.value ? undefined : Number(e.target.value)
                    )
                  }}
                  className="w-full border-none bg-inherit text-base font-medium focus:outline-none"
                />
                <div>CG</div>
              </div>
              {error && errorStat && (
                <span className="text-xs font-semibold text-red-400">
                  * Amount cannot be less than 5CG or greater than 50,000CG
                </span>
              )}
            </div>
            {!isLoggedIn ? (
              <Button className="h-12 !font-normal" onClick={connectWallet}>
                Connect Your Wallet
              </Button>
            ) : (
              <Button
                loading={loading}
                className="h-12 !font-normal"
                onClick={buyCGTokens}
              >
                Buy Tokens
              </Button>
            )}
          </div>
        </div> */}
        <div className="relative flex w-full items-center justify-center">
          <div className="absolute left-0 right-0 top-[10%] mx-auto flex w-fit flex-col items-center justify-center gap-2">
            {/*<span>Coming Soon</span>*/}
            <Countdown date={1706725800000} renderer={renderer} />
          </div>
          <Image src="/Presale/soon.svg" width={619} height={585} alt="" />
        </div>
      </Animated>
      <ResponseDialog
        call={() => {
          router.push('/presale')
        }}
        isOpen={dialog}
        setIsOpen={setDialog}
        type={dialogType}
      />
    </>
  )
}
