import { NextResponse } from 'next/server'

import { get, upd } from '@/lib/dynamodb'

const table = { TableName: process.env.TABLE_NAME }

// export const runtime = 'edge'

// GET
export async function GET({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const config = {
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
export async function POST({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const config = {
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
