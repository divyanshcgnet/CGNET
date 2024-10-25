'use client'

import { useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

export default function ChartBar({
  value,
  tag,
  height,
}: {
  value: number
  tag: string
  height: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting
  return (
    <div
      ref={ref}
      style={{
        opacity: `${height}%`,
      }}
      className="flex h-full flex-col items-center justify-end gap-2"
    >
      <div
        className={`min-h-6 text-sm font-semibold transition-all delay-700 duration-300  ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {value}%
      </div>
      <div
        style={{
          minHeight: `${isVisible ? height : 0}%`,
        }}
        className={`flex w-12 items-end justify-center rounded-t-md bg-[#5E5AFF] font-semibold shadow-2xl shadow-[#5E5AFF] duration-1000`}
      >
        {tag}
      </div>
    </div>
  )
}
