'use client'

import Image from 'next/image'
import MintPageBtn from './MIntPageBtn'
import Animated from '../shared/Animated'

const MintPacks = () => {
  return (
    <div className="flex w-full flex-col items-center px-8 pt-20 text-center mmd:!px-16">
      <div className="text-3xl font-bold md:text-5xl">
        Get Access to CG Levels
      </div>
      <div className="mb-16 mt-4 md:mb-32 mmd:mb-12">
        An all encompassing education platform offering a propriety,
        utility-backed governance <br className="hidden md:block" /> token,
        limited edition NFT launch, poker room and tournament play
      </div>
      <div className="mt-16 flex flex-col text-left">
        <Animated className="flex py-16 flex-col-reverse md:items-center gap-12 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <div className="text-2xl font-bold">Pack of 1 NFT</div>
            <ul className="list-inside list-disc font-light">
              <li>Get access to beginner level perks</li>
              <li>Get access to beginner level perks</li>
            </ul>
            <MintPageBtn
              className="mt-4 !w-fit !px-8 !bg-themeBlack !h-12"
              active={true}
              onClick={() => {}}
            >
              Mint Now
            </MintPageBtn>
          </div>
          <Image
            className="md:w-full object-contain floating w-2/3"
            src="/Mint/Packs/pack (1).png"
            width={484}
            height={486}
            alt="1 nft pack"
          />
        </Animated>
        <Animated className="flex py-16 flex-col md:items-center gap-12 md:flex-row">
          <Image
            className="md:w-full object-contain floating w-2/3"
            src="/Mint/Packs/pack (3).png"
            width={766}
            height={485}
            alt="1 nft pack"
            data-delay={200}
          />
          <div className="flex w-full flex-col gap-2">
            <div className="text-2xl font-bold">Pack of 3 NFT</div>
            <ul className="list-inside list-disc font-light">
              <li>Get access to beginner level perks</li>
              <li>Get access to beginner level perks</li>
            </ul>
            <MintPageBtn
              className="mt-4 !w-fit !px-8 !bg-themeBlack !h-12"
              active={true}
              onClick={() => {}}
            >
              Mint Now
            </MintPageBtn>
          </div>
        </Animated>
        <Animated className="flex py-16 flex-col-reverse md:items-center gap-12 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            <div className="text-2xl font-bold">Pack of 5 NFT</div>
            <ul className="list-inside list-disc font-light">
              <li>Get access to beginner level perks</li>
              <li>Get access to beginner level perks</li>
            </ul>
            <MintPageBtn
              className="mt-4 !w-fit !px-8 !bg-themeBlack !h-12"
              active={true}
              onClick={() => {}}
            >
              Mint Now
            </MintPageBtn>
          </div>
          <Image
            className="md:w-full object-contain floating w-2/3"
            src="/Mint/Packs/pack (5).png"
            width={754}
            height={587}
            alt="1 nft pack"
            data-delay={400}
          />
        </Animated>
        <Animated className="flex pt-16 flex-col md:items-center gap-12 md:flex-row">
          <Image
            className="md:w-full object-contain floating w-2/3"
            src="/Mint/Packs/pack (10).png"
            width={790}
            height={682}
            alt="1 nft pack"
            data-delay={600}
          />
          <div className="flex w-full flex-col gap-2">
            <div className="text-2xl font-bold">Pack of 10 NFT</div>
            <ul className="list-inside list-disc font-light">
              <li>Get access to beginner level perks</li>
              <li>Get access to beginner level perks</li>
            </ul>
            <MintPageBtn
              className="mt-4 !w-fit !px-8 !bg-themeBlack !h-12"
              active={true}
              onClick={() => {}}
            >
              Mint Now
            </MintPageBtn>
          </div>
        </Animated>
      </div>
    </div>
  )
}

export default MintPacks
