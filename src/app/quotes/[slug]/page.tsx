import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { quotes } from 'velite/generated'

import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
// import { GitHubLink } from '@/components/posts/GitHubLink'
import { Quote2 } from '@/components/Quote2'
import { SendPageView } from '@/components/SendPageView'
import { Sharable } from '@/components/Sharable'

export const generateStaticParams = async () => {
  return quotes.map((quote) => ({ slug: quote.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const quote = quotes.find((quote) => quote.slug === params.slug)

  if (!quote) {
    return {}
  }

  const url = absoluteUrl('/api/og')
  const ogUrl = new URL(url)
  ogUrl.searchParams.set('title', quote.quote)
  ogUrl.searchParams.set('mode', 'light')
  //   ogUrl.searchParams.set('icon', snippet.icon)

  return {
    title: quote.quote,
    description: quote.quote,
    openGraph: {
      title: quote.quote,
      description: quote.quote,
      type: 'article',
      url: absoluteUrl(quote.permalink),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: quote.quote,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: quote.quote,
      description: quote.quote,
      images: [ogUrl.toString()],
    },
  }
}

const QuoteLayout = ({ params }: { params: { slug: string } }) => {
  // Find the post for the current slug.
  const quote = quotes.find((quote) => quote.slug === params.slug)

  // 404 if the quote does not exist.
  if (!quote) notFound()

  // get next slug
  let newSlug = 0
  if (quote.id != quotes.length) {
    newSlug = quote.id + 1
  } else {
    newSlug = 1
  }

  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Inspiring words. Beautifully expressed."
      />
      <Quote2 quote={quote} newSlug={newSlug} />

      <hr className="my-6" />

      <Sharable slug={quote.permalink} title={quote.quote} />
      {/* <GitHubLink path={github} /> */}
      <SendPageView slug={quote.slug} />
    </Container>
  )
}

export default QuoteLayout
