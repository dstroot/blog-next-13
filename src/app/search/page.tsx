import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import Search from '@/components/Search'

export const generateMetadata = () => {
  return { title: 'Search' }
}

export default function Index() {
  return (
    <Container variant="padded">
      <PageHeader title="Search" description="Find anything fast." size="lg" />
      <Search />
    </Container>
  )
}
