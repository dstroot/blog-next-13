import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

import { put } from '@/lib/dynamodb'

export async function POST(req: NextRequest) {
  let params = { TableName: 'csp_reports_v2', Item: {} }
  const cspReport = await req.json()

  console.log(cspReport)
  console.log(params)

  // validate we have a report
  if (!cspReport.hasOwnProperty('csp-report')) {
    return NextResponse.json(
      { message: 'csp report missing' },
      {
        status: 400,
      },
    )
  }

  // create item
  const item = cspReport['csp-report']
  item.id = crypto.randomUUID()
  item.timestamp = new Date().toISOString()

  params = {
    ...params,
    Item: item,
  }

  try {
    const data = await put(params)
    return NextResponse.json(
      { result: 'success', data: data },
      {
        status: 201,
      },
    )
  } catch (err) {
    err instanceof Error ? console.log(`${err.message}`) : console.log(err)
    return NextResponse.json(
      { error: 'Unable to post CSP error.' },
      {
        status: 500,
      },
    )
  }
}
