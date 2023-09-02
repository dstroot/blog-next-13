import { env } from '@/config/env.mjs'

export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

declare const window: Window & { dataLayer: Record<string, unknown>[] }

export const pageview = (url: string) => {
  if (env.NEXT_PUBLIC_VERCEL_ENV !== 'production') {
    return
  }

  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
