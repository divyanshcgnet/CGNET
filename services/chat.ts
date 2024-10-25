import { IChat } from '@/context/HistoryContext'
import axios from 'axios'
import { MessageTypeEnum } from '@/types/iMessage'

const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const addUserChat = async (data: IChat) => {
  return axios.put(`${process.env.NEXT_PUBLIC_API_URL}/chat`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const getTimeChat = async (data: { time: string }) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const patchChat = async (data: { chatId: string; message: string }) => {
  return axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const getUserChat = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

export const getUserChatMessages = async (threadId: string) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/chat/message?threadId=${threadId}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
}

export const deleteChat = async (threadId: string) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/chat?threadId=${threadId}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
}

export const addMessage = async (data: {
  threadId: string
  content: string
  role: MessageTypeEnum
}) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat/message`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
}

