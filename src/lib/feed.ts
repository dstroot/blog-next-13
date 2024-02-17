import fs from 'fs'
import { Feed } from 'feed'
import type { Post } from 'velite/generated'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'

// TODO: this cannot return actual post content because it is still in markdown format.  It would have to be run through remark first.  However, I like just giving the excerpt and then a link back to the article on the blog anyway.

// https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl
// https://kevincox.ca/2022/05/06/rss-feed-best-practices/
// https://github.com/jpmonette/feed/blob/34dbde9aa47b85ae207ba4fefe4c5794b8ca43e2/src/rss2.ts#L81

export async function generateRSSFeed(posts: Post[]) {
  // evergreen copyright year
  const year = new Date()

  // create feed object
  const feed = new Feed({
    title: siteConfig.meta.name,
    description: siteConfig.meta.tagline,
    id: `${env.NEXT_PUBLIC_APP_URL}\/`,
    link: env.NEXT_PUBLIC_APP_URL,
    language: 'en',
    image: `${env.NEXT_PUBLIC_IMGIX_URL}/assets/blog/authors/dan.jpeg`,
    favicon: `${env.NEXT_PUBLIC_APP_URL}/img/favicon.png`,
    copyright:
      'All rights reserved ' +
      year.getFullYear() +
      ', ' +
      siteConfig.meta.author,
    // updated: Date.now(),
    // generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      //   json: `${env.NEXT_PUBLIC_APP_URL}/json`,
      atom: `${env.NEXT_PUBLIC_APP_URL}/atom.xml`,
      rss: `${env.NEXT_PUBLIC_APP_URL}/feed.xml`,
    },
    feed: `${env.NEXT_PUBLIC_APP_URL}/feed.xml`,
    author: {
      name: 'Dan Stroot',
      email: 'dan@thestroots.com',
      link: env.NEXT_PUBLIC_APP_URL,
    },
  })

  // Add each article to the feed
  posts.forEach((post) => {
    // link back to our site
    const afterContent = `<br><br>This post <a href="${env.NEXT_PUBLIC_APP_URL}/posts/${post.slug}">${post.title}</a> first appeared on <a href=${env.NEXT_PUBLIC_APP_URL}>Dan Stroot's Blog</a>`

    feed.addItem({
      title: post.title,
      id: `${env.NEXT_PUBLIC_APP_URL}${post.slug}`,
      link: `${env.NEXT_PUBLIC_APP_URL}/posts/${post.slug}`,
      description: `<img src="${env.NEXT_PUBLIC_IMGIX_URL}${post.coverImage}" alt="post image" /><br><br>${post.excerpt}${afterContent}`,
      //   content: post.content,
      author: [
        {
          name: 'Dan Stroot',
          email: 'dan.stroot@gmail.com',
          link: env.NEXT_PUBLIC_APP_URL,
        },
      ],
      date: new Date(post.date),
      image: `${env.NEXT_PUBLIC_IMGIX_URL}${post.coverImage}`,
    })
  })

  feed.addCategory('Technology')

  // Write the RSS output to a public file
  fs.writeFileSync('public/feed.xml', feed.rss2())
  fs.writeFileSync('public/atom.xml', feed.atom1())
}
