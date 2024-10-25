'use client'

import Button from '../shared/Button'
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { BiLogoInstagramAlt } from 'react-icons/bi'

const GrowthActions = () => {
  return (
    <div className="relative z-5 mt-8 flex items-center gap-2 md:gap-4">
      <a
        href="https://discord.gg/GQJTSFdTwh"
        target="_blank"
        rel="noreferrer noopener"
        // onClick={() => {}}
        className="bg-gradient-to-r justify-center flex items-center gap-2 from-themeViolet to-themeBlue hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey transition-all duration-700 rounded-lg md:px-6 px-4 min-h-[2.5rem] font-semibold text-lg !h-12"
      >
        <BsDiscord className="!text-2xl" /> Open Discord
      </a>
      <a
        href="https://twitter.com/cgradofficial"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BsTwitter className="!text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/cryptogradofficial/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex aspect-square !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg border-2 border-themeBlue bg-themeBlack !px-0 text-lg  font-medium transition-all hover:text-themeVioletText"
      >
        <BiLogoInstagramAlt className="!text-3xl" />
      </a>
    </div>
  )
}

export default GrowthActions
