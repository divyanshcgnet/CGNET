import Markets from '@/components/AiDashboard/Dashboard/Markets'

const MarketsPage = ({
  params,
}: {
  params: {
    pair: string
  }
}) => {
  return (
    <div className="pageHeight bg-custom-background w-full">
      <Markets pair={params.pair} />
    </div>
  )
}

export default MarketsPage
