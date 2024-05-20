const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
    turbo: {
      rules: {
        '*.jpg': ['./src/lib/imgixLoader.ts'],
        '*.png': ['./src/lib/imgixLoader.ts'],
        '*.jpeg': ['./src/lib/imgixLoader.ts'],
      },
    },
  },
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    loader: 'custom',
    loaderFile: './src/lib/imgixLoader.ts',
  },
  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  async redirects() {
    return [
      // this one just trims the old date paths
      // {
      //   source: "/(\\d{1,})/(\\d{1,})/(\\d{1,})/:slug",
      //   destination: "/posts/:slug", // Matched parameters can be used in the destination
      //   permanent: false,
      // },
      // this rebuilds the path to match the new format
      {
        source: '/:yr(\\d{1,})/:mo(\\d{1,})/:d(\\d{1,})/:slug',
        destination: '/posts/:yr-:mo-:d-:slug', // Matched parameters can be used in the destination
        permanent: false,
      },
    ]
  },
}

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    // your other plugins here
  ],
  nextConfig,
)
