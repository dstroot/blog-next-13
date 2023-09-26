import '@/styles/globals.css'

import { Suspense } from 'react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'
import { GoogleTagMgr } from '@/components/GoogleTagMgr'
import { Hotkeys } from '@/components/Hotkeys'
import { Providers } from '@/components/Providers'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { TailwindIndicator } from '@/components/TailwindIndicator'

export async function generateMetadata(): Promise<Metadata> {
  const url = absoluteUrl('/api/og')
  const ogUrl = new URL(url)
  ogUrl.searchParams.set('location', siteConfig.meta.location)
  ogUrl.searchParams.set('mode', 'light')

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_IMGIX_URL),
    title: {
      default: `${siteConfig.meta.name}`,
      template: `${siteConfig.meta.name} · %s`,
    },
    description: siteConfig.meta.description,
    keywords: siteConfig.meta.keywords,
    alternates: {
      types: {
        'application/rss+xml': [{ url: '/feed.xml', title: 'Blog Posts RSS' }],
      },
    },
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
      images: [ogUrl.toString()],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.meta.name,
      description: siteConfig.meta.description,
      images: [ogUrl.toString()],
      site: '@danstroot',
      creator: '@danstroot',
    },
    icons: {
      icon: '/img/favicon.png',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get('x-nonce')

  return (
    // scroll padding necessary for internal page links to leave room for navbar
    // Note: If you do not add suppressHydrationWarning to your <html> you will
    // get warnings because next-themes updates that element.
    <html lang="en" className="scroll-pt-16" suppressHydrationWarning>
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground antialiased">
        <Hotkeys />
        <Suspense>
          <GoogleTagMgr nonce={''} />
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
