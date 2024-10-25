import History from '@/components/CgAi/History/History'

export default function ChatHistoryPage({
  params,
}: {
  params: {
    timeline: string
  }
}) {
  return <History params={params} />
}
