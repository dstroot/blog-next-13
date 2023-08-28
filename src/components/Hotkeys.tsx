'use client'

import { useHotkeys } from '@mantine/hooks'
import { useRouter } from 'next/navigation'

export const Hotkeys = () => {
  const router = useRouter()
  useHotkeys([['/', () => router.push(`/search`)]])
  return null
}
