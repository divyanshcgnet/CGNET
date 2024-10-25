'use client'
import { usePrivy } from '@privy-io/react-auth'
import MembershipSwiper from './MembershipSwiper'
import MembershipPlanUpgrade from './MembershipUpgrade'

const MembershipPlansUpgradeCard = ({
  page,
  aiPage,
}: {
  page?: boolean
  aiPage?: boolean
}) => {
  const { user } = usePrivy()
  

  return (
    <div className="flex w-full justify-center">
      <div
        className={`relative z-1 mt-6 hidden w-full min-w-[59rem] grid-cols-3 gap-4 md:w-fit ${
          aiPage ? 'xl:grid' : ' mmd:grid'
        }`}
      >
        <MembershipPlanUpgrade
          page
          apy={2}
          price={99.99}
          planType={1}
          checkoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/895d2e06-6159-4586-98e4-bc4a8cbc4e58?refId=${user?.id}`}
          discountedCheckoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/4a0d07fb-1840-495a-ae75-63b5a7769036?refId=${user?.id}`}

        />
        <MembershipPlanUpgrade
          page
          apy={4}
          price={249.99}
          planType={3}
          center
          checkoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/ca6edb2f-bc64-43aa-88d1-b1eade4218fa?refId=${user?.id}`}
          discountedCheckoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/6371576f-a7fd-4ef1-8c7c-995340c6271e?refId=${user?.id}`}

        />
        <MembershipPlanUpgrade
          page
          apy={7}
          price={829.99}
          planType={12}
          checkoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/de4ee858-bed4-451e-9f21-ac6ef8f4c239?refId=${user?.id}`}
          discountedCheckoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/9ca03ad2-1fe7-4da3-a54d-544376ddaaa8?refId=${user?.id}`}
        />
      </div>
      <MembershipSwiper aiPage={aiPage ? true : false} />
    </div>
  )
}

export default MembershipPlansUpgradeCard
