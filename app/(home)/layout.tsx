import Navbar from '@/components/Navbar/Navbar'
import type { Metadata } from 'next'
import NftDroppingNav from '@/components/Navbar/NftDroppingNav'
import Footer from '@/components/Footer/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Cryptograd',
  description: 'Cryptograd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative mx-auto flex w-full flex-col">
      <NftDroppingNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
