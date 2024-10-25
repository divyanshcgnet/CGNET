'use client'

import { useRouter } from 'next/navigation'
import Button from '../shared/Button'
import useWallet from '@/hooks/useWallet'
import { usePrivy } from '@privy-io/react-auth'
import { getUserDetails } from '@/services/user'


export default function AiSectionButton() {
  // const { isLoggedIn, connectWallet } = useWallet()
  const router = useRouter()
  const { authenticated, ready, login } = usePrivy()


  const handleCall = async () => {
    if (ready && !authenticated) {
      login()
    }
    const user = await getUserDetails()
    if (user.planStatus || user.access) {
      router.push('/CG-AI/explore')
    } else {
      router.push('/join')
    }
  
  }
  return <Button className='h-12' onClick={handleCall}>Get Started</Button>
}
