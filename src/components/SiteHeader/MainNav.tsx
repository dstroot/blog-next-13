'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'

export interface NavLink {
  name: string
  href: string
  disabled?: boolean
  prefetch?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

type NavLinkProps = {
  navLinks: NavLink[]
}

export function MainNav({ navLinks }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <div className="ml-4 hidden gap-4 md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              isActive ? 'bg-accent' : null,
            )}
            href={link.href}
            key={link.name}
            prefetch={link.prefetch ?? true}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
