import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pages } from 'velite/generated'

import { env } from '@/config/env.mjs'
import { MDXContent } from '@/lib/mdx-content'
import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { GitHubLink } from '@/components/posts/GitHubLink'

interface PageProps {
  params: {
    slug: string[]
  }
}

function getPageFromParams(params: PageProps['params']) {
  // join the array of strings using "/" so we can compare to slug in the pages array
  const slug = params?.slug?.join('/') ?? ''
  const page = pages.find((page: { slug: string }) => page.slug === slug)

  if (!page) {
    return null
  }

  return page
}

/*
NOTE: OG image is created by the og api route, there is no real
      image associated with non-blog posts. So we generate one.
*/
export function generateMetadata({ params }: PageProps): Metadata {
  const page = getPageFromParams(params)

  if (!page) {
    return {}
  }

  //   const url = absoluteUrl('/api/og')
  //   const ogUrl = new URL(url)

  const url = absoluteUrl('/')
  const ogUrl = new URL(`${url}/api/og`)

  ogUrl.searchParams.set('title', page.title)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: absoluteUrl(page.permalink),
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

export function generateStaticParams(): PageProps['params'][] {
  return pages.map((page) => ({
    slug: page.slug.split('/'),
  }))
}

export default function Page({ params }: PageProps) {
  // Find the page for the current slug.
  const page = getPageFromParams(params)

  // 404 if the post does not exist.
  if (!page) notFound()

  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/content/pages${page.permalink}.mdx`

  return (
    <Container variant="padded">
      <PageHeader title={page.title} description={page.description} />

      <div className="converted-html">
        <MDXContent code={page.content} />
      </div>

      <GitHubLink path={github} />
    </Container>
  )
}
