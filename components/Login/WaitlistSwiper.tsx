import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

export default function WaitlistSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={'auto'}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      loop={true}
      modules={[Autoplay]}
      allowTouchMove={false}
      className="marqueeSwiperBackers"
    >
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-3.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Chat Genius
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-4.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Trade Analyser
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-2.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Contract Insight
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-1.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Crypto Buzz
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-3.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Chat Genius
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-4.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Trade Analyser
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-2.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Contract Insight
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-1.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Crypto Buzz
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-3.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Chat Genius
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-4.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Trade Analyser
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-2.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Contract Insight
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-1.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Crypto Buzz
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-3.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Chat Genius
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-4.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Trade Analyser
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-2.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Contract Insight
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full !max-w-fit items-center justify-center">
          <Image
            src="/CgAi/ChatAi/chat-ai-1.png"
            className="h-6 w-6 object-cover"
            height={500}
            width={500}
            alt=""
          />
          Crypto Buzz
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
