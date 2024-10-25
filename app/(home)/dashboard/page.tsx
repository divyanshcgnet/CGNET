import DashboardHome from '@/components/Dashboard/DashboardHome'
import Leaderboard from '@/components/Dashboard/Leaderboard'
import ReferAndEarn from '@/components/Dashboard/ReferAndEarn'
import StickyReferral from '@/components/Dashboard/StickyReferral'
import Transactions from '@/components/Dashboard/Transactions'

export default function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams)
  return (
    <div className={`4-4 w-full p-4 md:p-8`}>
      {(searchParams.tab === 'dashboard' || !searchParams.tab) && (
        <DashboardHome />
      )}
      {searchParams.tab === 'transactions' && <Transactions />}
      {searchParams.tab === 'refer' && <ReferAndEarn />}
      {searchParams.tab === 'leaderboards' && <Leaderboard />}
    </div>
  )
}
