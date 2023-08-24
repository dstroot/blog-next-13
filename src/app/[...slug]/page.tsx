import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'

import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'
import { Mdx } from '@/components/mdx/mdx-components'
import { PageHeader } from '@/components/PageHeader'

interface PageProps {
  params: {
    slug: string[]
  }
}


async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/') ?? ''
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  const url = absoluteUrl('/')

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('title', page.title)
  ogUrl.searchParams.set('type', siteConfig.meta.name)
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

export default async function Page({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <div className="mx-auto my-6 max-w-3xl md:my-12">
      <PageHeader title={page.title} description={page.description} size="lg" />
      <Mdx code={page.body.code} />
    </div>
  )
}
