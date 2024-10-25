'use client'

import Image from 'next/image'
import OpenAI from 'openai'
import { Dispatch, memo, useCallback, useEffect, useState } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { useAccount } from 'wagmi'
import { MessageTypeEnum } from '@/types/iMessage'
import { usePrivy } from '@privy-io/react-auth'

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true, //! Need a backend
// })

export default memo(function UserMessage({
  message,
  setLastUserMessage,
  setLastUserImage,
}: {
  message: { content: string; role: MessageTypeEnum; fileUrl?: string }
  setLastUserMessage: Dispatch<string>
  setLastUserImage: Dispatch<string | undefined>
}) {
  const [imageUrl, setImageUrl] = useState('')
  // const [parsed, setParsed] = useState('')
  const { address } = useAccount()
  const { user } = usePrivy()

  // const processMessage = useCallback(() => {
  //   if (message.content.length <= 0) return
  //   let msg = ''
  //   message.content.forEach((item: any) => {
  //     msg += item.text.value
  //   })
  //   setParsed(msg)
  //   setLastUserMessage(msg)
  // }, [message])

  const getImageUrl = async () => {
    // if (!message.file_ids[0]) return setLastUserImage(undefined)
    // const imageInfo = await openai.files.retrieve(message.file_ids[0])
    // setLastUserImage(imageInfo)
    // setImageUrl(
    //   `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}/${imageInfo.id}-${imageInfo.filename}`
    // )
  }

  useEffect(() => {
    // processMessage()
    setLastUserMessage(message.content)
    getImageUrl()
  }, [])

  return (
    <div className="flex items-start gap-4 rounded-xl p-4">
      <div className="flex h-8 w-8 min-w-[2rem] items-center justify-center overflow-hidden rounded-full bg-themeLightGrey md:h-12 md:w-12 md:min-w-[3rem]">
        <FaUserLarge className="md:text-2xl" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="text-sm text-white/40">
          {user?.wallet?.address?.substring(0, 5)}...
          {user?.wallet?.address?.substring(
            user?.wallet?.address?.length - 4,
            user?.wallet?.address?.length
          )}
        </div>
        <div className="w-full whitespace-pre-wrap">{message.content}</div>
        {message.fileUrl && (
          <div className="relative z-0 aspect-video md:w-[300px]">
            <Image src={message.fileUrl} fill alt="" className="object-cover" />
          </div>
        )}
      </div>
    </div>
  )
})
