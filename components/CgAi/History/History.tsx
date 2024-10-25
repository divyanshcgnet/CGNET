'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'
import useChat from '@/hooks/useChat'
import { getTimeChat } from '@/services/chat'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

export default function History({ params }: { params: { timeline: string } }) {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const { allChat } = useChat()

  const getChat = async () => {
    const dates: {
      [key: string]: string
    } = {
      today: moment().format('YYYY-MM-DD'),
      yesterday: moment().subtract(1, 'd').format('YYYY-MM-DD'),
      week: moment().subtract(7, 'd').format('YYYY-MM-DD'),
      month: moment().subtract(1, 'M').format('YYYY-MM-DD'),
      quater: moment().subtract(3, 'M').format('YYYY-MM-DD'),
      'half-year': moment().subtract(6, 'M').format('YYYY-MM-DD'),
      year: moment().subtract(1, 'y').format('YYYY-MM-DD'),
    }

    const res = await getTimeChat({ time: dates[params.timeline] })
    console.log(res)
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSelect = (id: string) => {
    const idx = selected.findIndex((sel) => sel === id)
    if (idx < 0) return setSelected([...selected, id])
    const tempArr = selected.filter((item) => item !== id)
    setSelected([...tempArr])
  }

  return (
    <div className="fixedHeight relative flex w-full flex-col gap-4 overflow-hidden p-4">
      <Image
        src="/Referral/ellipse-right.svg"
        alt=""
        width={526}
        height={526}
        className="absolute -top-[20%] right-0 z-0 hidden w-full blur-2xs md:block"
      />
      <Image
        src="/effects/ellipse-1.svg"
        className="absolute left-0 top-0 z-0 hidden h-full w-full object-cover opacity-30 md:block"
        alt=""
        width={435}
        height={640}
      />
      <Image
        src="/effects/hero-eff-1.svg"
        className="absolute -top-[500px] z-0 hidden opacity-80 md:block"
        alt=""
        width={870}
        height={609}
      />
      <div className="relative z-1 flex w-full items-center rounded-xl bg-themeNavBlack p-4">
        <input
          type="text"
          value={search}
          className="w-full border-none bg-inherit outline-none"
          onChange={handleSearch}
          placeholder="Search"
        />
        <IoSearch className="text-white/40" />
      </div>
      <div className="relative z-1 flex flex-col overflow-y-scroll">
        {allChat.map((item) => (
          <Link
            href={`/CG-AI/chat/${item.chatType}/${item.threadId}`}
            key={item.threadId}
            // onClick={() => handleSelect(item.threadId)}
            className="relative p-4 pr-6 text-left"
          >
            <div>{item.title}</div>
            <div className="mt-2 truncate text-white/40">{item.aiResponse}</div>
            {/*<div className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-themeBorderBlue md:bottom-auto md:top-2 md:translate-y-0">*/}
            {/*  {selected.find((elem) => elem === item.threadId) ? (*/}
            {/*    <FaRegCheckCircle />*/}
            {/*  ) : (*/}
            {/*    <FaRegCircle />*/}
            {/*  )}*/}
            {/*</div>*/}
          </Link>
        ))}
      </div>
    </div>
  )
}
