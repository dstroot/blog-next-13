import Link from 'next/link'

import { Icons } from '@/components/Icons'

export const CustomLink = (props: React.HTMLAttributes<HTMLAnchorElement>) => {
  const a = props as HTMLHyperlinkElementUtils
  const href = a.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} prefetch={false} {...props}>
        {props.children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      <span className="mr-1">{props.children}</span>
      <Icons.externalLink className="mb-1 inline-block h-4 w-4" />
    </a>
  )
}
