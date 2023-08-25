'use client'

import { useQuery } from '@tanstack/react-query'
import millify from 'millify'

import { cn } from '@/lib/utils'

interface StatsCardProps {
  name: string
  children?: React.ReactNode
  stats: object
}

const StatsCard = ({ name, children, stats }: StatsCardProps) => {
  return (
    <div className="flex w-full flex-col items-center space-y-5 rounded bg-gray-100 p-5 shadow-lg dark:bg-gray-800">
      <h1 className="text-2xl font-black text-gray-500 dark:text-gray-500">
        {name}
      </h1>
      <span
        className={cn(
          'text-4xl font-black text-gray-700 duration-300 ease-in-out dark:text-gray-300',
          !stats ? 'scale-105 blur-lg' : 'scale-100 blur-0',
        )}
      >
        {children}
      </span>
      {/* )} */}
    </div>
  )
}

export const Stats = () => {
  const {
    data: stats,
    isError,
    error,
  } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await fetch('/api/stats')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>
    }
  }

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Total Users */}
      <StatsCard name={'Total Users'} stats={stats}>
        {!stats ? '-' : millify(stats.totalUsers)}
      </StatsCard>

      {/* Active Users */}
      <StatsCard name={'Active Users'} stats={stats}>
        {!stats ? '-' : millify(stats.activeUsers)}
      </StatsCard>

      {/* Views */}
      <StatsCard name={'Page Views'} stats={stats}>
        {!stats ? '-' : millify(stats.pageViews)}
      </StatsCard>

      {/* Engaged Sessions */}
      <StatsCard name={'Engaged Sessions'} stats={stats}>
        {!stats ? '-' : millify(stats.engagedSessions)}
      </StatsCard>

      {/* Engagement Duration */}
      <StatsCard name={'Engagement Duration'} stats={stats}>
        {!stats
          ? '-'
          : millify(stats.engagementDuration / stats.totalUsers / 60) + ' Min'}
      </StatsCard>

      {/* Engagement Rate */}
      <StatsCard name={'Engagement Rate'} stats={stats}>
        {!stats ? '-' : (stats.engagementRate * 100).toFixed(0) + '%'}
      </StatsCard>
    </div>
  )
}
