import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Container } from '@/components/Container'
import { Icons } from '@/components/Icons'
import { MainNav } from '@/components/SiteHeader/MainNav'
import { MobileNav } from '@/components/SiteHeader/MobileNav'
import { ThemeToggle } from '@/components/SiteHeader/ThemeToggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/75 backdrop-blur">
      <Container className="flex h-12 items-center">
        <Link aria-label="Home" href="/" className="relative mr-2 h-8 w-8">
          <Image
            sizes="32px"
            priority={true}
            className="overflow-hidden rounded-full object-cover duration-300 ease-in-out group-hover:opacity-[85%]"
            src="/assets/blog/authors/dan.jpeg"
            alt="Dan Stroot"
            fill
          />
        </Link>
        <MainNav navLinks={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            <Link
              href="/search"
              aria-label="Search"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-md  bg-transparent p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Icons.search className="h-6 w-6" />
            </Link>
            <ThemeToggle />
            <MobileNav mainNavItems={siteConfig.mainNav} />
          </nav>
        </div>
      </Container>
    </header>
  )
}
