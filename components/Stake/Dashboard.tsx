export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="flex w-full flex-col justify-between gap-4 rounded-2xl border-2 border-themeBorderBlue bg-themeBgBlack p-4">
        <span className="text-sm font-light">
          Total <br />
          Staked Value
        </span>
        <div className="text-3xl font-semibold">
          {1111} <span className="text-sm font-light text-white/30">USDT</span>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-4 rounded-2xl bg-themeBgBlack p-4">
        <span className="text-sm font-light">
          Average <br />
          APY
        </span>
        <div className="text-3xl font-semibold">
          {1111} <span className="text-sm font-light text-white/30">%</span>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-4 rounded-2xl bg-themeBgBlack p-4">
        <span className="text-sm font-light">
          Total Rewards <br /> (unclaimed)
        </span>
        <div className="text-3xl font-semibold">
          {1111} <span className="text-sm font-light text-white/30">USDT</span>
        </div>
      </div>
    </div>
  )
}
