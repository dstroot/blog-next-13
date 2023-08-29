import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { Icons } from '@/components/Icons'
import { MainNav } from '@/components/layouts/main-nav'
import { MobileNav } from '@/components/layouts/mobile-nav'
import { ThemeToggle } from '@/components/ThemeToggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav mainNavItems={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/search"
              className="f relative inline-flex h-8 w-8 items-center justify-center rounded-md  bg-transparent p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Icons.search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
