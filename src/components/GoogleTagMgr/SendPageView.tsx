'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { pageview } from '@/lib/gtm'

// Note: you may not need this code. This is for sending page views in single page apps. Also,
// not sure why search params are included like this - shouldn't pathname be sufficient?
// https://www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/

export const SendPageViewr = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname, searchParams])
}
