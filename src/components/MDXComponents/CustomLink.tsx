import Link, { LinkProps } from 'next/link'

export const CustomLink = (props: React.HTMLAttributes<HTMLAnchorElement>) => {
  const a = props as HTMLHyperlinkElementUtils
  const href = a.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
