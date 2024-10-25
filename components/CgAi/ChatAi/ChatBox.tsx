'use client'

import { ChatParams } from '@/types/chatParams'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { LuPlay } from 'react-icons/lu'
import ChatboxHeader from './ChatboxHeader'
import Chat from './Chat'
import { FaPaperclip } from 'react-icons/fa6'
import { CgSpinner } from 'react-icons/cg'
import Image from 'next/image'
import { uploadImage } from '@/services/file'
import useChat from '@/hooks/useChat'
import { Uploadable } from 'openai/uploads.mjs'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { makeMeTwoDigits } from '@/utils/numberFix'
import { MessageTypeEnum } from '@/types/iMessage'
import {
  addMessage,
  getUserChat,
  getUserChatMessages,
  patchChat,
} from '@/services/chat'
import { v4 as uuidv4 } from 'uuid'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import axios from 'axios'

export default function ChatBox({
  params,
  searchParams,
}: {
  params: ChatParams
  searchParams: { [key: string]: string | undefined }
}) {
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<
    { content: string; role: MessageTypeEnum; fileUrl?: string }[]
  >([])
  const [message, setMessage] = useState('')
  // const [image, setImage] = useState<any>()
  const [lastUserMessage, setLastUserMessage] = useState('')
  const [lastUserImage, setLastUserImage] = useState<string | undefined>()
  const [responding, setResponding] = useState(false)
  // const [cancelled, setCancelled] = useState(false)
  const [cancelling, setCancelling] = useState(false)
  const [runId, setRunId] = useState('')
  const [fileInfo, setFileInfo] = useState('')
  const [threadId, setThreadId] = useState('')
  const [buffer, setBuffer] = useState<Uploadable | null>(null)
  const [imageUploading, setImageUploading] = useState(false)
  const [url, setUrl] = useState('')
  const [locked, setLocked] = useState(false)
  const { addChat } = useChat()
  const router = useRouter()
  const imageInputRef = useRef<any>()

  // const stopResponding = async () => {
  //   setCancelling(true)
  //   const res = await openai.beta.threads.runs.cancel(threadId, runId)
  //   console.log(res)
  // }

  const initiateChat = async () => {
    if (params.chatType === 'contract-insight' || params.chatType === 'crypto-buzz' || params.chatType === 'trade-analyzer') setLocked(true)
    if (params.chatId === 'newChat') {
      const id = uuidv4()
      router.replace(
        searchParams.prompt
          ? `/CG-AI/chat/${params.chatType}/${id}?tab=${
              searchParams.tab ? searchParams.tab : 'beginner'
            }&prompt=${searchParams.prompt}`
          : `/CG-AI/chat/${params.chatType}/${id}?tab=${
              searchParams.tab ? searchParams.tab : 'beginner'
            }`
      )
    } else {
      setThreadId(params.chatId)
      const res = await getUserChatMessages(params.chatId)
      // console.log(res.data)
      setMessages(res.data.messages ? res.data.messages : [])
      // const messagesAll = await openai.beta.threads.messages.list(
      //   params.chatId,
      //   {
      //     stream: false,
      //   }
      // )
      // setMessages([...messagesAll.data.reverse()])
    }
    await handlePrompt()
  }

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files || !files[0]) return
    if (files[0].size > 5000000) return
    const selectedFile = files[0]
    setImageUploading(true)
    // setImage(selectedFile)
    // console.log(files[0])

    try {
      // const res = await openai.files.create({
      //   file: selectedFile,
      //   purpose: 'assistants',
      // })

      const formData = new FormData()
      formData.append('file', selectedFile)

      const res: any = await axios.post(
        `${process.env.NEXT_PUBLIC_STACK_URL}/documents/${process.env.NEXT_PUBLIC_STACK_ORG_ID}/${process.env.NEXT_PUBLIC_STACK_TRADE_ANALYZER_FLOW_ID}/${params.chatId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STACK_FILE_API_KEY}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log({ uploadedFile: res.data })

      setFileInfo(res.data.uploaded_file.signedURL)
      setUrl(URL.createObjectURL(files[0]))
      setImageUploading(false)
    } catch (error) {
      setImageUploading(false)
      console.log(error)
    }
  }

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) return <>Presale Coming soon!</>
    return (
      <div className="flex items-start gap-2">
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(days)}
          </span>
          <span className="text-2xs font-light">Days</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(hours)}
          </span>
          <span className="text-2xs font-light">Hours</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(minutes)}
          </span>
          <span className="text-2xs font-light">Mins</span>
        </div>
        <span className="mt-2 text-3xl font-bold">:</span>
        <div className="flex aspect-square w-[3rem] flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00] px-3 py-3 md:w-[4.12rem]">
          <span className="text-xl font-bold leading-7 md:text-3xl">
            {makeMeTwoDigits(seconds)}
          </span>
          <span className="text-2xs font-light">Secs</span>
        </div>
      </div>
    )
  }

  const handleRegenerate = async () => {
    await openAiCall(lastUserMessage, true)
  }

  const getFlowId = () => {
    let flowId = ''
    if (params.chatType === 'chat-genius')
      flowId = process.env.NEXT_PUBLIC_STACK_CHAT_GENIUS_FLOW_ID!
    if (params.chatType === 'trade-analyzer')
      flowId = process.env.NEXT_PUBLIC_STACK_TRADE_ANALYZER_FLOW_ID!
    if (params.chatType === 'crypto-buzz')
      flowId = process.env.NEXT_PUBLIC_STACK_CRYPTO_BUZZ_FLOW_ID!
    return flowId
  }

  const openAiCall: any = async (customMessage?: string, image?: boolean) => {
    // setCancelled(false)
    setResponding(true)
    setMessage('')
    setUrl('')

    const threadId = params.chatId

    const chatMessage = customMessage ? customMessage : message

    console.log({ fileInfo })

    const messagesWithUserChat = [
      ...messages,
      {
        content: chatMessage,
        role: MessageTypeEnum.USER,
      },
    ]

    setMessages(messagesWithUserChat)

    try {
      await addChat({
        threadId,
        title:
          chatMessage.length > 50 ? chatMessage.substring(0, 50) : chatMessage,
        chatType: params.chatType,
      })
    } catch (err) {
      console.log(err)
    }

    const reqBody = {
      threadId,
      content: chatMessage,
      role: MessageTypeEnum.USER,
    }

    await addMessage(reqBody)

    // if (params.chatType === 'chat-genius') {
    const userMessage = {
      'in-0': chatMessage,
      user_id: threadId,
    }
    const messagesWithAssistantChat = [
      ...messagesWithUserChat,
      {
        content: '',
        role: MessageTypeEnum.ASSISTANT,
      },
    ]

    setMessages(messagesWithAssistantChat)

    let stream = ''
    const controller = new AbortController()
    const signal = controller.signal

    await fetchEventSource(
      `${
        process.env.NEXT_PUBLIC_STACK_URL
      }/stream_exported_flow?flow_id=${getFlowId()}&org=${
        process.env.NEXT_PUBLIC_STACK_ORG_ID
      }`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STACK_CHAT_API_KEY}`,
          Accept: 'text/event-stream, text/plain',
        },
        body: JSON.stringify(userMessage),
        signal: signal,
        openWhenHidden: true,
        async onopen(res) {
          if (res.ok && res.status === 200) {
          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.error('Client side error ', res)
          }
        },
        onmessage(event) {
          if (event.data === '[DONE]') return
          const outputs = JSON.parse(event.data)
          console.log(outputs.error)
          // if (event.data.error) {
          //   controller.abort()
          //   return
          // }
          const tempArr = [...messagesWithAssistantChat]
          const lastItem = tempArr.length - 1
          tempArr[lastItem].content += outputs['out-0'] || ''
          stream += outputs['out-0']
          setMessages([...tempArr])
          // console.log(outputs)
        },
        onclose() {},
        onerror(err) {
          console.log({ err })
          throw err
        },
      }
    ).catch((err) => {
      console.error('There was an error from server', err)
    })

    const updateMessageRequest = {
      chatId: threadId,
      message: stream,
    }

    await patchChat(updateMessageRequest)

    setResponding(false)

    const reqBody1 = {
      threadId,
      content: stream,
      role: MessageTypeEnum.ASSISTANT,
    }

    await addMessage(reqBody1)
    // }
  }

  const sendMessage = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    if (!message) return

    await openAiCall()
  }

  const handlePrompt = async () => {
    if (!searchParams.prompt) return
    setMessage(searchParams.prompt)
    await openAiCall(searchParams.prompt)
    router.replace(
      `/CG-AI/chat/${params.chatType}/${params.chatId}?tab=${searchParams.tab}`
    )
  }

  useEffect(() => {
    if (messages.length > 0) setStarted(true)
  }, [messages])

  useEffect(() => {
    initiateChat()
  }, [])

  return (
    <div className="fixedHeightMob relative flex w-full flex-col overflow-hidden">
      <ChatboxHeader
        chatId={params.chatId}
        searchtab={searchParams.tab}
        chatType={params.chatType}
        started={started}
      />

      <div className="relative z-0 flex h-full flex-col justify-between gap-4 overflow-hidden px-4 pb-4 md:pb-8">
        <Chat
          openAiCall={openAiCall}
          chatId={params.chatId}
          searchtab={searchParams.tab}
          chatType={params.chatType}
          started={started}
          messages={messages}
          handleRegenerate={handleRegenerate}
          setLastUserMessage={setLastUserMessage}
          setLastUserImage={setLastUserImage}
          // stopResponding={stopResponding}
          // cancelling={cancelling}
          responding={responding}
        />
        <div className="relative flex w-full flex-grow flex-col items-center justify-end">
          {/*{responding && (*/}
          {/*  <Button*/}
          {/*    onClick={stopResponding}*/}
          {/*    loading={cancelling}*/}
          {/*    type={ButtonType.SECONDARY}*/}
          {/*    className="absolute -top-14 left-0 right-0 mx-auto w-fit rounded-xl !px-4"*/}
          {/*  >*/}
          {/*    <FiStopCircle className="text-2xl text-themeBorderBlue" />*/}
          {/*    Stop Responding*/}
          {/*  </Button>*/}
          {/*)}*/}
          <form
            onSubmit={sendMessage}
            className="flex w-full items-center justify-between rounded-lg bg-themeNavBlack p-4"
          >
            <div className="flex flex-grow flex-col gap-8">
              <input
                type="text"
                className="w-full border-none bg-inherit outline-none"
                placeholder="Message CG AI"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {url && (
                <div className="relative z-0 aspect-video w-full md:max-w-[300px]">
                  <Image src={url} fill alt="" className="object-cover" />
                </div>
              )}
            </div>
            {/* <div className="flex items-center gap-4">
              {params.chatType === 'trade-analyzer' && (
                <>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="absolute z-0 h-0 w-0 opacity-0"
                  />
                </>
              )}
              <button
                disabled={responding}
                type="submit"
                className="text-2xl text-themeBorderBlue"
              >
                {responding ? (
                  <CgSpinner className="animate-spin" />
                ) : (
                  <LuPlay />
                )}
              </button>
            </div> */}
          </form>
          <div className="mt-2 text-center text-xs text-white/40 md:text-sm">
            CG AI may display inaccurate info and it may take 30-40 seconds to
            respond since it is in Beta, including data, so double-check its
            responses.{' '}
            <Link href="/help/privacy-policy" className="underline">
              Your privacy and CG AI.
            </Link>
          </div>
        </div>
      </div>
      {locked && (
        <div className="absolute z-1 flex h-full w-full items-center justify-center backdrop-blur">
          <div className="flex aspect-square w-full max-w-[600px] flex-col items-center justify-center rounded-xl p-4 backdrop-blur md:bg-themeBgBlack/60">
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-white/5">
              <div className="relative top-[15%] flex w-fit flex-col items-center justify-center gap-2">
                <span className={'mb-8 text-2xl font-bold'}>
                  Coming Soon...
                </span>
                {/*<Countdown date={1708725800000} renderer={renderer} />*/}
              </div>
              <Image
                src="/CgAi/ChatAi/locked.svg"
                width={673}
                height={277}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
