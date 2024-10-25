import Growth from '@/components/Homepage/Growth'
import Roadmap from '@/components/Homepage/Roadmap'
import CgToken from '@/components/Presale/CgToken'
import ExtendedTab from '@/components/Presale/ExtendedTab'
import Hero from '@/components/Presale/Hero'
import PresaleFaq from '@/components/Presale/PresaleFaq'
import Timer from '@/components/Presale/Timer'
import Tokenomics from '@/components/Presale/Tokenomics'
import BackedBy from '@/components/shared/BackedBy'
import Page from '@/components/shared/Page'
import StakingBenefits from '@/components/shared/StakingBenefits'
import Image from 'next/image'

export default function PresalePage() {
  return (
    <Page className="relative !p-0">
      <Image
        src="/Presale/bg.svg"
        className="absolute -top-[3rem] left-0 right-0 z-0 hidden w-full md:block saturate-[1.4] brightness-125"
        alt=""
        width={1550}
        height={124}
      />
      <Hero />
      <BackedBy />
      <CgToken />
      <ExtendedTab />
      <StakingBenefits buttonText="Buy & Stake Now" />
      <Tokenomics />
      <Roadmap />
      <Growth />
      <PresaleFaq />
      <Timer />
    </Page>
  )
}
