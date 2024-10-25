'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import Animated from '../shared/Animated'

const PartneredNfts = () => {
  return (
    <Animated className="flex items-center justify-center object-cover object-center w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        className="partneredNftsSwiper"
      >
        <SwiperSlide>
          <Image
            src="/Homepage/ParteneredNfts/penguin.svg"
            width={431}
            height={538}
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Homepage/ParteneredNfts/ape.svg"
            width={431}
            height={538}
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Homepage/ParteneredNfts/clone.svg"
            width={431}
            height={538}
            alt=""
            className="h-full w-full object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </Animated>
  )
}

export default PartneredNfts
