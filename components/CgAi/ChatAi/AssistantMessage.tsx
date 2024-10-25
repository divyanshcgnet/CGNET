'use client'

import Image from 'next/image'
import {
  LuThumbsUp,
  LuThumbsDown,
  LuRefreshCcwDot,
  LuShare2,
} from 'react-icons/lu'
import { FaRegCopy } from 'react-icons/fa6'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { MarkdownRenderer } from './MarkdownRenderer'
import copy from 'copy-to-clipboard'
import { MessageTypeEnum } from '@/types/iMessage'

const AssistantMessage = ({
  message,
  handleRegenerate,
  idx,
  length,
  responding,
  last,
}: {
  message: { content: string; role: MessageTypeEnum }
  handleRegenerate: () => Promise<void>
  idx: number
  length: number
  responding: boolean
  last: boolean
}) => {
  const [parsedMessage, setParsedMessage] = useState('')
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Call scrollToBottom when component mounts or when messages update
  // useEffect(() => {
  //   if (last && message.content) {
  //     scrollToBottom()
  //   }
  // }, [message])

  // const processMessage = useCallback(() => {
  //   console.log(message)
  //   let msg = ''
  //   message.forEach((item: any) => {
  //     msg += item.text.value
  //   })
  //   setParsedMessage(msg)
  // }, [message])

  // useEffect(() => {
  //   // processMessage()
  //   console.log({ idx, length })
  // }, [])

  // useEffect(() => {
  //   // console.log(message.content)
  // }, [])

  const handleButtonClick = () => {
    setIsAlertVisible(true)
    copy(message.content)
    setTimeout(() => {
      setIsAlertVisible(false)
    }, 3000)
  }

  console.log(message.content)

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Cryptograd AI Share',
          text: message.content,
        })
        .catch((error) => console.error('Error sharing:', error))
    } else {
      console.log('Web Share API not supported in this browser.')
    }
  }

  return (
    <>
      <div
        ref={messagesEndRef}
        className="flex flex-col gap-4 bg-themeNavBlack p-4"
      >
        <div className="flex items-start gap-4">
          <Image
            src="/CgAi/ChatAi/cgLogoBlue.svg"
            width={40}
            height={40}
            alt=""
            className="h-8 w-8 rounded-full md:h-12 md:w-12"
          />
          <div className="overflow-hidden\ flex w-full flex-col gap-1"  id='anchor'>
            <div className="text-sm text-white/40">CG AI</div>
            {message.content === '' && <div className="chatLoader"></div>}
            <MarkdownRenderer >{message.content}</MarkdownRenderer>
            {/* <div className="w-full whitespace-pre-wrap">
            
            {parsedMessage}
          </div> */}
            {!responding && (
              <div className="mt-4 flex flex-col items-end border-t border-white/30 pt-4">
                {/* <div className="flex gap-2">
              <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
                <LuThumbsUp />
              </button>
              <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
                <LuThumbsDown />
              </button>
              <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
                <FaRegCopy />
              </button>
              <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
                <LuRefreshCcwDot />
              </button>
              <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
                <LuShare2 />
              </button>
            </div> */}
              </div>
            )}
          </div>
        </div>
        {!responding && (
          <div className="mt-4 flex flex-col items-center md:items-end">
            <div className="flex justify-between gap-2 md:justify-end">
              {/* <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <LuThumbsUp />
            </button>
            <button className="rounded border border-white/20 bg-themeBlack px-4 py-2">
              <LuThumbsDown />
            </button> */}
              <button
                onClick={handleButtonClick}
                className="rounded border border-white/20 bg-themeBlack px-4 py-2"
              >
                <FaRegCopy />
              </button>
              {idx === length - 1 && (
                <button
                  onClick={handleRegenerate}
                  className="rounded border border-white/20 bg-themeBlack px-4 py-2"
                >
                  <LuRefreshCcwDot />
                </button>
              )}
              <button
                // onClick={() =>
                //   navigator.share({
                //     title: 'Cryptograd AI Share',
                //     text: parsedMessage,
                //   })
                // }
                onClick={handleShareClick}
                className="rounded border border-white/20 bg-themeBlack px-4 py-2"
              >
                <LuShare2 />
              </button>
            </div>
          </div>
        )}
      </div>
      {isAlertVisible && (
        <div className="fixed bottom-16 left-0 right-0 z-10 mx-auto w-fit rounded-lg bg-themeGrey px-3 py-2 text-sm font-semibold transition-all">
          Copied
        </div>
      )}
    </>
  )
}

export default memo(AssistantMessage)
