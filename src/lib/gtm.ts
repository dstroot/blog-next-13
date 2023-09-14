import { env } from '@/config/env.mjs'

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[]
}

export const GTM_ID = env.NEXT_PUBLIC_GTM_ACCOUNT

declare const window: WindowWithDataLayer

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  } else {
    console.log({
      event: 'pageview: ',
      page: url,
    })
  }
}
