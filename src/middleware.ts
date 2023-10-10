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
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const group = `
  {
    "group": "csp-endpoint",
    "max_age": 30,
    "endpoints": [
      { "url": "/api/csp" }
    ]
  }`.replace(/[\n\s]/g, '')

  // https://developers.google.com/tag-platform/security/guides/csp
  // https://github.com/vercel/next.js/issues/55638
  // https://github.com/vercel/next.js/discussions/54907
  // https://cspvalidator.org/#url=https://www.danstroot.com/
  // https://csp-evaluator.withgoogle.com/
  // https://securityheaders.com/?q=https%3A%2F%2Fwww.danstroot.com&followRedirects=on

  // script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
  //   process.env.NODE_ENV === 'production' ? '' : `'unsafe-eval'`
  // };

  // Note: style-src requires 'unsafe-inline' mode because next/image adds inline styles.
  //       I think next/link does too. This means we can't use the nonce in style-src.
  const ContentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  worker-src 'self';
  form-action 'self';
  frame-src 'self' *.youtube-nocookie.com *.twitter.com https://ausi.github.io/;
  frame-ancestors 'self';
  script-src 'self' 'unsafe-inline' ${
    process.env.NODE_ENV === 'production' ? '' : "'unsafe-eval'"
  }  *.google-analytics.com *.googletagmanager.com *.twitter.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline' ${
    process.env.NODE_ENV === 'production' ? "'report-sample'" : ''
  } *.googleapis.com https://tagmanager.google.com https://fonts.googleapis.com;
  img-src * blob: data: https://ssl.gstatic.com https://www.gstatic.com www.googletagmanager.com;
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
  requestHeaders.set('x-nonce', nonce)
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
