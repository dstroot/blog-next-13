import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
export function middleware(request: NextRequest) {
  //   const nonce = crypto.randomUUID()

  const group = `
  {
    "group": "csp-endpoint",
    "max_age": 30,
    "endpoints": [
      { "url": "/api/csp" }
    ]
  }`.replace(/[\n\s]/g, '')

  // developers.google.com/tag-platform/tag-manager/web/csp
  const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  worker-src 'self';
  form-action 'self';
  frame-src 'self' *.youtube-nocookie.com *.twitter.com https://ausi.github.io/;
  frame-ancestors 'self';
  script-src ${
    process.env.NODE_ENV === 'production'
      ? "'self' 'unsafe-inline'"
      : "'self' 'unsafe-inline' 'unsafe-eval'"
  }  *.google-analytics.com *.googletagmanager.com *.twitter.com https://va.vercel-scripts.com;
  child-src *.youtube.com *.youtube-nocookie.com *.google.com *.twitter.com;
  style-src ${
    process.env.NODE_ENV === 'production'
      ? "'self' 'unsafe-inline' 'report-sample'"
      : "'self' 'unsafe-inline'"
  } *.googleapis.com https://tagmanager.google.com https://fonts.googleapis.com;
  img-src * blob: data: https://ssl.gstatic.com https://www.gstatic.com;
  media-src 'none';
  connect-src 'self' ws://localhost:3000 https://vitals.vercel-insights.com https://www.google-analytics.com https://*.algolia.net https://*.algolianet.com https://gist.githubusercontent.com https://umami-production-3f4a.up.railway.app https://vercel-vitals.axiom.co;
  font-src 'self' https://fonts.gstatic.com data: ;
  report-uri /api/csp;
  report-to csp-endpoint;
  block-all-mixed-content;
  ${process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests;' : ''}
`
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers()
  //   requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', ContentSecurityPolicy)
  requestHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  requestHeaders.set('X-Frame-Options', 'SAMEORIGIN')
  requestHeaders.set('X-Content-Type-Options', 'nosniff')
  requestHeaders.set('X-DNS-Prefetch-Control', 'on')
  requestHeaders.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  )
  requestHeaders.set('Permissions-Policy', 'microphone=(), geolocation=()')
  requestHeaders.set(
    'Access-Control-Allow-Origin',
    process.env.NODE_ENV === 'production'
      ? "'https://www.danstroot.com'"
      : "'http://localhost:3000/'",
  )
  requestHeaders.set('Vary', 'Origin')
  requestHeaders.set('Report-To', group)
  requestHeaders.set('Cross-Origin-Embedder-Policy', 'unsafe-none')
  requestHeaders.set('Cross-Origin-Opener-Policy', 'same-origin')
  requestHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin')

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  })
}
