import Image from 'next/image'
import Link from 'next/link'

interface INotificaion {
  type: 'hype' | 'announcement' | 'tip' | 'warn' | 'reminder'
  content: string
  url: string
}

export default async function NotificationPage() {
  const notificationsToday: INotificaion[] = [
    {
      type: 'hype',
      content:
        "Congratulations! You won this week's leaderboard! Check your mail to get more info about your rewards.",
      url: '#',
    },
    {
      type: 'announcement',
      content: 'Neeti followed you',
      url: '#', //* need path to some page
    },
    {
      type: 'tip',
      content:
        "Only 15 minutes remaining to complete today's goal! Continue learning Lesson 6: Lorem ipsum",
      url: '#',
    },
  ]
  const notificationsThisWeek: INotificaion[] = [
    {
      type: 'warn',
      content:
        "Congratulations! You won this week's leaderboard! Check your mail to get more info about your rewards.",
      url: '#',
    },
    {
      type: 'announcement',
      content: 'Neeti followed you',
      url: '#', //* need path to some page
    },
    {
      type: 'reminder',
      content:
        "Only 15 minutes remaining to complete today's goal! Continue learning Lesson 6: Lorem ipsum",
      url: '#',
    },
  ]
  return (
    <div className="flex w-full flex-col gap-8 p-4">
      <div className="flex justify-end">
        <button className="font-light text-themeBorderBlue">
          Notification Settings
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-white/40">Today</div>
        {notificationsToday.map((item, i) => (
          <div
            key={i + item.type}
            className="relative flex items-center gap-3 py-4 after:absolute after:bottom-0 after:left-0 after:right-1/2  after:border-b after:border-white/30"
          >
            <Image
              src={`/CgAi/Notifications/${item.type}.svg`}
              alt=""
              width={32}
              height={32}
            />
            <div className="flex flex-grow">{item.content}</div>
            {item.url !== '#' && (
              <Link
                href={item.url}
                className="flex min-h-[2.5rem] cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
              >
                Know More
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-white/40">Today</div>
        {notificationsThisWeek.map((item, i) => (
          <div
            key={i + item.type}
            className="relative flex items-center gap-3 py-4 after:absolute after:bottom-0 after:left-0 after:right-1/2  after:border-b after:border-white/30"
          >
            <Image
              src={`/CgAi/Notifications/${item.type}.svg`}
              alt=""
              width={32}
              height={32}
            />
            <div className="flex flex-grow">{item.content}</div>
            {item.url !== '#' && (
              <Link
                href={item.url}
                className="flex min-h-[2.5rem] cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
              >
                Know More
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
