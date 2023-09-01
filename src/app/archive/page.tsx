import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { absoluteUrl } from '@/lib/utils'
import { Archive } from '@/components/Archive'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

export const generateMetadata = () => {
  const url = absoluteUrl('/')
  const page = {
    title: 'Archive',
    description: "All Dan Stroot's blog posts in one place.",
    type: 'Page', // TODO is this right?
    slug: '/archive',
  }

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('title', page.title)
  ogUrl.searchParams.set('type', page.type)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: absoluteUrl(page.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogUrl.toString()],
    },
  }
}

export default function ArchivePage() {
  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  // Remove any unpublished posts
  posts = posts.filter((posts) => posts.published)

  // Remove any future posts
  posts = posts.filter((posts) => Date.parse(posts.date) <= Date.now())

  return (
    <Container variant="padded">
      <PageHeader
        title="Archive"
        description="Here's all my posts in chronological order. Cheers!"
        size="lg"
      />
      {posts.length > 0 && <Archive posts={posts} />}
    </Container>
  )
}
