'use client'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import MembershipNewCard from './MembershipNewCard'
import { usePrivy } from '@privy-io/react-auth'

export default function MembershipSwiper({ aiPage }: { aiPage?: boolean }) {
  const { user } = usePrivy()

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={8}
      initialSlide={1}
      className={`membershipSwiper block ${
        aiPage ? 'xl:!hidden' : 'mmd:!hidden'
      }`}
    >
      <SwiperSlide>
        <MembershipNewCard
          page
          apy={2}
          price={129.99}
          planType={1}
          fit
          checkoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/895d2e06-6159-4586-98e4-bc4a8cbc4e58?refId=${user?.id}`}
          discountedCheckoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/4a0d07fb-1840-495a-ae75-63b5a7769036?refId=${user?.id}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MembershipNewCard
          page
          apy={4}
          price={329.99}
          planType={3}
          fit
          checkoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/ca6edb2f-bc64-43aa-88d1-b1eade4218fa?refId=${user?.id}`}
          discountedCheckoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/6371576f-a7fd-4ef1-8c7c-995340c6271e?refId=${user?.id}`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MembershipNewCard
          page
          apy={7}
          price={1199.99}
          planType={12}
          fit
          checkoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/de4ee858-bed4-451e-9f21-ac6ef8f4c239?refId=${user?.id}`}
          discountedCheckoutLink={`https://checkout.loopcrypto.xyz/42796c68-23af-4581-a4ef-6ef06002910e/9ca03ad2-1fe7-4da3-a54d-544376ddaaa8?refId=${user?.id}`}
        />
      </SwiperSlide>
    </Swiper>
  )
}
