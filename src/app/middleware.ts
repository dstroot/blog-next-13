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
  const nonce = crypto.randomUUID()
  const group = `
  {
    "group": "csp-endpoint",
    "max_age": 30,
    "endpoints": [{ "url": "/api/csp" }]
  }`.replace(/[\n\s]/g, '')
  const cspHeader = `
    base-uri 'self';
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' *.googletagmanager.com *.twitter.com;
    child-src *.youtube.com *.youtube-nocookie.com *.google.com *.twitter.com;
    style-src 'self' 'nonce-${nonce}' *.googleapis.com https://tagmanager.google.com;
    connect-src 'self' ws://localhost:3000  https://*.algolia.net https://*.algolianet.com;
  font-src 'self' https://fonts.gstatic.com data: ;
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    media-src 'none';
    worker-src 'self';
    form-action 'self';
    frame-src 'self' *.youtube-nocookie.com *.twitter.com;
    frame-ancestors 'self';
    block-all-mixed-content;
    ${process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests;' : ''}
`

  const requestHeaders = new Headers()
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim(),
  )
  requestHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  requestHeaders.set('X-Frame-Options', 'SAMEORIGIN')
  requestHeaders.set('X-Content-Type-Options', 'nosniff')
  requestHeaders.set('X-DNS-Prefetch-Control', 'on')
  requestHeaders.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  )
  requestHeaders.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  )
  requestHeaders.set(
    'Access-Control-Allow-Origin',

    process.env.NODE_ENV === 'production'
      ? "'https://www.danstroot.com'"
      : "'http://localhost:3000/'",
  )
  requestHeaders.set('Vary', 'Origin')
  requestHeaders.set('Report-To', group)
  /* To opt in to a cross-origin isolated state, you need to send the following
      HTTP headers on the main document:
         Cross-Origin-Embedder-Policy: require-corp
         Cross-Origin-Opener-Policy: same-origin
    You can determine whether a web page is in a cross-origin isolated state
    by examining "self.crossOriginIsolated" in the console.
  */
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

const ContentSecurityPolicy = `
  script-src ${
    process.env.NODE_ENV === 'production'
      ? "'self' 'unsafe-eval' 'unsafe-inline'"
      : "'self' 'unsafe-eval' 'unsafe-inline'"
  } https://gmail.us5.list-manage.com *.google-analytics.com *.googletagmanager.com *.twitter.com https://umami-production-3f4a.up.railway.app;

  child-src *.youtube.com *.youtube-nocookie.com *.google.com *.twitter.com;

  style-src ${
    process.env.NODE_ENV === 'production'
      ? "'self' 'unsafe-inline' 'report-sample'"
      : "'self' 'unsafe-inline'"
  } *.googleapis.com https://tagmanager.google.com https://fonts.googleapis.com;

  img-src * blob: data: https://ssl.gstatic.com https://www.gstatic.com;

  connect-src 'self' ws://localhost:3000 https://vitals.vercel-insights.com https://www.google-analytics.com https://*.algolia.net https://*.algolianet.com https://gist.githubusercontent.com https://umami-production-3f4a.up.railway.app https://vercel-vitals.axiom.co;
  font-src 'self' https://fonts.gstatic.com data: ;
`.replace(/\n/g, '')
