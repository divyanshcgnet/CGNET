'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Experience = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden px-4 py-20 text-center mmd:px-16">
      <div className="mb-16 text-3xl font-bold md:text-5xl">
        Hear Voices of Experience
      </div>
      <div className="grid max-w-full grid-cols-2 items-center md:gap-x-4 gap-x-12 gap-y-8 md:flex">
        <button
          id="experienceSwiperNavigationLeft"
          className="row-start-2 flex !aspect-square md:h-16 md:w-16 h-8 w-8 items-center justify-center place-self-end rounded-full border border-themeGrey/40 bg-themeBlack/80 md:place-self-center"
        >
          <BiChevronLeft className="text-2xl md:!text-5xl" />
        </button>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          className="experienceSwiper !col-span-2"
          navigation={{
            nextEl: '#experienceSwiperNavigationLeft',
            prevEl: '#experienceSwiperNavigationRight',
          }}
        >
          <SwiperSlide>
            <div className="relative h-fit w-full overflow-hidden rounded-xl mmd:w-3/5">
              <Image
                src="/Homepage/Experience/experience.png"
                width={673}
                height={505}
                alt=""
                className="relative z-0 w-full object-cover"
              />
              <button className="absolute bottom-0 left-0 right-0 top-0 z-1 m-auto flex h-fit w-fit items-center gap-2 rounded-full border-2 border-themeTextGrey/40 bg-themeBlack/30 px-4 py-2 font-semibold backdrop-blur-lg">
                <FaPlay /> View Live
              </button>
            </div>
            <div className="absolute right-0 top-[95%] md:top-[80%] rounded-3xl border-2 border-themeTextGrey/80 bg-themeBlack/70 p-6 text-left backdrop-blur-lg md:p-8 md:text-xl mmd:w-[700px]">
              Cryptograd paves the way for effortless learning in the
              cryptocurrency space, granting every user the ability to learn. By
              seamlessly blending AI and the camaraderie of the community, it
              bridges the divide and solves asymmetry to unlock the full
              potential of blockchain
              <div className="mt-8 flex gap-4">
                <Image
                  src="/Homepage/Experience/user.png"
                  className="aspect-square object-contain"
                  width={62}
                  height={62}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <div className="text-xl font-bold md:text-2xl">
                    Marks- Matt Davis
                  </div>
                  <div>Instructor</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          id="experienceSwiperNavigationRight"
          className="flex !aspect-square md:h-16 md:w-16 h-8 w-8 items-center justify-center place-self-start rounded-full border border-themeGrey/40 bg-themeBlack/80 md:place-self-center"
        >
          <BiChevronRight className="text-2xl md:!text-5xl" />
        </button>
      </div>
    </div>
  )
}

export default Experience
