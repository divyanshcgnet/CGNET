import Chart from '../../TradingViewCharts/Chart'
import { ICoinInfo, IOhlcv } from '../Markets'

const MarketLowerPanel = ({
  pair,
  currency,
  coinInfo,
  // olcv,
}: {
  pair: string
  currency: string | undefined
  coinInfo: ICoinInfo
  // olcv: IOhlcv
}) => {
  return (
    <div className="col-span-6 flex flex-col gap-4 mmd:col-span-3 xl:col-span-3 2xl:col-span-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <p className="text-2xl font-bold leading-[140%] text-white/80 ">
            {currency} to USD Chart
          </p>
          {/* <div className="flex h-fit gap-2 rounded bg-[#20222B]">
            <Button className="h-6 w-fit text-sm font-normal">1D</Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              1W
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              1M
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              1Y
            </Button>
            <Button className="h-6 w-fit bg-none text-sm font-normal">
              5Y
            </Button>
          </div> */}
        </div>
        <div className="h-[230px] overflow-hidden bg-[#20222B] md:h-[470px]">
          {/* <LineChartData color="#6754F8" /> */}
          <Chart pair={`${pair}USD`} />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-6 md:gap-4">
        <p className="text-xl font-medium leading-[140%] text-white/80 ">
          Key Metrics
        </p>
        <div className="grid grid-cols-1 gap-4 md:flex-row mmd:grid-cols-2 2xl:grid-cols-4">
          <div className="flex flex-col gap-1 rounded-lg bg-[#1C55D5] p-2">
            <p className="text-lg font-medium leading-[140%] text-white/80 ">
              {coinInfo?.quote.USD.price
                ? `$${coinInfo?.quote.USD.price.toLocaleString('en-us')}`
                : 'Price Not Found'}
            </p>
            <p className="text-sm font-semibold leading-[140%] text-white/60 ">
              Price
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-[#5218FE] p-2">
            <p className="text-lg font-medium leading-[140%] text-white/80 ">
              {coinInfo?.quote.USD.market_cap
                ? `$${coinInfo?.quote.USD.market_cap.toLocaleString('en-us')}`
                : 'Value Not Found'}
            </p>
            <p className="text-sm font-semibold leading-[140%] text-white/60 ">
              Market Cap
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-[#B418FE] p-2">
            <p className="text-lg font-medium leading-[140%] text-white/80 ">
              ${coinInfo?.quote.USD.volume_24h.toLocaleString('en-us')}
            </p>
            <p className="text-sm font-semibold leading-[140%] text-white/60 ">
              Volume (24H)
            </p>
          </div>
          <div className="flex flex-col gap-1 rounded-lg bg-[#1C55D5] p-2">
            <p className="text-lg font-medium leading-[140%] text-white/80 ">
              {coinInfo?.circulating_supply.toLocaleString('en-us')}{' '}
              {coinInfo?.symbol}
            </p>
            <p className="text-sm font-semibold leading-[140%] text-white/60 ">
              Circulating Supply
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketLowerPanel
