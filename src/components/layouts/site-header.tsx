import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Icons } from '@/components/Icons'
import { MainNav } from '@/components/layouts/main-nav'
import { MobileNav } from '@/components/layouts/mobile-nav'
import { ThemeToggle } from '@/components/ThemeToggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-12 items-center">
        <Link aria-label="Home" href="/">
          <Avatar className="mr-6">
            <AvatarImage
              src="https://danstroot.imgix.net/assets/blog/authors/dan.jpeg?auto=format&fit=max&w=80"
              alt="Dan Stroot"
            />
            <AvatarFallback />
          </Avatar>
        </Link>
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="/search"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-md  bg-transparent p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Icons.search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
            <ThemeToggle />
            <MobileNav mainNavItems={siteConfig.mainNav} />
          </nav>
        </div>
      </div>
    </header>
  )
}
