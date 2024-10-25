import './globals.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Providers from './providers'
import NoSSrWrapper from '@/components/shared/NoSSrWrapper'
import Script from 'next/script'
import { ReactNode } from 'react'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
  ],
})

export const metadata: Metadata = {
  title: 'Cryptograd',
  description: 'Cryptograd',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script src="/scripts/clarity.js" />
        <Script src="/scripts/hotjar.js" />
        <Script src="https://telegram.org/js/telegram-widget.js" />
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=0007308d-037d-4700-8795-f39bd4e42dd8"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X4XX9V0TBY"
        />
        <Script
          id={'google-tag-manager-script'}
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X4XX9V0TBY');
        `,
          }}
        />
        <Script
          type="text/javascript"
          src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=SWBJ48"
        ></Script>
      </head>
      <body className={dmSans.className}>
        <NoSSrWrapper>
          <Providers>{children}</Providers>
        </NoSSrWrapper>
      </body>
    </html>
  )
}
