'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient()

export const Providers = ({
  nonce,
  children,
}: {
  nonce: string
  children: React.ReactNode
}) => {
  return (
    <ThemeProvider attribute="class" nonce={nonce}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
