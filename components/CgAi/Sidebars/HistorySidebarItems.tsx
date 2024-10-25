'use client'

import Link from 'next/link'
import { IoMdAdd } from 'react-icons/io'

const TIMELINE = [
  {
    title: 'Today',
    path: 'today',
  },
  {
    title: 'Yesterday',
    path: 'yesterday',
  },
  {
    title: 'This Week',
    path: 'week',
  },
  {
    title: 'This Month',
    path: 'month',
  },
  {
    title: 'Last 3 Months',
    path: 'quater',
  },
  {
    title: 'Last 6 Months',
    path: 'half-year',
  },
  {
    title: 'This Year',
    path: 'year',
  },
]

export default function HistorySidebarItems({
  handleClose,
}: {
  handleClose?: () => void
}) {
  const closeSidebar = () => {
    handleClose && handleClose()
  }
  return (
    <>
      <div className="mt-4 flex flex-col gap-4">
        <Link
          href={'/CG-AI/chat/chat-genius/newChat'}
          onClick={closeSidebar}
          className="mx-4 flex min-h-[2.5rem] w-fit items-center justify-center gap-2 !rounded-full bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
        >
          <IoMdAdd className="text-3xl" /> New Chat
        </Link>
      </div>
      <div className="flex flex-col">
        {TIMELINE.map((item) => (
          <Link
            key={item.title}
            onClick={closeSidebar}
            href={`/CG-AI/chat/history/${item.path}`}
            className="px-4 py-2 odd:bg-themeAiChatSidebarBgDark even:bg-themeAiChatSidebarBgLight"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </>
  )
}
