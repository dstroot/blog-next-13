import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import emoji, { type RemarkEmojiOptions } from 'remark-emoji'
import { defineCollection, defineConfig, s } from 'velite'

// const slugify = (input: string) =>
//   input
//     .toLowerCase()
//     .replace(/\s+/g, '-')
//     .replace(/[^a-z0-9-]/g, '')

// const icon = s.enum(["github", "instagram", "medium", "twitter", "youtube"]);

// const meta = s
//   .object({
//     title: s.string().optional(),
//     description: s.string().optional(),
//     keywords: s.array(s.string()).optional(),
//   })
//   .default({})

const rehypePrettyCodeOptions: Options = {
  // Themes list: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: 'one-dark-pro',
  keepBackground: false,
}

const emojiOptions: RemarkEmojiOptions = {
  // https://github.com/rhysd/remark-emoji
  accessible: false,
  padSpaceAfter: false,
  emoticon: false,
}

const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(299),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      // computed fields
      slug: `${meta.path!}`
        .replace('/Volumes/T7/Code/blog-next-13/content/pages/', '')
        .slice(0, -4), // filename based slug
      permalink: `${meta.path!}`
        .replace('/Volumes/T7/Code/blog-next-13/content', '')
        .slice(0, -4), // filename based permalink
    })),
})

const snippets = defineCollection({
  name: 'Snippet',
  pattern: 'snippets/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      summary: s.string().max(399),
      icon: s.string().max(50),
      date: s.string().max(10), // s.coerce.date(),
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      published: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      // computed fields
      slug: `${meta.path!}`
        .replace('/Volumes/T7/Code/blog-next-13/content/snippets/', '')
        .slice(0, -4), // filename based slug
      permalink: `${meta.path!}`
        .replace('/Volumes/T7/Code/blog-next-13/content', '')
        .slice(0, -4), // filename based permalink
    })),
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      excerpt: s.string().max(599),
      coverImage: s.string().max(99),
      date: s.string(), // s.coerce.date(), // s.isodate(),
      published: s.boolean().default(false),
      author: s.object({
        name: s.string().max(99),
        picture: s.string().max(99),
      }),
      ogImage: s.object({
        url: s.string().max(99),
      }),
      seoURL: s.string().optional().nullish(),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      // computed fields
      slug: `${meta.path!}`
        .replace('/Volumes/T7/Code/blog-next-13/content/posts/', '')
        .slice(0, -4), // filename based slug
      permalink: `${meta.path!}`
        .replace('/Volumes/T7/Code/blog-next-13/content', '')
        .slice(0, -4), // filename based permalink
    })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, pages, snippets },
  // note: GFM is already included as default
  mdx: {
    remarkPlugins: [[emoji, emojiOptions]],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})
