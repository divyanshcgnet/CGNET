import Button from '@/components/shared/Button'
import { IChat } from '@/context/HistoryContext'
import useChat from '@/hooks/useChat'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsChatText } from 'react-icons/bs'
import { FiTrash2 } from 'react-icons/fi' 
import { differenceInCalendarDays, parseISO } from 'date-fns'
import { deleteChat } from '@/services/chat'

export default function ChatSidebarItems({
  handleClose,
}: {
  handleClose?: () => void
}) {
  const [todayChat, setTodayChat] = useState<IChat[]>([])
  const [yesterdayChat, setYesterdayChat] = useState<IChat[]>([])
  const [weekChat, setWeekChat] = useState<IChat[]>([])
  const [monthChat, setMonthChat] = useState<IChat[]>([])
  const [laterChat, setLaterChat] = useState<IChat[]>([])
  const [hoveredThreadId, setHoveredThreadId] = useState<string | null>(null)

  const closeSidebar = () => {
    handleClose && handleClose()
  }

  const newChat = () => {
    router.push(`/CG-AI/chat/${params.chatType}/newChat`)
    closeSidebar()
  }

  const params: {
    chatType:
      | 'chat-genius'
      | 'trade-analyzer'
      | 'contract-insight'
      | 'crypto-buzz'
  } = useParams()
  const { allChat } = useChat()
  const router = useRouter()

  useEffect(() => {
    const today : IChat[] = []
    const yesterday : IChat[] = []
    const week : IChat[] = []
    const month : IChat[] = []
    const later : IChat[] = []

    const now = new Date()

    allChat.forEach((chat) => {
      if (chat.createdAt) {
        const chatDate = parseISO(chat.createdAt);
        const diffDays = differenceInCalendarDays(now, chatDate);
    
        if (diffDays === 0) {
          today.push(chat);
        } else if (diffDays === 1) {
          yesterday.push(chat);
        } else if (diffDays <= 7) {
          week.push(chat);
        } else if (diffDays <= 30) {
          month.push(chat);
        } else {
          later.push(chat);
        }
      }
    });

    setTodayChat(today)
    setYesterdayChat(yesterday)
    setWeekChat(week)
    setMonthChat(month)
    setLaterChat(later)
  }, [allChat])

  const handleDelete = useCallback(async (threadId: string) => {
    try {
      await deleteChat(threadId)
      setTodayChat(todayChat.filter(chat => chat.threadId !== threadId))
      setYesterdayChat(yesterdayChat.filter(chat => chat.threadId !== threadId))
      setWeekChat(weekChat.filter(chat => chat.threadId !== threadId))
      setMonthChat(monthChat.filter(chat => chat.threadId !== threadId))
      setLaterChat(laterChat.filter(chat => chat.threadId !== threadId))
    } catch (error) {
      console.error("Failed to delete chat", error)
    }
  }, [todayChat, yesterdayChat, weekChat, monthChat, laterChat])

  return (
    <>
            <Link
        href="/CG-AI/chat/chat-genius/newChat"
        onClick={closeSidebar}
        className={`relative flex items-center gap-2 p-4 text-lg transition-all hover:bg-themeAiChatSidebarBgLight ${
          params.chatType === 'chat-genius'
            ? 'bg-themeAiChatSidebarBgLight font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image
          src="/CgAi/ChatAi/chat-ai-3.png"
          className="h-12 w-12 object-cover"
          height={500}
          width={500}
          alt=""
        />
        Chat Genius
      </Link>
      <Link
        href="/CG-AI/chat/trade-analyzer/newChat"
        // href={'#'}

        onClick={closeSidebar}
        className={`relative flex items-center gap-2 p-4 text-lg transition-all hover:bg-themeAiChatSidebarBgLight ${
          params.chatType === 'trade-analyzer'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image
          src="/CgAi/ChatAi/chat-ai-4.png"
          className="h-12 w-12 object-cover"
          height={500}
          width={500}
          alt=""
        />
        Trade Analyser
      </Link>
      <Link
        href="/CG-AI/chat/crypto-buzz/newChat"
        onClick={closeSidebar}
        // href={'#'}
        className={`relative flex items-center gap-2 p-4 text-lg transition-all hover:bg-themeAiChatSidebarBgLight ${
          params.chatType === 'crypto-buzz'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image
          src="/CgAi/ChatAi/chat-ai-1.png"
          className="h-12 w-12 object-cover"
          height={500}
          width={480}
          alt=""
        />

        Crypto Buzz
      </Link>
      <Link
        href="/CG-AI/chat/contract-insight/newChat"
        // href={'#'}
        onClick={closeSidebar}
        className={`relative flex items-center gap-2 p-4 text-lg transition-all hover:bg-themeAiChatSidebarBgLight ${
          params.chatType === 'contract-insight'
            ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:top-0 after:h-full after:w-2 after:bg-themeBorderBlue'
            : 'text-white/80'
        }`}
      >
        <Image
          src="/CgAi/ChatAi/chat-ai-2.png"
          className="h-12 w-12 object-cover"
          height={500}
          width={500}
          alt=""
        />
        Contract Insight
      </Link>
      <div className="flex flex-col items-center gap-4 py-4">
        <Button onClick={newChat} className="mx-4 w-fit !rounded-full">
          <IoMdAdd className="text-3xl" /> New Chat
        </Button>
      </div>
      <div className="flex flex-grow flex-col gap-4 overflow-y-scroll">
        {['Today', 'Yesterday', 'Previous 7 Days', 'This Month', 'Later'].map((label, index) => {
          const chats = [todayChat, yesterdayChat, weekChat, monthChat, laterChat][index];
          return (
            <div className="flex flex-col" key={label}>
              <span className="p-4 text-white/30">{label}</span>
              {chats.map((item) => (
                <div
                  key={item.threadId}
                  className="relative flex items-center gap-2 truncate bg-themeAiChatSidebarBgLight px-4 py-2 transition-all hover:bg-white/10"
                  onMouseEnter={() => setHoveredThreadId(item.threadId)}
                  onMouseLeave={() => setHoveredThreadId(null)}
                >
                  <Link
                    href={`/CG-AI/chat/${item.chatType}/${item.threadId}`}
                    onClick={closeSidebar}
                    className="flex items-center gap-2 truncate flex-grow"
                  >
                    <BsChatText className={'min-w-fit'} />
                    <span className="truncate">{item.title}</span>
                  </Link>
                  {hoveredThreadId === item.threadId && (
                    <button
                      onClick={() => handleDelete(item.threadId)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-red-500 transition-opacity hover:opacity-100"
                    >
                      <FiTrash2 />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </>
  )
}
