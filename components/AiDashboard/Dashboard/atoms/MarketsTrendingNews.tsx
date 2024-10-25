import Button from '@/components/shared/Button'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const MarketTrendingNews = ({
  news,
  noReadMore,
  tradeIdeas,
}: {
  news: any[]
  noReadMore?: boolean
  tradeIdeas?: boolean
}) => {
  return (
    <div className="col-span-6 flex h-fit flex-col gap-4 rounded-lg bg-[#20222B] p-4 mmd:col-span-3 xl:col-span-3 2xl:col-span-2 static ">
      <div className="text-xl font-medium text-white/80">Trending News</div>
      <div className="flex w-full flex-col gap-6">
        {news.map((item, i) => (
          <Link
            href={item.source_url}
            target="_blank"
            rel="noreferrer noopener"
            key={i}
            className="flex flex-col gap-2 border-b border-b-[#FFFFFF0D] py-2"
          >
            <p className="text-lg font-medium leading-[140%] text-white/80 ">
              {item.title}
            </p>
            <p className="text-sm font-medium leading-[140%] text-gray-400 ">
              {item.subtitle}
            </p>
            <div className={`flex items-center gap-2 py-2 ${tradeIdeas? "justify-start": "justify-center"}`}>
              <div className="flex items-center justify-center gap-1">
                {/*<Image*/}
                {/*  src={'/CgAi/ChatAi/self.png'}*/}
                {/*  className="h-4 w-4"*/}
                {/*  alt=""*/}
                {/*  height={800}*/}
                {/*  width={800}*/}
                {/*/>*/}
                <p className="text-sm font-medium text-gray-400 ">
                  {item.source_name}
                </p>
              </div>
              {/* <span className="text-sm">•</span> */}
              {/* <p className="text-sm font-medium text-gray-400 ">
                {moment(item.released_at).format('DD MMMM, YYYY')}
              </p> */}
              {/* <span className="text-sm">•</span> */}
              {/* <p className="text-sm font-medium text-gray-400 ">5 Min Read</p> */}
            </div>
          </Link>
        ))}
      </div>

      {!noReadMore && (
        <Link
          href={'/CG-AI/blog'}
          className="mt-4 flex min-h-[2.5rem] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          Read More News
        </Link>
      )}
    </div>
  )
}

export default MarketTrendingNews
