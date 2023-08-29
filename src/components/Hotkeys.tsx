'use client'

import { useRouter } from 'next/navigation'
import { useHotkeys } from '@mantine/hooks'

export const Hotkeys = () => {
  const router = useRouter()
  useHotkeys([['/', () => router.push(`/search`)]])

  return null
}
