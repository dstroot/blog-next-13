import { MetadataRoute } from 'next'
import { posts, snippets, type Post, type Snippet } from 'velite/generated'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  // Posts
  const sitePosts = posts
    .filter((post) => post.published)
    .map((post: Post) => ({
      url: `${env.NEXT_PUBLIC_APP_URL}${post.permalink}`,
      lastModified: post.date,
      changefreq: 'daily',
      priority: 0.7,
    }))

  // Snippets
  const siteSnippets = snippets
    .filter((snippet) => snippet.published)
    .map((snippet: Snippet) => ({
      url: `${env.NEXT_PUBLIC_APP_URL}${snippet.permalink}`,
      lastModified: snippet.date,
      changefreq: 'daily',
      priority: 0.7,
    }))

  // Menu routes
  const navRoutes = siteConfig.mainNav.map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route.href}`,
    lastModified: new Date(),
    changefreq: 'daily',
    priority: 0.7,
  }))

  return [...navRoutes, ...sitePosts, ...siteSnippets]
}
