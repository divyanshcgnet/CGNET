import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
interface IExploreCard {
  name: string
  header: string
  availability: string
  path: string
}
const ExploreCard = ({ name, header, availability, path }: IExploreCard) => {
  return (
    <Link
      href={path}
      className={`col-span-6 flex cursor-pointer flex-col justify-between gap-4 rounded-2xl bg-[#25252E] p-6 md:col-span-3 md:p-8`}
    >
      <div className="flex w-fit items-center rounded-full border-2 border-[#6754F8] bg-black px-4 text-sm font-medium leading-6 shadow-lg shadow-white/5">
        {header}
      </div>
      <p className="text-2xl font-semibold text-white/80 ">{name}</p>
      <div className="mt-16 flex items-center gap-2">
        <p className="text-xl font-semibold text-[#A5A3FF]">{availability}</p>
        <FaArrowRight className="text-[#A5A3FF]" />
      </div>
    </Link>
  )
}

export default ExploreCard
