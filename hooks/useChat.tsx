import { HistoryContext, IHistoryCtx } from '@/context/HistoryContext'
import { useContext } from 'react'

const useChat = () => {
  const { addChat, allChat, getChat } = useContext(
    HistoryContext
  ) as IHistoryCtx
  return { addChat, allChat, getChat }
}

export default useChat
