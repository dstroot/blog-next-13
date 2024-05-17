// import { getRandomQuote } from '@/lib/getRandomQuote'

// import { Quote } from '@/components/Quote'
import { quotes } from 'velite/generated'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

export const dynamic = 'force-dynamic'

export const generateMetadata = () => {
  return { title: 'Quotes' }
}

export default function QuotesPage() {
  //   const randomQuote = getRandomQuote()

  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Inspiring words. Beautifully expressed."
      />
      {/* <Quote {...randomQuote} /> */}

      {/* Grid */}
      <div className="mb-6 grid	w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {quotes.map((quote, _idx) => (
          <a key={_idx} href={`/quotes/${quote.id}`}>
            <div className="border border-gray-500">
              <p className="h-24 truncate text-balance p-6 text-base font-medium italic text-gray-900 dark:text-white md:text-lg">
                {quote.quote}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Container>
  )
}
