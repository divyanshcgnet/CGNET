'use client'

import { useIntersectionObserver } from 'usehooks-ts'
import { useRef } from 'react'
import Image from 'next/image'

const NeverMissABeatAnimatedCards = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div
      ref={ref}
      className="relative mr-8 mt-16 h-[524px] w-[320px] sm:scale-100 scale-75 ml-36"
    >
      <Image
        src="/Homepage/CardEffect/card1.svg"
        width={249}
        height={304}
        alt=""
        className={`${
          isVisible ? 'right-0 rotate-[10deg] delay-200' : 'right-0 rotate-0'
        } absolute z-1 transition-all duration-1000`}
      />
      <Image
        src="/Homepage/CardEffect/card2.svg"
        width={249}
        height={304}
        alt=""
        className={`${
          isVisible
            ? 'right-28 top-16 -rotate-12 delay-200'
            : 'right-8 top-8 rotate-0'
        } absolute z-3 transition-all duration-1000`}
      />
      <Image
        src="/Homepage/CardEffect/card3.svg"
        width={249}
        height={304}
        alt=""
        className={`${
          isVisible
            ? 'right-48 top-48 -rotate-[35deg] delay-200'
            : 'right-16 top-16 rotate-0'
        } absolute z-3 transition-all duration-1000`}
      />
    </div>
  )
}

export default NeverMissABeatAnimatedCards
