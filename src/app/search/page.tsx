import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import Search from '@/components/search/Search'

/*
NOTE: OG image is created by the og api route, there is no real
      image associated with the search route. So we generate one.
*/
export const generateMetadata = () => {
  const page = {
    title: 'Search',
    description: "Search all Dan Stroot's blog posts... fast.",
    slug: 'search',
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

export default function Index() {
  return (
    <Container variant="padded">
      <PageHeader title="Search" description="Find anything. Fast." />
      <Search />
    </Container>
  )
}
