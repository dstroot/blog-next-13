import rehypePrettyCode from 'rehype-pretty-code'
import { defineCollection, defineConfig, s } from 'velite'

// const slugify = (input: string) =>
//   input
//     .toLowerCase()
//     .replace(/\s+/g, '-')
//     .replace(/[^a-z0-9-]/g, '')

// const icon = s.enum(["github", "instagram", "medium", "twitter", "youtube"]);

// const count = s
//   .object({ total: s.number(), posts: s.number() })
//   .default({ total: 0, posts: 0 });

// const meta = s
//   .object({
//     title: s.string().optional(),
//     description: s.string().optional(),
//     keywords: s.array(s.string()).optional(),
//   })
//   .default({})

// const options = defineCollection({
//   name: "Options",
//   pattern: "options/index.yml",
//   single: true,
//   schema: s.object({
//     name: s.string().max(20),
//     title: s.string().max(99),
//     description: s.string().max(999).optional(),
//     keywords: s.array(s.string()),
//     author: s.object({
//       name: s.string(),
//       email: s.string().email(),
//       url: s.string().url(),
//     }),
//     links: s.array(
//       s.object({
//         text: s.string(),
//         link: s.string(),
//         type: s.enum(["navigation", "footer", "copyright"]),
//       })
//     ),
//     socials: s.array(
//       s.object({
//         name: s.string(),
//         icon,
//         link: s.string().optional(),
//         image: s.image().optional(),
//       })
//     ),
//   }),
// });

// const categories = defineCollection({
//   name: "Category",
//   pattern: "categories/*.yml",
//   schema: s
//     .object({
//       name: s.string().max(20),
//       slug: s.slug("global", ["admin", "login"]),
//       cover: s.image().optional(),
//       description: s.string().max(999).optional(),
//       count,
//     })
//     .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
// });

// const tags = defineCollection({
//   name: "Tag",
//   pattern: "tags/index.yml",
//   schema: s
//     .object({
//       name: s.string().max(20),
//       slug: s.slug("global", ["admin", "login"]),
//       cover: s.image().optional(),
//       description: s.string().max(999).optional(),
//       count,
//     })
//     .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
// });

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
      slug: meta.file.stem!.replace('/index', ''), // filename based slug
      permalink: `/snippets/${meta.file.stem!.replace('/index', '')}`,
    })),
})

const snippets = defineCollection({
  name: 'Snippet',
  pattern: 'snippets/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      summary: s.string().max(399),
      // slug: s.slug("snippets"),
      icon: s.string().max(50),
      date: s.string().max(10), // s.coerce.date(),
      // file: s.file(), // input file relpath, output file public path.
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      published: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      // meta: meta,
      // code: s.mdx(),
      content: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      // computed fields
      slug: meta.file.stem!.replace('/index', ''), // filename based slug
      permalink: `/snippets/${meta.file.stem!.replace('/index', '')}`,
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
      content: s.markdown(),
    })
    .transform((data, { meta }) => ({
      ...data,
      // computed fields
      slug: meta.file.stem!.replace('/index', ''), // filename based slug
      permalink: `/snippets/${meta.file.stem!.replace('/index', '')}`,
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
  mdx: {
    rehypePlugins: [rehypePrettyCode],
  },
  //   prepare: ({ categories, tags, posts }) => {
  //     const docs = posts.filter(
  //       (i) => process.env.NODE_ENV !== 'production' || !i.draft,
  //     )

  //     // missing categories, tags from posts or courses inlined
  //     const categoriesFromDoc = Array.from(
  //       new Set(docs.map((item) => item.categories).flat()),
  //     ).filter((i) => categories.find((j) => j.name === i) == null)
  //     categories.push(
  //       ...categoriesFromDoc.map((name) => ({
  //         name,
  //         slug: slugify(name),
  //         permalink: '',
  //         count: { total: 0, posts: 0 },
  //       })),
  //     )
  //     categories.forEach((i) => {
  //       i.count.posts = posts.filter((j) => j.categories.includes(i.name)).length
  //       i.count.total = i.count.posts
  //       i.permalink = `/${i.slug}`
  //     })

  //     const tagsFromDoc = Array.from(
  //       new Set(docs.map((item) => item.tags).flat()),
  //     ).filter((i) => tags.find((j) => j.name === i) == null)
  //     tags.push(
  //       ...tagsFromDoc.map((name) => ({
  //         name,
  //         slug: slugify(name),
  //         permalink: '',
  //         count: { total: 0, posts: 0 },
  //       })),
  //     )
  //     tags.forEach((i) => {
  //       i.count.posts = posts.filter((j) => j.tags.includes(i.name)).length
  //       i.count.total = i.count.posts
  //       i.permalink = `/${i.slug}`
  //     })

  //     // return false // return false to prevent velite from writing data to disk
  //   },
})
