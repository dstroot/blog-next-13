'use client'

import { useEffect } from 'react'

type SendPageViewProps = {
  slug: string
}

export const SendPageView = (props: SendPageViewProps) => {
  // Note: StrictMode renders components twice (dev, not production) in order
  // to detect problems with your code. If you are running in dev and seeing
  // this trigger twice that could be the reason.

  useEffect(() => {
    setTimeout(() => {
      let path = encodeURIComponent(props.slug)

      if (typeof path === 'undefined') {
        console.log('usePageView: path undefined')
        return
      }

      // Use `navigator.sendBeacon()` if available, fall back to `fetch()`.
      ;(navigator.sendBeacon && navigator.sendBeacon(`/api/views/${path}`)) ||
        fetch(`/api/views/${path}`, { method: 'POST' })
    }, 5000) // register page view after 5s
  }, [props.slug])

  return null
}
