import { IWalletContext, WalletContext } from '@/context/WalletContext'
import { useContext } from 'react'

const useWallet = () => {
  const {
    dialog,
    setDialog,
    connectWallet,
    logout,
    isLoggedIn,
    isVerified,
    setIsVerified,
    loading,
    referralId,
    loginUser,
    aiRegistered,
    setAiRegistered,
    waitlisted
  } = useContext(WalletContext) as IWalletContext
  return {
    dialog,
    setDialog,
    connectWallet,
    logout,
    isLoggedIn,
    isVerified,
    setIsVerified,
    loading,
    referralId,
    loginUser,
    aiRegistered,
    setAiRegistered,
    waitlisted
  }
}

export default useWallet
