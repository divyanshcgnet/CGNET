'use client'
import Dashboard from '@/components/AiDashboard/Dashboard/Dashboard'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import SocialMediaFollow from '@/components/CgAi/SocialMediaFollow'

const DashboardPage = () => {
  const searchParams = useSearchParams()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const showSocialMediaFollow =
      searchParams.get('showSocialMediaFollow') === 'true'
    if (showSocialMediaFollow) {
      setIsDialogOpen(true)
    }
  }, [searchParams])

  return (
    <div>
      {isDialogOpen && (
        <SocialMediaFollow isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
      )}
      <Dashboard />
    </div>
  )
}

export default DashboardPage
