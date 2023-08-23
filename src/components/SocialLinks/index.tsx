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

// import { cn } from '@/lib/utils'

// function Skeleton({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) {
//   return (
//     <div
//       className={cn('bg-primary/10 animate-pulse rounded-md', className)}
//       {...props}
//     />
//   )
// }

// export { Skeleton }
