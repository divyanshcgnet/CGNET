'use client'

import { abbriviate } from '@/utils/numberFix'
import moment from 'moment'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { AiOutlineBook } from 'react-icons/ai'
import { getAllNews } from '@/services/coinmarket'
import Loader from '@/components/shared/Loader'
import { getAllBlogs } from '@/services/blog'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface IFeed {
  _id: string
  title: string
  description:string

  thumbnail:string
}

const Blog = () => {
  const router = useRouter()
  const [tab, setTab] = useState<'feed' | 'bookmark'>('feed')
  const [feed, setFeed] = useState<IFeed[]>([])
  const [selectedInfo, setSelectedInfo] = useState<IFeed | undefined>()

  const getNews = async () => {
    const res = await getAllBlogs()
    setFeed(res)
    // const res = await getAllNews()
    // setFeed(res)
    console.log(res)
  }
  

  useEffect(() => {
    getNews()
  }, [])

  return feed.length > 0 ? (
    <div className="pageHeight relative flex w-full flex-col overflow-hidden py-4 md:gap-8 md:px-8 md:py-8">
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
      {/*<div className="relative z-1 flex">*/}
      {/*  <button*/}
      {/*    className={`w-full pb-2 ${*/}
      {/*      tab === 'feed'*/}
      {/*        ? 'border-b-2 border-themeBorderBlue font-semibold text-themeBorderBlue'*/}
      {/*        : 'border-b border-white/20'*/}
      {/*    }`}*/}
      {/*    onClick={() => setTab('feed')}*/}
      {/*  >*/}
      {/*    Feed*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    className={`w-full pb-2 ${*/}
      {/*      tab === 'bookmark'*/}
      {/*        ? 'border-b-2 border-themeBorderBlue font-semibold text-themeBorderBlue'*/}
      {/*        : 'border-b border-white/20'*/}
      {/*    }`}*/}
      {/*    onClick={() => setTab('bookmark')}*/}
      {/*  >*/}
      {/*    Bookmark*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*{!selectedInfo && (*/}
      <div className="relative z-1 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8 md:p-0">
        {feed.map((item) => (
          <div onClick={()=>router.push(`/CG-AI/blog/${item._id}`)}
            key={item._id}
            className="cursor-pointer grid grid-cols-1 overflow-hidden rounded-2xl bg-[#23232E] text-left first:gap-0 md:first:col-span-2 md:first:grid-cols-2 md:first:gap-4"
          >
            <div className="relative aspect-[5/3] h-full min-h-[200px] w-full">
              <Image
                src={item.thumbnail}
                fill
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-full w-full flex-col gap-2 p-4">
              <div className="span text-2xl font-semibold">{item.title}</div>
              <div className="h-full flex-grow text-white/40">
                {item.description}
              </div>
              <div className="flex justify-between">
                <Link
                  href={{pathname:`/CG-AI/blog/${item._id}`}}
                  // target="_blank"
                  // onClick={() => setSelectedInfo(item)}
                  // rel={"noreferrer noopener"}
                  className="text-sm text-themeBorderBlue underline"
                >
                  Read More
                </Link>
                {/*<button className="text-xl text-themeBorderBlue">*/}
                {/*  <AiOutlineBook />*/}
                {/*</button>*/}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*)}*/}
      {/*{selectedInfo && (*/}
      {/*  <div className="relative z-1 flex flex-col p-4 md:p-0">*/}
      {/*    <div className="flex items-start justify-between gap-4">*/}
      {/*      <h1 className="text-2xl font-semibold">{selectedInfo?.title}</h1>*/}
      {/*      <button*/}
      {/*        onClick={() => setSelectedInfo(undefined)}*/}
      {/*        className="text-3xl text-white/40 transition-all hover:text-white/80"*/}
      {/*      >*/}
      {/*        <IoIosCloseCircleOutline />*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    /!*<div className="mt-4 flex flex-col"></div>*!/*/}
      {/*    <div className="mt-8 flex flex-col gap-6">*/}
      {/*      <div className="relative aspect-video w-full">*/}
      {/*        <Image*/}
      {/*          src={selectedInfo.cover}*/}
      {/*          fill*/}
      {/*          alt=""*/}
      {/*          className="object-cover"*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      {selectedInfo.body.map((para, i) => (*/}
      {/*        <p key={i}>{para}</p>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  ) : (
    <div className="pageHeight flex w-full items-center justify-center">
      <Loader />
    </div>
  )
}

export default Blog
