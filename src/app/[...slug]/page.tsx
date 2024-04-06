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
  //   console.log('Params: ' + params.slug)
  const slug = params?.slug?.join('/') ?? ''
  //   console.log('Slug: ' + slug)
  const page = pages.find((page: { slug: string }) => page.slug === slug)
  //   console.log("Page: " + page)

  if (!page) {
    return null
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
  const page = getPageFromParams(params)

  if (!page) {
    return {}
  }

  const url = absoluteUrl('/api/og')
  const ogUrl = new URL(url)
  ogUrl.searchParams.set('title', page.title)
  ogUrl.searchParams.set('mode', 'light')

  //   console.log('Meta: ' + absoluteUrl(page.permalink))

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

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return pages.map((page) => ({
    slug: page.slug.split('/'),
  }))
}

export default function Page({ params }: PageProps) {
  // Find the page for the current slug.
  const page = getPageFromParams(params)
  //   const page = pages.find(
  //     (page: { slug: string }) => page.slug === params.slug[0],
  //   )

  // 404 if the post does not exist.
  if (!page) notFound()

  //   // Remove the /pages prefix from the slug
  //   const formattedPage = {
  //     ...page,
  //     slug: page.slug.replace(/^\/pages/, ''),
  //   }

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
