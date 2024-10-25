import { SocialIcon } from 'react-social-icons'
import { X } from 'react-feather'
import 'react-social-icons/discord'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import Button from '../shared/Button'
import Page from '../shared/Page'

const InviteFriendDialog = () => {
  return (
    <Page className="flex items-end justify-center !px-0 !py-0 md:items-center md:!p-8">
      <div className="relative rounded-t-xl border-t border-themeTextGrey/80 bg-[#2F2F37] px-4 pb-20 pt-8 md:border-none md:bg-transparent">
        <button className="absolute right-8 top-8 -mr-0 -mt-12 hidden rounded-full bg-themeBgBlack px-2 py-2 text-white md:block">
          <X size={20} />
        </button>
        <div className="flex flex-col gap-8 rounded-3xl p-0 md:w-[440px] md:bg-themeBlack md:p-12">
          <h2 className="text-2xl text-center font-semibold text-white md:text-left md:text-3xl">
            Invite your friends
          </h2>
          <p className="text-sm text-center font-light text-white opacity-80 md:text-left">
            Win More CG tokens and climb up the Leaderboard
          </p>
          <div className="w-full rounded-lg border border-themeTextGrey bg-themeBlack px-4 py-2 text-themeTextGrey/50 placeholder-themeTextGrey">
            www.cryptograd/refer/john13
          </div>

          <Button className="w-full md:w-fit">Copy Invite Code</Button>
          <div className="flex justify-center gap-4 md:justify-start">
            <SocialIcon className="md:!h-8 md:!w-8" url="https://www.linkedin.com/company/cryptograd" />
            <SocialIcon className="md:!h-8 md:!w-8" url="https://twitter.com/cgradofficial" />
            <SocialIcon className="md:!h-8 md:!w-8" url="https://discord.gg/GQJTSFdTwh" />
            <SocialIcon className="md:!h-8 md:!w-8" url="https://www.instagram.com/cryptogradofficial/" />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default InviteFriendDialog
