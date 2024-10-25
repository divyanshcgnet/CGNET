import Link from 'next/link'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import TabInfo from '../shared/TabInfo'

export default function ExtendedTab() {
  return (
    <Animated className="relative z-5 w-full flex flex-col items-center justify-center overflow-hidden px-2 pt-8 md:px-4 mmd:px-16">
      <div className="flex flex-col items-center justify-center px-4">
        {/* <div className="relative z-1 text-center text-lg font-medium text-themeBlue">
          Over 5000 Early Adopters Already Onboard!
        </div> */}
        <div className="relative z-10 pb-8 pt-4 text-center text-3xl font-bold md:text-5xl">
          Cryptograd Presale: <br />
          Secure Exclusive Platform Access
        </div>
      </div>
      <Link
        href="presale#buy"
        className="flex !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
      >
        Buy & Stake Now
      </Link>

      <TabInfo />
    </Animated>
  )
}
