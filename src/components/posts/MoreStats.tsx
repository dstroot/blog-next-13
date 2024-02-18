'use client'

import { useViewCount } from '@/hooks/useViewCount'
import { ReadStats } from '@/components/posts/ReadStats'
import { Views } from '@/components/posts/Views'

interface MoreStatsProps {
  slug: string
  stats: {
    readingTime: number
    wordCount: number
  }
}
export const MoreStats = ({ slug, stats }: MoreStatsProps) => {
  const { views, isLoading } = useViewCount(slug)

  return (
    <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
      <div>
        <ReadStats stats={stats} />
      </div>
      <div>{isLoading ? null : <Views viewCount={views} />}</div>
    </div>
  )
}
