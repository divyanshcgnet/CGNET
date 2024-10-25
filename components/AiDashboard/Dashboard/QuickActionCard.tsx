import Image from 'next/image'
import Link from 'next/link'
interface IQuickActionCard {
  name: string
  icon: string
  action: string
  color: string
  key: number
  path: string
}
const QuickActionCard = ({
  name,
  icon,
  action,
  color,
  key,
  path,
}: IQuickActionCard) => {
  const textColorClass =
    icon === '/CgAi/ChatAi/chartUp.png'
      ? 'bg-[#1C55D5]'
      : icon === '/CgAi/ChatAi/settings.png'
        ? 'bg-[#5218FE]'
        : 'bg-[#B418FE]'
  return (
    <Link
      href={path}
      className={`col-span-2 flex flex-col justify-between rounded-2xl px-4 py-4 md:px-8 ${textColorClass} gap-8 w-full cursor-pointer md:h-32`}
    >
      <p className="text-xl font-semibold leading-[140%] text-white/90 md:text-2xl ">
        {name}
      </p>
      <div className="flex items-center gap-2">
        {/* <p className="text-sm leading-[140%] text-white/90 md:text-base">
          {action}
        </p> */}
        {/* {icon !== '' && (
          <Image
            className="h-6 w-6"
            src={icon}
            alt=""
            width={800}
            height={800}
          />
        )} */}
      </div>
    </Link>
  )
}

export default QuickActionCard