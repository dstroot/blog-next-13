'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient()

// import { LazyMotion, domAnimation } from 'framer-motion';

// see: https://beta.nextjs.org/docs/rendering/server-and-client-components
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      {/* <LazyMotion features={domAnimation}> */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      {/* </LazyMotion> */}
    </ThemeProvider>
  )
}
