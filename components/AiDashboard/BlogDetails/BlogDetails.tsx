'use client'

import Image from 'next/image'
import { ImFacebook2 } from 'react-icons/im'
import { SiLinkedin } from 'react-icons/si'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Blog, Section, getBlogById } from '@/services/blog'
import Loader from '@/components/shared/Loader'

const BlogDetails = () => {
  const params = useParams()
  const [blog, setBlog] = useState<Blog | undefined>()
  const blogDetails = async () => {
    const data: Blog = await getBlogById(String(params.id))
    console.log(data)
    setBlog(data)
  }
  function formatMonthDateYear(createdAt: string) {
    return new Date(createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formattedDate = formatMonthDateYear('2024-06-27T14:07:30.472Z')
  console.log(formattedDate)
  useEffect(() => {
    blogDetails()
  }, [])
  return !blog ? (
    <div className="pageHeight flex w-full items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className="pageHeight relative flex w-full flex-col overflow-hidden py-4 md:gap-8 md:py-8">
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

      <div className={'relative z-1 grid grid-cols-1'}>
        <div
          className={
            'z-10 text-center text-3xl font-bold md:text-5xl lg:pl-20 lg:pr-20 lg:pt-20'
          }
        >
          {blog.title}
          {/* Cryptograd: Your Expert Wealth Manager In The Web 3.0 Crypto World */}
        </div>
        <div
          className={
            'z-10  mt-6 flex items-center justify-center gap-2 text-2xl font-light'
          }
        >
          <ImFacebook2 /> <SiLinkedin />{' '}
          <FaSquareXTwitter className={'text-[28px]'} />
        </div>
        <div className={'mt-10 flex items-center justify-center'}>
          {formatMonthDateYear(blog.createdAt)}
        </div>
        <Image
          src={blog.thumbnail}
          alt=""
          width={1000}
          height={609}
          className="mt-4 h-auto w-[100%]"
        />
        <div className={'p-6 lg:pl-40 lg:pr-40'}>
          {blog.sections.length &&
            blog.sections.map((section: Section) => {
              if (section.type === '0') {
                return (
                  <div key={section._id}>
                    <div className={'mt-16 text-2xl font-bold lg:text-4xl'}>
                      {section.title}
                    </div>
                    <p className="font-DM mt-4 lg:text-lg">{section.content}</p>
                  </div>
                )
              }
              if (section.type === '1' && section.image) {
                return (
                  <div key={section._id}>
                    <Image
                      src={section.image}
                      alt=""
                      width={870}
                      height={609}
                      className={'mt-12 h-80 rounded-xl object-cover'}
                    />
                    <div className="mb-12 mt-4 border border-2 border-b-0 border-r-0 border-t-0 border-solid border-slate-400">
                      <p className="ml-2">{section.caption}</p>
                    </div>
                  </div>
                )
              }
              if (section.type === '2' && section.graph) {
                return (
                  <div key={section._id}>
                    <div className={'flex justify-center p-8'}>
                      <iframe src={section.graph} className={'w-[75%] h-96 border rounded-xl'} />
                    </div>
                    <p className="font-DM mt-4 lg:text-lg">{section.content}</p>
                  </div>
                )
              }
            })}
        </div>

        <div className="relative mt-12 p-2 lg:pl-40 lg:pr-40">
          <div className="relative grid grid-cols-1 items-center justify-between gap-16 lg:grid-cols-2">
            <div className="flex flex-col items-center  lg:items-start">
              <div>Share this post</div>
              <div className="z-10 mt-2 flex items-center justify-center gap-2 text-2xl font-light ">
                <ImFacebook2 /> <SiLinkedin />{' '}
                <FaSquareXTwitter className="text-[28px]" />
              </div>
            </div>
            <div
              className={
                'flex items-center justify-center gap-2 lg:justify-end'
              }
            >
              {blog.tags.length ? blog.tags.map((tag,i)=>(
                <div key={i}>#{tag}</div>
              )) : <div></div>}
            </div>
          </div>
        </div>

        {/* <div className={'relative mt-24 lg:pl-40 lg:pr-40 p-2'}>
          <p>Share this post</p>

          <div className={'flex items-center justify-between'}>
            <div
              className={
                'z-10 mt-2 flex items-center justify-center gap-2 text-2xl font-light '
              }
            >
              <ImFacebook2 /> <SiLinkedin />{' '}
              <FaSquareXTwitter className={'text-[28px]'} />
            </div>

            <div>
              <p>#Tag</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default BlogDetails

{
  ;<div>
    <div className={'text-4xl font-bold'}></div>
    <p className="font-DM mt-4 text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis
      odio praesentium non alias nulla neque, aperiam, autem architecto fugiat
      exercitationem vero iste rerum ipsum quasi eum numquam magnam voluptates!
    </p>
    <Image
      src="/bitcoin.jpeg"
      alt=""
      width={870}
      height={609}
      className={'mt-12 rounded-xl object-cover'}
    />
    <div className="mb-12 mt-4 border border-2 border-b-0 border-r-0 border-t-0 border-solid border-slate-400">
      <p className="ml-2">Image Caption goes here</p>
    </div>

    <p className={'font-DM mt-4 text-lg'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quae non,
      rem reiciendis tempore minus. Nesciunt molestiae ullam quia, autem ipsam
      laborum eligendi libero explicabo odio corrupti molestias voluptas
      voluptatum.
    </p>
  </div>
}
