import { MetadataRoute } from 'next'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  //   const res = await fetch('https://.../posts');
  //   const allPosts = await res.json();

  //   const posts = allPosts.map((post) => ({
  //     url: `https://acme.com/blog/${post.slug}`,
  //     lastModified: post.publishedAt,
  //   }));

  // menu routes
  const navRoutes = siteConfig.mainNav.map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route.href}`,
    lastModified: new Date(),
  }))

  // routes in footer
  //   const footerRoutes = siteConfig.footerNav.map((item) => ({
  //     item.items.map((link) => ({})
  //     url: `${env.NEXT_PUBLIC_APP_URL}${route.path}`,
  //     lastModified: new Date(),
  //   }))

  //   const footerRoutes = siteConfig.footerNav.map((item) => ({
  //     item.items.map((nav) => ({
  //         url: `${env.NEXT_PUBLIC_APP_URL}${nav.href}`,
  //       lastModified: new Date(),
  //     }))
  //   }))

  //   return [...routes, ...posts];
  return [...navRoutes] // , ...footerRoutes
}
