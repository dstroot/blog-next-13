import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'

import { env } from '@/config/env.mjs'
import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { Mdx } from '@/components/MDXComponents/MDX'
import { PageHeader } from '@/components/PageHeader'
import { GitHubLink } from '@/components/posts/GitHubLink'

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/') ?? ''
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

/*
NOTE: OG image is created by the og api route, there is no real
      image associated with non-blog posts. So we generate one.
*/
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  const url = absoluteUrl('/api/og')
  const ogUrl = new URL(url)
  ogUrl.searchParams.set('title', page.title)
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

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/content/${page._id}`

  return (
    <Container variant="padded">
      <PageHeader title={page.title} description={page.description} />
      <Mdx code={page.body.code} />
      <GitHubLink path={github} />
    </Container>
  )
}
