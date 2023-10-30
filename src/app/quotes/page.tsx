import { getRandomQuote } from '@/lib/getRandomQuote'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Quote } from '@/components/Quote'

export const generateMetadata = () => {
  return { title: 'Quotes' }
}

export default function QuotesPage() {
  const randomQuote = getRandomQuote()

  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Thoughts. Beautifully expressed."
      />
      <Quote {...randomQuote} />
    </Container>
  )
}
