import ChatBox from '@/components/CgAi/ChatAi/ChatBox'
import { ChatParams } from '@/types/chatParams'

export default function AiChatPage({
  params,
  searchParams,
}: {
  params: ChatParams
  searchParams: { [key: string]: string | undefined }
}) {
  return <ChatBox params={params} searchParams={searchParams} />
}
