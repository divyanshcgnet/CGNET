'use client'

import { Children } from '@/types/generics'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { WalletProvider } from '@/context/WalletContext'
import { PrivyContextProvider } from '@/context/PrivyContext.'

const darkTheme = createTheme({
  typography: {
    fontFamily: `'DM Sans', sans-serif`,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#6754f899',
    },
  },
})

const Providers = ({ children }: Children) => {
  return (
    <>
      <PrivyContextProvider>
        <WalletProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </WalletProvider>
      </PrivyContextProvider>
    </>
  )
}

export default Providers
