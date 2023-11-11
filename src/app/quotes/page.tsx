import { getRandomQuote } from '@/lib/getRandomQuote'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Quote } from '@/components/Quote'

export const dynamic = 'force-dynamic'

export const generateMetadata = () => {
  return { title: 'Quotes' }
}

export default function QuotesPage() {
  const randomQuote = getRandomQuote()

  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Inspiring words. Beautifully expressed."
      />
      <Quote {...randomQuote} />
    </Container>
  )
}
