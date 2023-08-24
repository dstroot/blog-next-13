import { cn } from '@/lib/utils'

import { socialLinks } from './data'

export const SocialLinks = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <>
      {socialLinks.map((s) => (
        <a
          href={s.url}
          rel="noreferrer"
          target="_blank"
          className={cn(className)}
          key={s.name}
          aria-label={s.aria}
          {...props}
        >
          <span className="sr-only">{s.aria}</span>
          {s.icon}
        </a>
      ))}
    </>
  )
}
