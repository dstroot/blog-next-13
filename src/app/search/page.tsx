import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import Search from '@/components/search/Search'

export const generateMetadata = () => {
  const url = absoluteUrl('')
  const page = {
    title: 'Search',
    description: "Search all Dan Stroot's blog posts... fast.",
    slug: 'search',
  }

  const ogUrl = new URL(`${url}/api/og`)
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

export default function Index() {
  return (
    <Container variant="padded">
      <PageHeader title="Search" description="Find anything fast." size="lg" />
      <Search />
    </Container>
  )
}
