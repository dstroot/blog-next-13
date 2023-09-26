'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'

// import { Provider } from 'react-wrap-balancer'

const queryClient = new QueryClient()

export const Providers = ({
  nonce,
  children,
}: {
  nonce: string
  children: React.ReactNode
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider nonce={nonce}> */}
      <ThemeProvider attribute="class" nonce={nonce}>
        {children}
      </ThemeProvider>
      {/* </Provider> */}
    </QueryClientProvider>
  )
}
