const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    loader: 'custom',
    loaderFile: './src/lib/imgixLoader.ts',
  },
}

module.exports = withContentlayer(nextConfig)
