import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Container } from '@/components/Container'
import { Icons } from '@/components/Icons'
import { StylishMainNav } from '@/components/SiteHeader/StylishMainNav'
import { StylishMobileNav } from '@/components/SiteHeader/StylishMobileNav'
import { StylishThemeToggle } from '@/components/SiteHeader/StylishThemeToggle'

export const StylishNav = () => {
  return (
    // <header className="sticky top-4 z-40 w-full bg-background/75 backdrop-blur">
    <Container className="sticky top-0 z-40 mx-auto px-4 py-2">
      <header className="relative flex w-full items-center divide-x divide-zinc-600 rounded-full bg-zinc-900 px-4 py-2 shadow-lg shadow-black/40">
        <Link aria-label="Home" href="/" className="relative h-8 w-8">
          <Image
            sizes="32px"
            priority={true}
            className="overflow-hidden rounded-full object-cover duration-300 ease-in-out group-hover:opacity-[85%]"
            src="/assets/blog/authors/dan.jpeg"
            alt="Dan Stroot"
            fill
          />
        </Link>
        <StylishMainNav navLinks={siteConfig.mainNav} />
        <div className="flex flex-1"></div>
        <div className="flex items-center justify-end">
          <nav className="ml-4 flex items-center space-x-2">
            <Link
              href="/search"
              aria-label="Search"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent p-0 hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring"
            >
              {/* <button className="text-gs-background-1000 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-600 outline-none transition-colors hover:bg-gray-500 focus-visible:ring-1 focus-visible:ring-gray-400 disabled:opacity-50 disabled:hover:bg-gray-700"></button> */}

              <Icons.search className="h-4 w-4" />
            </Link>
            <StylishThemeToggle />
            <StylishMobileNav mainNavItems={siteConfig.mainNav} />
          </nav>
        </div>
      </header>
    </Container>
    // </header>
  )
}
