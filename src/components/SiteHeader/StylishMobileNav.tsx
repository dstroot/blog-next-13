'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/components/Icons'
import type { NavLink } from '@/components/SiteHeader/MainNav'

interface MobileNavProps {
  mainNavItems: NavLink[]
}

export function StylishMobileNav({ mainNavItems }: MobileNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent p-0 outline-none transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
        >
          <Icons.menu className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pl-20">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-4 text-2xl">
            {/* <Link
              aria-label="Home"
              href="/"
              className={cn(
                'text-foreground/70 transition-colors hover:text-foreground',
                pathname === '/' && 'text-foreground',
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl">Home</span>
            </Link> */}
            {mainNavItems.map((item, index) => (
              <MobileLink
                key={index}
                href={String(item.href)}
                pathname={pathname}
                setIsOpen={setIsOpen}
                disabled={item.disabled}
              >
                {item.name}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        pathname === href && 'text-foreground',
        disabled && 'pointer-events-none opacity-60',
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
