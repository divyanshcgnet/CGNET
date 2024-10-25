import AiSection from '@/components/Homepage/AiSection'
import AiSection5 from '@/components/Homepage/AiSection5'
// import CgBenefits from '@/components/Homepage/CgBenefits'
import Community from '@/components/Homepage/Community'
import Discord from '@/components/Homepage/Discord'
// import Experience from '@/components/Homepage/Experience'
import Growth from '@/components/Homepage/Growth'
import HeroSection from '@/components/Homepage/HeroSection'
import LargeToken from '@/components/Homepage/LargeToken'
// import LiveEducator from '@/components/Homepage/LiveEducator'
import Membership from '@/components/Homepage/Membership'
import { ProblemStatementSection } from '@/components/Homepage/ProblemStatement'
// import NativeToken from '@/components/Homepage/NativeToken'
// import NeverMissABeat from '@/components/Homepage/NeverMissABeat'
// import NftCollection from '@/components/Homepage/NftCollection'
// import PartneredNfts from '@/components/Homepage/PartneredNfts'
import Roadmap from '@/components/Homepage/Roadmap'
// import Section3 from '@/components/Homepage/Section3'
// import Waitlist from '@/components/Homepage/Waitlist'
import BackedBy from '@/components/shared/BackedBy'
import Page from '@/components/shared/Page'
import StakingBenefits from '@/components/shared/StakingBenefits'
import TabInfo from '@/components/shared/TabInfo'
import { useEffect, useRef } from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <Page className="bg-[#0D0D17] !p-0">
      <HeroSection />
      <TabInfo />
      <BackedBy />
      {/* <StakingBenefits buttonText="Grab Now" /> */}
      {/*<LargeToken />*/}
      <AiSection />
      {/* <Section3 /> */}
      {/* <NftCollection /> */}
      {/* <AiSection5 /> */}
      <Discord />
      <ProblemStatementSection />
      {/* ! Discord */}
      {/* <LiveEducator /> */}
      {/* <Experience /> */}
      <Membership />
      {/* <NeverMissABeat />
        <NativeToken />
        <CgBenefits />
        <Waitlist />
        <PartneredNfts /> */}
      <Roadmap docs />
      <Growth />
      <Community />
    </Page>
  )
}
