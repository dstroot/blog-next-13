import { useQuery } from '@tanstack/react-query'

export const useViewCount = (slug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [slug],
    queryFn: async () => {
      const response = await fetch(`/api/views/${slug}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
    refetchInterval: 15000,
  })

  //TODO pass "isError"
  return {
    views: data?.viewCount,
    isLoading: isLoading,
    isError: error,
    error: error,
  }
}
