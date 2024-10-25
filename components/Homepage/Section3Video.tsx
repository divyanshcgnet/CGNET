'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { FaCirclePause, FaCirclePlay } from 'react-icons/fa6'

const Section3Video = () => {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<any>(null)

  const control = () => {
    if (videoRef.current.currentTime > 0 && !videoRef.current.paused) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-themeVideoBgGrey">
      <div className="absolute left-1/2 top-1/2 z-1 flex h-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <Image src="/logo.png" width={200} height={32} className="" alt="" />
        <div className="text-sm font-medium">CRYPTOGRD</div>
      </div>
      <video ref={videoRef} className="relative z-2 h-full w-full">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <button
        onClick={control}
        className="absolute bottom-4 right-4 z-5 text-themeBorderBlue md:bottom-8 md:right-8"
      >
        {playing ? (
          <FaCirclePause className="text-4xl mmd:text-7xl" />
        ) : (
          <FaCirclePlay className="text-4xl mmd:text-7xl" />
        )}
      </button>
    </div>
  )
}

export default Section3Video
