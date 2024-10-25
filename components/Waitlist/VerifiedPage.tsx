import Image from 'next/image'
import React, { useState } from 'react'
import InviteFriendDialog from './Invite'
import Page from '../shared/Page'
import Button from '../shared/Button'

const VerifiedPage = () => {
  const [showInviteDialog, setShowInviteDialog] = useState(false)

  const handleInviteButtonClick = () => {
    setShowInviteDialog(!showInviteDialog)
  }

  return showInviteDialog ? (
    <InviteFriendDialog  />
  ) : (
    <Page className="flex h-full items-start justify-center md:items-center">
      <div className="relative overflow-hidden md:w-[500px] md:rounded-3xl md:bg-themeBlack md:p-8">
        <Image
          src="/effects/veri-err-1.svg"
          width={184}
          height={184}
          alt=""
          className="absolute -left-[40%] -top-[20%] z-0 hidden w-full md:block"
        />
        <Image
          src="/effects/veri-err-2.svg"
          width={364}
          height={364}
          alt=""
          className="absolute -bottom-[20%] -right-[40%] z-0 hidden w-full md:block"
        />
        <h1 className="relative z-1 mb-2 mt-2 text-center text-lg font-semibold text-white md:mt-4 md:text-xl">
          Hi John, Congrats! Your Position Is
        </h1>
        <div className="relative z-1 flex items-center justify-center">
          <Image src={'/WLpictures/people.svg'} height={60} width={60} alt="" />
          <p className="text-2xl font-bold text-white opacity-90 md:text-4xl">
            243
          </p>
        </div>

        <h1 className="relative z-1 mb-0 mt-8 text-center text-lg font-semibold text-white md:text-xl">
          You Earned
        </h1>

        <div className="relative z-1 mb-8 flex items-center justify-center">
          <Image
            src={'/WLpictures/coin.png'}
            height={80}
            width={79}
            alt=""
            className="relative"
          />
          <h1 className="text-center text-2xl font-bold text-white md:text-5xl">
            100 CG Tokens
          </h1>
        </div>
        <div className="relative z-1 mb-8 w-fit grid-cols-2 justify-center gap-4 md:grid">
          <div className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded-md p-2 px-2 py-4 text-center md:mb-4 md:bg-themePositionBg">
              <p className="text-base font-light md:text-sm">
                Total in beta
              </p>
              <p className="text-lg font-semibold md:text-2xl">9,828</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded-md p-2 px-2 py-4 text-center md:mb-4 md:bg-themePositionBg">
              <p className="text-base font-light md:text-sm">
                Your Successful Referrals
              </p>
              <p className="text-lg font-semibold md:text-2xl">11</p>
            </div>
          </div>
          <div className="relative z-1 col-span-2 flex items-center justify-center">
            <div className="m-1 flex w-full items-center justify-center rounded-md bg-themePositionBg p-1 text-center md:mb-4">
              <div className="w-4/5 md:relative md:w-full">
                <Image
                  src={'/WLpictures/cards.svg'}
                  height={85}
                  width={85}
                  alt="brand-logo"
                  className="a absolute left-7 mb-0 -translate-x-1/2 transform md:mb-[40px]"
                />
                <p className="ml-auto w-5/6 text-left  text-sm font-light md:text-base">
                  Invite more friends to join the beta and get on the top 3
                  rank
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleInviteButtonClick}
          className="relative z-1 mt-8 w-full"
        >
          Invite Friends
        </Button>
      </div>
    </Page>
  )
}

export default VerifiedPage
