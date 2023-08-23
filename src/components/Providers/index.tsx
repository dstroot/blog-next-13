'use client'

// import { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: React.ReactNode }) => {
  // const [isClient, setIsClient] = useState(false)
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {/* {isClient ? ( */}
      <ThemeProvider attribute="class">{children}</ThemeProvider>
      {/* ) : (
        <>{children}</>
      )} */}
    </QueryClientProvider>
  )
}
