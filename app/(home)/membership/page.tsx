import MembershipFaq from '@/components/Homepage/MembershipFaq'
import MembershipPlans from '@/components/Homepage/MembershipPlans'
import Animated from '@/components/shared/Animated'

export default function MembershipPage() {
  return (
    <Animated className="relative flex w-full flex-col items-center justify-center overflow-x-clip px-4 pt-16 text-center md:py-20 mmd:px-8">
      <div className="relative z-1 text-3xl font-bold md:text-5xl">
        Become A Member
      </div>
      <div className="mt-4 font-light">
        All facilitated by a single native token staking. Experience the
        education and guidance in crypto in an
        <br className="hidden mmd:block" /> unparalleled way.
      </div>
      <MembershipPlans page />
      <MembershipFaq />
    </Animated>
  )
}
