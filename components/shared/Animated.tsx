'use client'

import { Children } from '@/types/generics'
import { useIntersectionObserver } from 'usehooks-ts'
import { useRef } from 'react'

interface IAnimated extends Children {
  className?: string
  id?: string
  delay?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000
}

const Animated = ({ children, className, delay, id }: IAnimated) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div
      ref={ref}
      id={id}
      data-delay={delay ? delay : 0}
      className={`${
        isVisible ? `animated animationDelay animatedFadeInUp fadeInUp` : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Animated
