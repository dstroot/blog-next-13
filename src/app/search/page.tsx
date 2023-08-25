import { PageHeader } from '@/components/PageHeader'
import Search from '@/components/Search'

export const generateMetadata = () => {
  return { title: 'Search' }
}

export default function Index() {
  return (
    <div className="mx-auto my-6 max-w-3xl md:my-12">
      <PageHeader title="Search" description="Find anything fast." size="lg" />
      <Search />
    </div>
  )
}
