import { quotes } from 'velite/generated'

import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

/*
NOTE: OG image is created by the og api route, there is no real
      image associated with the snippets route. So we generate one.
*/
export const generateMetadata = () => {
  const page = {
    title: 'Quotes',
    description: 'Inspiring words. Beautifully expressed.',
    slug: 'quotes',
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

export default function QuotesPage() {
  let firstColumn = quotes.filter((_, index) => index % 3 === 0)
  let secondColumn = quotes.filter((_, index) => index % 3 === 1)
  let thirdColumn = quotes.filter((_, index) => index % 3 === 2)

  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Inspiring words. Beautifully expressed."
      />
      <div className="converted-html grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid auto-rows-min gap-y-0">
          {firstColumn.map((quote) => (
            <a key={quote.id} href={`/quotes/${quote.id}`}>
              <blockquote className="text-balance duration-200 ease-in-out hover:scale-[103%] hover:bg-gray-100 hover:dark:bg-gray-800">
                {quote.quote}
              </blockquote>
            </a>
          ))}
        </div>
        <div className="grid auto-rows-min gap-y-0">
          {secondColumn.map((quote, _idx) => (
            <a key={quote.id} href={`/quotes/${quote.id}`}>
              <blockquote className="text-balance duration-200 ease-in-out hover:scale-[103%] hover:bg-gray-100 hover:dark:bg-gray-800">
                {quote.quote}
              </blockquote>
            </a>
          ))}
        </div>
        <div className="grid auto-rows-min gap-y-0">
          {thirdColumn.map((quote, _idx) => (
            <a key={quote.id} href={`/quotes/${quote.id}`}>
              <blockquote className="text-balance duration-200 ease-in-out hover:scale-[103%] hover:bg-gray-100 hover:dark:bg-gray-800">
                {quote.quote}
              </blockquote>
            </a>
          ))}
        </div>
      </div>
    </Container>
  )
}
