import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'
import { useTheme } from 'next-themes'

import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { Mdx } from '@/components/MDXComponents/MDX'
import { PageHeader } from '@/components/PageHeader'

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

  const url = absoluteUrl('')
  const { resolvedTheme } = useTheme()

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('title', page.title)
  ogUrl.searchParams.set('mode', resolvedTheme || 'light')

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

  return (
    <Container variant="padded">
      <PageHeader title={page.title} description={page.description} size="lg" />
      <Mdx code={page.body.code} />
    </Container>
  )
}
