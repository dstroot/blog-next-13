'use client'

import { useQuery } from '@tanstack/react-query'
import millify from 'millify'

import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface StatsCardProps {
  name: string
  children?: React.ReactNode
  stats: object
}

const StatsCard = ({ name, children, stats }: StatsCardProps) => {
  return (
    <Card className="flex h-full flex-col bg-zinc-100 shadow-md dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-muted-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-zinc flex-grow">
        <span
          className={cn(
            'text-4xl duration-300 ease-in-out',
            !stats ? 'scale-105 blur-lg' : 'scale-100 blur-0',
          )}
        >
          {children}
        </span>
      </CardContent>
    </Card>
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
