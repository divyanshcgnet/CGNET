import ClaimAction from '@/components/Claim/ClaimAction'
import NftCollectionMarqee from '@/components/Homepage/NftCollectionMarqee'
import Animated from '@/components/shared/Animated'
import Page from '@/components/shared/Page'
import Image from 'next/image'

const ClaimPage = () => {
  return (
    <Page className="flex flex-col items-center overflow-hidden !p-0">
      <div className="relative flex w-full flex-col items-center justify-center !px-4 py-48 text-center md:!px-4 mmd:!px-16">
        <div className="relative z-1 text-3xl font-bold md:text-5xl">
          Your Gateway to Crypto Awaits.
          <Image
            src="/Mint/coin (4).png"
            width={264}
            height={265}
            alt=""
            className="absolute hidden h-32 w-32 -rotate-45 md:-top-20 md:right-0 md:block"
          />
        </div>
        <div className="relative z-1 mb-12 mt-4">
          Claim early access CryptoGrad Pass to gain access to the platform
        </div>
        <ClaimAction />
        <Image
          src="/Mint/coin2.png"
          width={107}
          height={87}
          alt=""
          className="absolute left-[10%] top-[15%] -z-1 hidden h-fit w-20 md:block xl:top-[30%]"
        />
        <Animated className="absolute -left-4 top-[15%] z-0 w-1/3 sm:w-1/4 lg:w-1/5 xl:top-[35%]">
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
        <Animated className="absolute -right-8 top-[70%] z-0 w-1/3 sm:w-1/4 md:top-[60%] lg:w-1/5">
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
          className="absolute bottom-[50%] left-0 right-0 z-0 m-auto h-fit w-fit md:bottom-[10%]"
          alt=""
          width={870}
          height={609}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-16 pb-16 md:py-32">
        <div className="relative z-1 px-4 text-center text-3xl font-bold md:text-5xl">
          Trending Cryptograd NFTs
        </div>
        <NftCollectionMarqee />
      </div>
    </Page>
  )
}

export default ClaimPage
