import { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

// https://www.w3.org/TR/appmanifest/#:~:text=A%20application%20manifest%20is%20a,which%20the%20manifest%20was%20fetched.

export default function manifest(): MetadataRoute.Manifest {
  return {
    lang: siteConfig.meta.lang,
    name: siteConfig.meta.name,
    short_name: siteConfig.meta.name,
    description: siteConfig.meta.description,
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/img/maskable_icon_x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/img/maskable_icon_x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
