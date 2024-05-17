import { quotes } from 'velite/generated'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { QuoteMasonry } from '@/components/QuoteMasonry'

export const generateMetadata = () => {
  return { title: 'Quotes' }
}

export default function QuotesPage() {
  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Inspiring words. Beautifully expressed."
      />
      <QuoteMasonry quotes={quotes} />
    </Container>
  )
}
