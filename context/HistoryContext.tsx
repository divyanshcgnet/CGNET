'use client'

import { addUserChat, getTimeChat, getUserChat } from '@/services/chat'
import { Children } from '@/types/generics'
import { createContext, useEffect, useState } from 'react'

export interface IChat {
  threadId: string
  title: string
  chatType: string
  aiResponse?: string
  createdAt?: string
}

export interface IHistoryCtx {
  addChat: (chat: IChat) => Promise<void>
  allChat: IChat[]
  getChat: () => Promise<void>
}

export const HistoryContext = createContext<IHistoryCtx | null>(null)

export const HistoryProvider = ({ children }: Children) => {
  const [allChat, setAllChat] = useState<IChat[]>([])

  const getChat = async () => {
    const res = await getUserChat()
    console.log(res.data)

    setAllChat([...res.data.reverse()])
  }

  const addChat = async (chat: IChat) => {
    try {
      await addUserChat(chat)
      await getChat()
    } catch (error) {
      console.log(error)
    }
  }

  const getTime = async () => {
    try {
      const res = await getTimeChat({ time: '2024-01-01' })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChat()
    getTime()
  }, [])

  return (
    <HistoryContext.Provider value={{ addChat, allChat, getChat }}>
      {children}
    </HistoryContext.Provider>
  )
}
