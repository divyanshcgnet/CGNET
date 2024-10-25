import { getUserDetails, login } from '@/services/user'
import { chain } from '@/services/web3Service'
import { Children } from '@/types/generics'
import { disconnect } from '@wagmi/core'
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
} from '@web3modal/wagmi/react'
import { useRouter } from 'next/navigation'
import { Dispatch, createContext, useState } from 'react'
import { goerli, mainnet } from 'viem/chains'
import { WagmiConfig } from 'wagmi'

export interface IWalletContext {
  isLoggedIn: boolean
  loading: boolean
  referralId: string
  dialog: boolean
  loginUser: (walletAddress: string, referralId?: string) => Promise<void>
  setDialog: Dispatch<boolean>
  isVerified: boolean
  setIsVerified: Dispatch<boolean>
  aiRegistered: boolean
  setAiRegistered: Dispatch<boolean>
  connectWallet: () => void
  logout: () => void
  waitlisted: boolean
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!

const metadata = {
  name: 'Cryptograd AI',
  description: 'cryptograd.ai',
  url: 'https://cryptograd.ai',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [mainnet, goerli]
const defaultChain = chain
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
const themeVariables = {
  '--w3m-font-family': 'DM Sans, sans-serif',
  '--w3m-z-index': 100,
  '--w3m-color-mix': '#262626',
  '--w3m-accent': '#262626',
}

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain,
  themeMode: 'dark',
  themeVariables,
})

export const WalletContext = createContext<IWalletContext | null>(null)

export const WalletProvider = ({ children }: Children) => {
  const [dialog, setDialog] = useState(false)
  const { open } = useWeb3Modal()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(true)
  const [aiRegistered, setAiRegistered] = useState(true)
  const [referralId, setReferralId] = useState('')
  const [waitlisted, setWaitlisted] = useState(false)

  const connectWallet = async () => {
    // console.log('wllet')
    // await open()
    // setDialog(true)
  }

  const loginUser = async (walletAddress: string, referralId?: string) => {
    try {
      const res = await login(walletAddress, referralId)
      setReferralId(res.data.referralId)
      localStorage.setItem('accessToken', res.data.authToken)
      localStorage.setItem('referralId', res.data.referralId)
      localStorage.setItem('walletAddress', walletAddress)
      localStorage.setItem('referrer', JSON.stringify(res.data?.referredBy))
      const user = await getUserDetails()
      setIsVerified(!!user.verified)

      setAiRegistered(!!user.aiRegistered)
      setIsLoggedIn(true)
      setWaitlisted(!!user.waitlisted)
      setLoading(false)
      if (!user.verified) {
        router.push('/login')
      }
    } catch (err) {
      await disconnect()
      console.log({ err })
      setLoading(false)
      console.log(err)
    }
  }

  const logout = async () => {
    // await disconnect()
    localStorage.clear()
    setIsLoggedIn(false)
    setLoading(false)
    // router.push('/')
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <WalletContext.Provider
        value={{
          dialog,
          setDialog,
          connectWallet,
          loginUser,
          logout,
          isLoggedIn,
          loading,
          referralId,
          isVerified,
          setIsVerified,
          aiRegistered,
          setAiRegistered,
          waitlisted,
        }}
      >
        {children}
      </WalletContext.Provider>
    </WagmiConfig>
  )
}
