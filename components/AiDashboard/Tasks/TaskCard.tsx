import Image from 'next/image'
import Link from 'next/link'
interface ITaskCard {
  name: string
  icon: string
  description: string
  tab: 'chat-genius' | 'trade-analyzer' | 'contract-insight' | 'crypto-buzz'
}
const TaskCard = ({ name, icon, description, tab }: ITaskCard) => {
  return (
    <Link
      href={`/CG-AI/chat/${tab}/newChat?tab=beginner&prompt=${name}`}
      className={`col-span-4 flex aspect-[8/7] cursor-pointer flex-col justify-between md:gap-4 rounded-2xl bg-[#25252E] p-4 opacity-[0.9] md:col-span-2 md:aspect-auto md:min-h-[11rem]`}
    >
      <p className="text-sm font-medium leading-[140%] text-white/80 md:text-xl">
        {name}
      </p>
      {description !== '' && icon !== '' ? (
        <div className="flex items-center gap-2">
          <p className="text-xs font-normal leading-[140%] text-white/80 md:text-sm ">
            {description}
          </p>
          <Image
            src={icon}
            alt=""
            className="h-4 w-4"
            height={800}
            width={800}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2"></div>
      )}
    </Link>
  )
}

export default TaskCard
