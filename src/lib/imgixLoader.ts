import { env } from '@/config/env.mjs'

const imgixURL = env.NEXT_PUBLIC_IMGIX_URL

function normalizeSrc(src: string) {
  return src[0] === '/' ? src.slice(1) : src
}

interface LoaderProps {
  src: string
  width: number
  quality: number
}

export default function imgixLoader({ src, width, quality }: LoaderProps) {
  const url = new URL(`${imgixURL}/${normalizeSrc(src)}`)
  const params = url.searchParams

  params.set('auto', params.getAll('auto').join(',') || 'format')
  params.set('fit', params.get('fit') || 'max')
  params.set('w', params.get('w') || width.toString())

  if (quality) {
    params.set('q', quality.toString() || '50')
  }

  return url.href
}
