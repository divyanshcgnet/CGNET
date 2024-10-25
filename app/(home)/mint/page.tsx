import HeroSectionHoveringNfts from '@/components/Homepage/HeroSectionHoveringNfts'
import MintFaq from '@/components/Mint/MintFaq'
import MintPacks from '@/components/Mint/MintPacks'
import MintPanel from '@/components/Mint/MintPanel'
import Animated from '@/components/shared/Animated'
import Page from '@/components/shared/Page'
import Image from 'next/image'

const MintPage = ({ searchParams }: { searchParams: { discord: boolean } }) => {
  return (
    <Page className="flex flex-col items-center overflow-hidden !p-0">
      <div className="flex w-full flex-col items-center !px-4 pt-12 text-center md:!px-4 mmd:!px-16 mmd:!pt-20">
        <div className="text-3xl font-bold md:text-5xl">MINT CG NFTs</div>
        <div className="mb-32 mt-4 mmd:mb-12">
          Your gateway to exclusive NFTs that grant access to our
          platform&apos;s premium features and{' '}
          <br className="hidden md:block" /> opportunities and Join the CG Cult.
        </div>
        <div className="relative mb-48 flex w-full items-center justify-center mmd:mb-0">
          <Animated className="absolute -top-[15%] left-0 z-2 w-1/2 sm:w-1/4 md:z-0 mmd:-top-[10%]">
            <div className="floating">
              <Image
                src="/Mint/nft1.png"
                width={342}
                height={263}
                alt=""
                className="-rotate-[29deg]"
              />
            </div>
          </Animated>
          <Animated className="absolute -bottom-[15%] pt-20 right-0 z-2 w-1/2 sm:w-1/4 md:z-0 mmd:top-[40%]">
            <div className="floating" data-delay={600}>
              <Image
                src="/Mint/nft2.png"
                width={340}
                height={252}
                alt=""
                className="rotate-[30deg]"
              />
            </div>
          </Animated>
          <Image
            src="/effects/hero-eff-1.svg"
            className="absolute -bottom-[30%] left-0 right-0 z-0 m-auto aspect-square object-cover overflow-visible h-fit max-h-[6rem] md:max-h-full"
            alt=""
            width={870}
            height={609}
          />
          <MintPanel discord={searchParams.discord} />
        </div>
      </div>
      {!searchParams.discord && (
        <>
          <div className="flex w-full flex-col items-center px-4 pt-20 text-center mmd:!px-16">
            <div className="text-3xl font-bold md:text-5xl">
              Cryptograd Perks
            </div>
            <div className="mb-32 mt-4 mmd:mb-12">
              All facilitated by a single game-changing platform. Experience the
              revolution of <br className="hidden md:block" /> blockchain in an
              unparalleled way.
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 mmd:grid-cols-2 mmd:gap-y-16 ">
              <div className="pl-16">
                <div className="relative rounded-xl border border-themeTextGrey/40 py-6 pl-16 pr-4 text-left text-lg font-bold sm:text-xl md:pr-8 md:text-2xl">
                  <div className="absolute -left-10 md:-left-8 bottom-0 top-0 my-auto aspect-square h-4/5 max-h-[6rem]">
                    <Image
                      src="/Mint/crown.png"
                      width={169}
                      height={154}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  Unlock the Ultimate <br /> Strategy
                </div>
              </div>
              <div className="pl-16">
                <div className="relative rounded-xl border border-themeTextGrey/40 py-6 pl-16 pr-4 text-left text-lg font-bold sm:text-xl md:pr-8 md:text-2xl">
                  <div className="absolute -left-10 md:-left-8 bottom-0 top-0 my-auto aspect-square h-4/5 max-h-[6rem]">
                    <Image
                      src="/Mint/rocket.png"
                      width={134}
                      height={156}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  Master Trading for <br /> Superior Performance
                </div>
              </div>
              <div className="pl-16">
                <div className="relative rounded-xl border border-themeTextGrey/40 py-6 pl-16 pr-4 text-left text-lg font-bold sm:text-xl md:pr-8 md:text-2xl">
                  <div className="absolute -left-10 md:-left-8 bottom-0 top-0 my-auto aspect-square h-4/5 max-h-[6rem]">
                    <Image
                      src="/Mint/brain.png"
                      width={177}
                      height={156}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  Get predictive results <br /> with AI
                </div>
              </div>
              <div className="pl-16">
                <div className="relative rounded-xl border border-themeTextGrey/40 py-6 pl-16 pr-4 text-left text-lg font-bold sm:text-xl md:pr-8 md:text-2xl">
                  <div className="absolute -left-10 md:-left-8 bottom-0 top-0 my-auto aspect-square h-4/5 max-h-[6rem]">
                    <Image
                      src="/Mint/key 1.png"
                      width={145}
                      height={175}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  Discover data about <br /> the market
                </div>
              </div>
            </div>
          </div>
          {/*<MintPacks />*/}
        </>
      )}

      <div className="relative mt-16 flex w-full flex-col items-center justify-center bg-gradient-to-b from-themeBorderBlue via-transparent to-transparent pb-32 pt-16">
        <Image
          src="/Mint/coin (1).png"
          width={124}
          height={125}
          alt=""
          className="absolute bottom-1/2 left-0 hidden md:block"
        />
        <Image
          src="/Mint/coin (3).png"
          width={132}
          height={132}
          alt=""
          className="absolute right-0 top-0 hidden md:block"
        />
        <Animated className="mb-12 flex flex-col gap-2 px-4 text-center">
          <div className="text-lg font-semibold uppercase">Cryptograd</div>
          <div className="relative text-3xl font-medium italic md:max-h-full">
            The Key to Crypto Harmony
            <Image
              src="/Mint/coin (4).png"
              width={264}
              height={265}
              alt=""
              className="absolute right-8 top-8 h-32 w-32 md:-right-20 md:-top-8"
            />
            <Image
              src="/Mint/coin (2).png"
              width={132}
              height={132}
              alt=""
              className="absolute -left-4 top-2 h-20 w-20 md:-left-12"
            />
          </div>
        </Animated>
        <div className="relative h-[30vh] w-[120vw] overflow-hidden pt-32 md:h-full md:w-full md:pt-0">
          <div className="absolute  bottom-0 left-0 right-0 top-16 m-auto md:static">
            <HeroSectionHoveringNfts />
          </div>
        </div>
        {!searchParams.discord && <MintFaq />}
      </div>
    </Page>
  )
}

export default MintPage
