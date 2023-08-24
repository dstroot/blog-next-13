import { ReactNode } from 'react'
import Link from 'next/link'

type CustomLinkProps = {
  href: string
  children: ReactNode
}

export const CustomLink = (props: CustomLinkProps) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return <Link href={props.href}>{props.children}</Link>
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
