'use client'

import type { ReadTimeResults } from 'reading-time'

import { useViewCount } from '@/hooks/useViewCount'
import { ReadStats } from '@/components/ReadStats'
import { Views } from '@/components/Views'

interface MoreStatsProps {
  slug: string
  stats: ReadTimeResults
}
export const MoreStats = ({ slug, stats }: MoreStatsProps) => {
  const { views, isLoading } = useViewCount(slug)

  return (
    <div className="mt-2 flex items-center justify-between text-sm text-gray-600 transition-colors dark:text-gray-300">
      <div>
        <ReadStats stats={stats} />
      </div>
      <div>{isLoading ? null : <Views viewCount={views} />}</div>
    </div>
  )
}
