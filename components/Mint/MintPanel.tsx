'use client'

import { ChangeEvent, useState } from 'react'
import MintPageBtn from './MIntPageBtn'
import Button from '../shared/Button'

enum PackEnum {
  Pack1,
  Pack3,
  Pack5,
  Pack10,
}

enum CurrencyEnum {
  ETH = 'ETH',
  CG = 'CG',
}

interface IFields {
  quantity: undefined | number
  total: undefined | number
}

const MintPanel = ({ discord }: { discord?: boolean }) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [pack, setPack] = useState<PackEnum>(PackEnum.Pack3)
  const [currency, setCurrency] = useState<CurrencyEnum>(CurrencyEnum.CG)

  return (
    <div className="relative z-1 flex w-full max-w-[600px] flex-col gap-8 rounded-3xl bg-themeDialogBlack p-6 md:p-8">
      <div className="flex items-end justify-between">
        <span className="text-xl font-bold">Total Minted</span>
        <div className="font-semibold">4000/5200</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative flex h-16 items-center justify-between rounded-xl bg-themeMintBg pl-4 pr-3 md:h-24 md:pl-8 md:pr-6">
          <div className="text-xl font-semibold opacity-50">
            Quantity (Max 5)
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-[#292928] p-2 text-xl font-bold md:gap-4 md:p-4">
            <button
              onClick={() =>
                setQuantity((prev) => {
                  if (prev === 1) return 1
                  return prev - 1
                })
              }
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prev) => {
                  if (prev === 5) return 5
                  return prev + 1
                })
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="relative flex h-16 items-center justify-between rounded-xl bg-themeMintBg px-4 md:h-24 md:px-8">
          <div className="text-xl font-semibold opacity-50">Total</div>
          <div className="text-xl font-semibold">
            {total} {currency}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-left text-xl font-bold">Choose a Pack</span>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <MintPageBtn
            active={pack === PackEnum.Pack1}
            onClick={() => setPack(PackEnum.Pack1)}
          >
            Pack of 1
          </MintPageBtn>
          <MintPageBtn
            active={pack === PackEnum.Pack3}
            onClick={() => setPack(PackEnum.Pack3)}
          >
            Pack of 3
          </MintPageBtn>
          <MintPageBtn
            active={pack === PackEnum.Pack5}
            onClick={() => setPack(PackEnum.Pack5)}
          >
            Pack of 5
          </MintPageBtn>
          <MintPageBtn
            active={pack === PackEnum.Pack10}
            onClick={() => setPack(PackEnum.Pack10)}
          >
            Pack of 10
          </MintPageBtn>
        </div>
        <span className="text-left font-medium opacity-50">
          Get a discount of $1111 and access to intermediate level perks
        </span>
      </div>
      {!discord && (
        <div className="flex flex-col gap-3">
          <span className="text-left text-xl font-bold">Choose a Currency</span>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            <MintPageBtn
              active={currency === CurrencyEnum.ETH}
              onClick={() => setCurrency(CurrencyEnum.ETH)}
            >
              ETH
            </MintPageBtn>
            <MintPageBtn
              active={currency === CurrencyEnum.CG}
              onClick={() => setCurrency(CurrencyEnum.CG)}
            >
              CG Token
            </MintPageBtn>
          </div>
          <span className="text-left font-medium opacity-50">
            Get a discount of $1111 and access to intermediate level perks
          </span>
        </div>
      )}
      <Button className="w-full py-4">Mint</Button>
    </div>
  )
}

export default MintPanel
