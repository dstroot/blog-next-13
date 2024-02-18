import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { snippets } from 'velite/generated'

import { env } from '@/config/env.mjs'
import { MDXContent } from '@/lib/mdx-content'
import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { DateFormatter } from '@/components/DateFormatter'
import { IconKey, Icons } from '@/components/Icons'
import { GitHubLink } from '@/components/posts/GitHubLink'
import { SendPageView } from '@/components/SendPageView'
import { Sharable } from '@/components/Sharable'

export const generateStaticParams = async () => {
  return snippets.map((snippet) => ({ slug: snippet.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const snippet = snippets.find((snippet) => snippet.slug === params.slug)

  if (!snippet) {
    return {}
  }

  const url = absoluteUrl('/api/og')
  const ogUrl = new URL(url)
  ogUrl.searchParams.set('title', snippet.title)
  ogUrl.searchParams.set('mode', 'light')
  ogUrl.searchParams.set('icon', snippet.icon)

  return {
    title: snippet.title,
    description: snippet.summary,
    openGraph: {
      title: snippet.title,
      description: snippet.summary,
      type: 'article',
      url: absoluteUrl(snippet.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: snippet.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: snippet.title,
      description: snippet.summary,
      images: [ogUrl.toString()],
    },
  }
}

const SnippetLayout = ({ params }: { params: { slug: string } }) => {
  // Find the post for the current slug.
  const snippet = snippets.find((snippet) => snippet.slug === params.slug)

  // 404 if the snippet does not exist.
  if (!snippet) notFound()

  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/content${snippet.permalink}.mdx`
  const Icon = Icons[snippet.icon as IconKey]

  return (
    <Container>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h2 className="order-2 my-3 text-2xl font-black leading-tight tracking-tighter md:order-1 md:my-0 md:text-4xl md:leading-none lg:text-5xl">
            {snippet.title}
          </h2>
          <div className="border-1 my-3 h-16 w-16 flex-none rounded-full bg-gray-300 dark:bg-gray-700 md:order-2 md:ml-4">
            <span className="grid h-full w-full place-items-center text-4xl text-gray-700 dark:text-gray-300">
              {Icon ? <Icon className="h-10 w-10" /> : null}
            </span>
          </div>
        </div>

        <p className="mb-4 text-xl text-muted-foreground">{snippet.summary}</p>

        <div className="flex space-x-2 text-xs">
          <p className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
            Date:{' '}
            <DateFormatter
              dateString={snippet.date}
              formatString="yyyy-MM-dd"
            />
          </p>
          <p className="hidden rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 md:block">
            Words: {snippet.metadata.wordCount}
          </p>
          <p className="hidden rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700 md:block">
            Time: {snippet.metadata.readingTime}
          </p>
        </div>

        <hr className="my-6" />

        <article>
          <div className="converted-html">
            <MDXContent code={snippet.content} />
          </div>
          <Sharable slug={snippet.slug} title={snippet.title} />
        </article>
        <GitHubLink path={github} />
      </div>
      <SendPageView slug={snippet.slug} />
    </Container>
  )
}

export default SnippetLayout
