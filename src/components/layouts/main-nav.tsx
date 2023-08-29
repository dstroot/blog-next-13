'use client'

import * as React from 'react'
import Link from 'next/link'
// import type { MainNavItem } from '@/types'

// import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  //   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //   NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Icons } from '@/components/Icons'

export interface NavItem {
  name: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
}

interface MainNavProps {
  items: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-6 md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), 'h-auto')}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
