import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import Link from 'next/link'
import { RiDiscordFill } from 'react-icons/ri'

const Discord = () => {
  return (
    <Animated className="relative z-1 flex w-full flex-col-reverse items-center px-4 md:min-w-fit md:pt-12 mmd:flex-row mmd:px-16">
      <div className="w-3/4 max-w-[500px] md:w-full">
        <Image
          src="/Homepage/Discord.gif"
          width={1283}
          height={2206}
          alt=""
          className="relative z-0 mx-auto px-12 py-8 md:pl-12"
        />
      </div>
      <Image
        className="absolute -top-[30%] right-0 z-0 h-fit w-3/5 md:hidden"
        src="/Homepage/discordEllipse.svg"
        width={312}
        height={679}
        alt=""
      />
      <div className="flex w-full flex-col items-center gap-8 mmd:items-start">
        <div className="text-3xl font-bold md:text-5xl">Discord Synergy</div>
        <div className="flex flex-col items-start gap-4 text-left text-lg">
          <div>⚙️ Access real-time trading signals for informed decisions.</div>
          <div>
            📈 Join a vibrant crypto community for collaboration and insights.
          </div>
          <div>✨ Enhance your crypto journey with multiple AI tools </div>
        </div>
        <Link
          href="https://discord.gg/GQJTSFdTwh"
          target="_blank"
          rel="noreferrer noopener"
          className="flex !h-12 min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          <RiDiscordFill className="text-3xl" />
          Open Discord
        </Link>
      </div>
    </Animated>
  )
}

export default Discord
