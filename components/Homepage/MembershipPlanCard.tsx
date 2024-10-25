import { BsArrowRight, BsCheckLg, BsX } from 'react-icons/bs'
import Button from '../shared/Button'

interface IMembershipPlanCard {
  month: number
  year: number
  trial?: boolean
  signals?: boolean
  videos?: boolean
  aiBot?: boolean
  community?: boolean
  goLive?: boolean
  vip?: boolean
  popular?: boolean
}

const MembershipPlanCard = ({
  month,
  year,
  trial,
  signals,
  videos,
  aiBot,
  community,
  goLive,
  vip,
  popular,
}: IMembershipPlanCard) => {
  return (
    <div className="flex w-full flex-col justify-end overflow-hidden md:rounded-[2.5rem] rounded-3xl">
      {popular && (
        <div className="to bg-themeBlue text-center w-full bg-gradient-to-r from-themeViolet px-4 py-4 text-2xl font-bold">
          Most Popular
        </div>
      )}
      <div className={`flex h-fit w-full flex-col items-center justify-center ${!popular && "rounded-t-[2.5rem]"} gap-8 bg-themeBgBlack p-8`}>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold">${month}<span className='md:text-3xl text-xl'>/month</span></div>
          <span className="text-lg font-medium">Or ${year} Yearly</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {trial ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>7 days Free trial</div>
          </div>
          <div className="flex items-center gap-2">
            {signals ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>Signals</div>
          </div>
          <div className="flex items-center gap-2">
            {videos ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>Videos</div>
          </div>
          <div className="flex items-center gap-2">
            {aiBot ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>General AI Bot</div>
          </div>
          <div className="flex items-center gap-2">
            {community ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>Community</div>
          </div>
          <div className="flex items-center gap-2">
            {goLive ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>GO LIVE Feature</div>
          </div>
          <div className="flex items-center gap-2">
            {vip ? (
              <BsCheckLg className="w-6 h-6 !text-xl !text-themeBorderBlue" />
            ) : (
              <BsX className="!text-themeRed w-6 h-6 !text-3xl" />
            )}
            <div>VIP Whale Room</div>
          </div>
        </div>
        <Button className='!px-4'>
          Get Started <BsArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default MembershipPlanCard
