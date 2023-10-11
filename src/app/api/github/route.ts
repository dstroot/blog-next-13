import type { ServerRuntime } from 'next'
import { NextResponse } from 'next/server'

import { env } from '@/config/env.mjs'

export const runtime: ServerRuntime = 'edge' // 'nodejs' (default) | 'edge'

export async function GET() {
  const results = await fetch(encodeURI(env.GITHUB_API)).then((res) =>
    res.json(),
  )

  return NextResponse.json(
    {
      description: results.description,
      url: results.html_url,
      forks: results.forks,
      stars: results.stargazers_count,
      watchers: results.watchers_count,
    },
    { status: 200 },
  )
}
