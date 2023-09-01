import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Stats } from '@/components/Stats'

export const generateMetadata = () => {
  return { title: 'Analytics' }
}

export default function AnalyticsPage() {
  return (
    <Container variant="padded">
      <PageHeader
        title="Analytics"
        description="Measure what you treasure."
        size="lg"
      />

      <Stats />
      <div className="mt-6 flex flex-col p-6 text-lg">
        <span className="mb-1 mt-4 min-w-max font-bold uppercase text-gray-700 dark:text-gray-100 md:mt-0">
          Other Tools
        </span>
        <a
          className="font-medium hover:text-gray-500"
          href="https://analytics.google.com/analytics/web/#/p295106308/reports/dashboard?r=reporting-hub"
        >
          Google Analytics
        </a>
        <a
          className="font-medium hover:text-gray-500"
          href="https://umami-production-3f4a.up.railway.app/website/1/blog"
        >
          Umami Analytics
        </a>
        <a
          className="font-medium hover:text-gray-500"
          href="https://vercel.com/dstroot/blog-next/analytics"
        >
          Vercel Analytics
        </a>
      </div>
    </Container>
  )
}
