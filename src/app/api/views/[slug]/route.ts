import { NextRequest, NextResponse } from 'next/server'
import type { GetCommandInput, UpdateCommandInput } from '@aws-sdk/lib-dynamodb'

import { env } from '@/config/env.mjs'
import { get, upd } from '@/lib/dynamodb'

const table = { TableName: env.TABLE_NAME }

// export const runtime = 'edge'

// GET
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug

  const config: GetCommandInput = {
    ...table,
    Key: {
      slug: slug,
    },
  }

  try {
    const data = await get(config)
    if (data.Item) {
      return NextResponse.json(data.Item)
    } else {
      return NextResponse.json({ slug: 'not found', viewCount: 0 })
    }
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}

// POST
export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug

  const config: UpdateCommandInput = {
    ...table,
    Key: {
      slug: slug,
    },
    UpdateExpression:
      'SET viewCount = if_not_exists(viewCount, :initial) + :incr',
    ExpressionAttributeValues: {
      ':initial': 0,
      ':incr': 1,
    },
    ReturnValues: 'UPDATED_NEW',
  }

  try {
    const data = await upd(config)
    return NextResponse.json({ result: 'success', data: data.Attributes })
  } catch (err) {
    return NextResponse.json(err, { status: 500 })
  }
}
