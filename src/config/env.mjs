import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/* Docs: https://env.t3.gg/ */

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),

    // AWS Dynamodb
    ACCESS_KEY: z.string().min(20),
    SECRET_KEY: z.string().min(40),
    REGION: z.string(),
    TABLE_NAME: z.string(),

    // GitHub
    GITHUB_API: z.string(),
    GITHUB_PERSONAL_TOKEN: z.string().min(40),

    // Google analytics
    ANALYTICS_CLIENT_EMAIL: z.string(),
    ANALYTICS_PRIVATE_KEY: z.string(),
    ANALYTICS_PROJECT_ID: z.string(),
    ANALYTICS_PROPERTY_ID: z.string(9),
  },

  /*
   * Environment variables available on the client (and server).
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    // IMGIX
    NEXT_PUBLIC_IMGIX_URL: z.string(),

    // Public URL
    NEXT_PUBLIC_APP_URL: z.string(),
    NEXT_PUBLIC_VERCEL_ENV: z.enum(['production', 'preview', 'development']),

    // Github
    NEXT_PUBLIC_GITHUB_REPO: z.string(),

    // Algolia
    NEXT_PUBLIC_ALGOLIA_APP_ID: z.string(),
    NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: z.string(),
  },

  /*
   * Due to how Next.js bundles environment variables we need to manually destructure them.
   * For Next.js >= 13.4.4, you only need to destructure client variables (those that
   * start with "NEXT_PUBLIC_")
   */
  experimental__runtimeEnv: {
    NEXT_PUBLIC_IMGIX_URL: process.env.NEXT_PUBLIC_IMGIX_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_GITHUB_REPO: process.env.NEXT_PUBLIC_GITHUB_REPO,
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY:
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  },
})
