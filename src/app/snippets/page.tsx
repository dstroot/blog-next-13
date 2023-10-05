import { allSnippets } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { SnippetCard } from '@/components/SnippetCard'

/*
NOTE: OG image is created by the og api route, there is no real
      image associated with the snippets route. So we generate one.
*/
export const generateMetadata = () => {
  const page = {
    title: 'Snippets',
    description: 'Short solutions to discrete problems.',
    slug: 'snippets',
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

export default function SnippetsPage() {
  let snippets = allSnippets.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  // Remove any unpublished snippets
  snippets = snippets.filter((snippet) => snippet.published)

  // Remove any future snippets
  snippets = snippets.filter(
    (snippet) => Date.parse(snippet.date) <= Date.now(),
  )

  return (
    <Container variant="padded">
      <PageHeader
        title="Snippets"
        description="Short solutions to discrete problems."
      />

      {/* Grid */}
      <div className="mb-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {snippets.map((snippet, _idx) => (
          <SnippetCard key={snippet.slugAsParams} {...snippets[_idx]} />
        ))}
      </div>
    </Container>
  )
}
