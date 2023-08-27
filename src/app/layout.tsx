import '@/styles/globals.css'

import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'
import { Providers } from '@/components/Providers'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { TailwindIndicator } from '@/components/TailwindIndicator'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: `${siteConfig.meta.name} · Blog`,
    template: `${siteConfig.meta.name} · %s`,
  },
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [
    {
      name: 'Dan Stroot',
      url: 'https://github.com/dstroot',
    },
  ],
  creator: 'Dan Stroot',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.NEXT_PUBLIC_APP_URL,
    title: siteConfig.meta.name,
    description: siteConfig.meta.description,
    siteName: siteConfig.meta.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.name,
    description: siteConfig.meta.description,
    images: [`${env.NEXT_PUBLIC_APP_URL}/og.jpg`],
    creator: '@danstroot',
  },
  icons: {
    icon: '/img/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // add scroll padding for internal page links.
    // TODO add google tag manager
    <html lang="en" className="scroll-pt-16" suppressHydrationWarning>
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Suspense>
          {/* <GoogleTagMgr /> */}
          <Analytics />
        </Suspense>
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
