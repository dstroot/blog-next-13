import { MetadataRoute } from 'next'
import {
  allPosts,
  allSnippets,
  type Post,
  type Snippet,
} from 'contentlayer/generated'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  // Posts
  const posts = allPosts
    .filter((post) => post.published)
    .map((post: Post) => ({
      url: `${env.NEXT_PUBLIC_APP_URL}${post.slug}`,
      lastModified: post.date,
      changefreq: 'daily',
      priority: 0.7,
    }))

  // Snippets
  const snippets = allSnippets
    .filter((snippet) => snippet.published)
    .map((snippet: Snippet) => ({
      url: `${env.NEXT_PUBLIC_APP_URL}${snippet.slug}`,
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

  return [...navRoutes, ...posts, ...snippets]
}
