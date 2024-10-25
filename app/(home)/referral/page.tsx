import Hero from '@/components/Referral/Hero'
import HowItWorks from '@/components/Referral/HowItWorks'
import Section4 from '@/components/Referral/Section4'
import Section6 from '@/components/Referral/Section6'
import Section5 from '@/components/Referral/Section5'
import System from '@/components/Referral/System'
import Page from '@/components/shared/Page'
import ReferralFaq from '@/components/Referral/ReferralFaq'
import LastSection from '@/components/Referral/LastSection'

export default function ReferralPage() {
  return (
    <Page className="relative overflow-hidden !p-0">
      <Hero />
      <HowItWorks />
      <System />
      <Section4 />
      <Section6 />
      <Section5 />
      <LastSection />
      <ReferralFaq />
    </Page>
  )
}
