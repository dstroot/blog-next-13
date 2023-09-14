import { NextResponse } from 'next/server'
import { BetaAnalyticsDataClient } from '@google-analytics/data'

import { env } from '@/config/env.mjs'

// NOTE: Can't use edge

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: env.ANALYTICS_CLIENT_EMAIL,
    private_key: env.ANALYTICS_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  projectId: env.ANALYTICS_PROJECT_ID,
})

const propertyId = env.ANALYTICS_PROPERTY_ID

export async function GET() {
  // formats
  let today = new Date().getTime() - 60 * 60 * 24 * 60 * 1000
  let day = new Date(today).getDate()
  let month = new Date(today).getMonth() + 1
  let year = new Date(today).getFullYear()
  let dayFormat = `${year}-${month}-${day}`

  const totalReport = await analyticsDataClient.runReport({
    property: 'properties/' + propertyId,
    dateRanges: [
      {
        startDate: dayFormat,
        endDate: 'today',
      },
    ],
    // https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema
    metrics: [
      { name: 'totalUsers' },
      { name: 'activeUsers' },
      { name: 'screenpageViews' },
      { name: 'engagedSessions' },
      { name: 'userEngagementDuration' },
      { name: 'engagementRate' },
    ],
  })

  //   if (totalReport && totalReport[0]) {

  return NextResponse.json(
    {
      totalUsers: totalReport[0].rows![0].metricValues![0].value || 0,
      activeUsers: totalReport[0].rows![0].metricValues![1].value || 0,
      pageViews: totalReport[0].rows![0].metricValues![2].value || 0,
      engagedSessions: totalReport[0].rows![0].metricValues![3].value || 0,
      engagementDuration: totalReport[0].rows![0].metricValues![4].value || 0,
      engagementRate: totalReport[0].rows![0].metricValues![5].value || 0,
    },
    { status: 200 },
  )
  //   }
}
