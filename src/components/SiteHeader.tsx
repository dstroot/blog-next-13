import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Container } from '@/components/Container'
import { ThemeToggle } from '@/components/ThemeToggle'

// import { Combobox } from '@/components/combobox'
// import { MainNav } from '@/components/layouts/main-nav'
// import { MobileNav } from '@/components/layouts/mobile-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur">
      <Container variant="default">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              className="flex h-6 items-center space-x-2 rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              href="/"
              aria-label="Link to home page"
            >
              <Avatar>
                <AvatarImage
                  src="https://danstroot.imgix.net/assets/blog/authors/dan.jpeg?auto=format&fit=max&w=80"
                  alt="Dan Stroot"
                />
                <AvatarFallback />
              </Avatar>
              {/* <span className="text-2xl font-medium leading-none">
              Dan Stroot
            </span> */}
            </Link>
            <nav className="hidden md:flex md:items-center md:space-x-6">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.name}
                  className="mt-1 space-y-3 rounded-md text-sm font-medium text-foreground ring-offset-background transition-colors hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* <Combobox /> */}

            <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent p-0 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 xl:mr-2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span className="hidden xl:inline-flex">Search...</span>
              <span className="sr-only">Search</span>
              <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
                <abbr title="Command">⌘</abbr>K
              </kbd>
            </button>

            <ThemeToggle />

            <button
              className="hamburger inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 md:hidden"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R3ipja:"
              data-state="closed"
            >
              <svg
                fill="none"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                </g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                />
                <g>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                  />
                </g>
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
