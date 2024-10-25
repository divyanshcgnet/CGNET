import { createContext, ReactNode } from 'react'
import { PrivyProvider } from '@privy-io/react-auth'
import { sepolia } from 'viem/chains'

export const PrivyContext = createContext(null)

export const PrivyContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_PROJECT_ID!}
      config={{
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        defaultChain: sepolia,
        appearance: {
          theme: 'dark',
        },
      }}
    >
      <PrivyContext.Provider value={null}>{children}</PrivyContext.Provider>
    </PrivyProvider>
  )
}
