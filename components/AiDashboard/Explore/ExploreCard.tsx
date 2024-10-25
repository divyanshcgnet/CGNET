import Image from 'next/image'
import Link from 'next/link'

export interface IExploreData {
  name: string
  icon: string
  text: string
  type: string
  path: string
  target?: boolean
  active?: boolean
}
interface IExploreCard {
  data: IExploreData
}
const ExploreCard = ({ data }: IExploreCard) => {
  const { name, icon, text, type, path, target } = data
  return (
    <Link
      href={data.active === false ? '#' : path}
      target={target ? '_blank' : '_self'}
      rel={target ? 'noreferrer noopener' : undefined}
      className={`relative flex h-full ${
        data.active === false ? '' : 'hover:bg-themeBorderBlue'
      } group flex-col items-center gap-4 overflow-hidden rounded-2xl bg-themeBgBlack transition-all`}
    >
      {data.active === false && (
        <div className="absolute z-1 flex h-full w-full items-center justify-center opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <span className="text-2xl font-bold">Coming Soon...</span>
        </div>
      )}
      <div className="flex w-full flex-col justify-start gap-4 p-4 pt-6">
        <div className="relative h-20 w-20">
          <Image
            className="h-fit object-contain object-left"
            src={icon}
            alt=""
            fill
          />
        </div>
        <p className="text-lg font-semibold leading-[130%] md:text-xl">
          {name}
        </p>
        {/*<div className="absolute right-2 top-4 w-fit rounded-full border-2 border-[#6754F8] bg-black px-3 font-light">*/}
        {/*  {type}*/}
        {/*</div>*/}
        <p className="font-normal leading-[140%] text-white/40">{text}</p>
      </div>
    </Link>
  )
}

export default ExploreCard
