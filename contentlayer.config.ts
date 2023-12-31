import {
  defineDocumentType,
  defineNestedType,
  LocalDocument,
  makeSource,
} from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import emoji, { type RemarkEmojiOptions } from 'remark-emoji'
import remarkGfm from 'remark-gfm'

// https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype

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

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    picture: {
      type: 'string',
      required: true,
    },
  },
}))

const OGImage = defineNestedType(() => ({
  name: 'OGImage',
  fields: {
    url: {
      type: 'string',
    },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'An excerpt of the post',
      required: true,
    },
    coverImage: {
      type: 'string',
      description: 'path to post cover image',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Published indicator',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
      required: true,
    },
    ogImage: {
      type: 'nested',
      of: OGImage,
      required: true,
    },
    seoURL: {
      type: 'string',
      description: 'SEO slug',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    stats: {
      type: 'nested',
      resolve: (doc: LocalDocument) => {
        const content = doc.body.raw
        return readingTime(content)
      },
    },
  },
}))

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: `snippets/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A summary of the snippet',
      required: true,
    },
    icon: {
      type: 'string',
      description: 'name of the icon to use',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Published indicator',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'List of tags to describe the snippet',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    stats: {
      type: 'nested',
      resolve: (doc: LocalDocument) => {
        const content = doc.body.raw
        return readingTime(content)
      },
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
      description: 'Page title',
    },
    description: {
      type: 'string',
      description: 'Page description',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc: LocalDocument) =>
        doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Snippet, Page],
  mdx: {
    remarkPlugins: [[emoji, emojiOptions], [remarkGfm]],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})
