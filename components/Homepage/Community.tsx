import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'
import { FaDiscord, FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Community = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -left-[25%] top-0 z-0 w-1/2"
      />
      <Animated className="relative z-1 flex w-full flex-col items-center justify-center overflow-x-clip px-4 !pb-32 text-center md:py-20 mmd:px-16">
        <div className="relative z-1 text-lg font-semibold text-themeLightViolet">
          CryptoGrad Incubator Lab
        </div>
        <div className="relative z-1 mb-4 mt-2 text-3xl font-bold md:text-5xl">
          Nurturing Web3 Innovation
        </div>
        <div className="mb-8 mt-4 font-light">
          Cryptograd Network&apos;s dedicated space where aspiring blockchain
          enthusiasts and
          <br className="hidden mmd:block" /> entrepreneurs come together to
          incubate their groundbreaking ideas. This collaborative
          <br className="hidden mmd:block" />
          ecosystem provides a supportive environment for individuals to
          explore, develop, and launch
          <br className="hidden mmd:block" /> their blockchain projects,
          fostering innovation and driving the future of the blockchain
          industry.
        </div>
        <a
          href="https://discord.gg/GQJTSFdTwh"
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          <FaDiscord className="!text-xl" /> Open Discord
        </a>
        {/* <Image
        src="/effects/ai-eff-1.svg"
        className="absolute -bottom-64 -right-[20%] z-0 h-full object-bottom"
        alt=""
        width={635}
        height={840}
      /> */}
      </Animated>
      <Image
        className="absolute bottom-1/2 right-32 z-0 hidden h-32 w-32 rotate-[15deg] md:block"
        src="/Homepage/Community/communtiy (1).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute -bottom-16 -left-16 z-0 hidden h-56 w-56 md:block"
        src="/Homepage/Community/comm2.png"
        alt=""
        width={807}
        height={807}
      />
      <Image
        className="absolute -right-12 top-32 z-0 hidden h-40 w-40 -rotate-[19deg] md:block"
        src="/Homepage/Community/communtiy (3).png"
        alt=""
        width={800}
        height={800}
      />
      <Image
        className="absolute bottom-0 top-0 z-0 h-fit w-full md:bottom-auto md:h-full"
        src="/Homepage/Community/ellipse.svg"
        width={1920}
        height={1920}
        alt=""
      />
      <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-4 pb-20 text-center md:py-20 mmd:px-16">
        <Image
          className="absolute bottom-0 top-0 z-0 h-fit w-full md:hidden"
          src="/Homepage/Community/ellipse.svg"
          width={1920}
          height={1920}
          alt=""
        />
        <div className="relative z-1 text-3xl font-bold capitalize md:text-5xl">
          Become a part of cryptoland
        </div>
        <div className="relative z-1 mt-16 grid w-full grid-cols-1 gap-4 mmd:grid-cols-3">
          <a
            href="https://x.com/cryptogradai?s=21&t=U-ORYT37jBeGPFBfoHU1Gw"
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full flex-col items-center justify-between gap-6 rounded-2xl bg-themeNavBlack p-8 md:h-64 md:items-start"
          >
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="text-xl font-semibold md:text-3xl">Twitter</div>
              <div className="text-sm font-light">General Announcements</div>
            </div>
            <FaXTwitter className="!text-4xl !text-white md:!text-7xl" />
          </a>
          <a
            href="https://t.me/cryptogradportal"
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full flex-col items-center justify-between gap-6 rounded-2xl bg-themeNavBlack p-8 md:h-64 md:items-start"
          >
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="text-xl font-semibold md:text-3xl">Telegram</div>
              <div className="text-sm font-light">Free Community</div>
            </div>
            <FaTelegramPlane className="!text-4xl !text-[#229ED9] md:!text-7xl" />
          </a>
          <a
            href="https://discord.gg/GQJTSFdTwh"
            target="_blank"
            rel="noreferrer noopener"
            className="flex w-full flex-col items-center justify-between gap-6 rounded-2xl bg-themeNavBlack p-8 md:h-64 md:items-start"
          >
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="text-xl font-semibold md:text-3xl">Discord</div>
              <div className="text-sm font-light">
                Access AI bots, Trading Signals, Whale Rooms, Community, and
                much more...
              </div>
            </div>
            <FaDiscord className="!text-4xl !text-[#5865F2] md:!text-7xl" />
          </a>
        </div>
      </Animated>
    </div>
  )
}

export default Community
