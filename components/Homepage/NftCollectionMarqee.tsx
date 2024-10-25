'use client'

import NftCard from '../shared/NftCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const NftCollectionMarqee = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={'auto'}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      }}
      loop={true}
      modules={[Autoplay]}
      allowTouchMove={false}
      breakpoints={{
        768: {
          spaceBetween: 30,
        },
      }}
      className='marqueeSwiper'
    >
      <SwiperSlide>
        <NftCard
          imageUrl="/Nft/nft (1).png"
          id="ajfp90834hpf9ha047fgaio3w4fbnop9a87wg4f"
          name="CyberTek"
          price={4.4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard
          imageUrl="/Nft/nft (2).png"
          id="ajfp90834hpf9ha047fgaio3w4fbnop9a87wg4f"
          name="CyberTek"
          price={4.4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard
          imageUrl="/Nft/nft (3).png"
          id="ajfp90834hpf9ha047fgaio3w4fbnop9a87wg4f"
          name="CyberTek"
          price={4.4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard
          imageUrl="/Nft/nft (4).png"
          id="ajfp90834hpf9ha047fgaio3w4fbnop9a87wg4f"
          name="CyberTek"
          price={4.4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard
          imageUrl="/Nft/nft (5).png"
          id="ajfp90834hpf9ha047fgaio3w4fbnop9a87wg4f"
          name="CyberTek"
          price={4.4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NftCard
          imageUrl="/Nft/nft (6).png"
          id="ajfp90834hpf9ha047fgaio3w4fbnop9a87wg4f"
          name="CyberTek"
          price={4.4}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default NftCollectionMarqee
