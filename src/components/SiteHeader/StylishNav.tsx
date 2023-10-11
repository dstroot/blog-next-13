import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { Container } from '@/components/Container'
import { Icons } from '@/components/Icons'
import { MainNav } from '@/components/SiteHeader/MainNav'
import { MobileNav } from '@/components/SiteHeader/MobileNav'
import { StylishMainNav } from '@/components/SiteHeader/StylishMainNav'
import { StylishThemeToggle } from '@/components/SiteHeader/StylishThemeToggle'

export const StylishNav = () => {
  return (
    <header className="sticky top-4 z-40 w-full">
      {/* <Container className="m-0 flex"> */}
      <div className="flex w-full justify-center px-6">
        <div className="min-h-20 relative z-10 flex w-full max-w-lg items-center justify-center gap-2 divide-x divide-zinc-600 rounded-3xl bg-zinc-900 px-2 py-2 shadow-lg shadow-black/40">
          <div className="flex items-center justify-center rounded-l-full">
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
            <div className="flex flex-1 items-center justify-end">
              <nav className="flex items-center space-x-2">
                <Link
                  href="/search"
                  aria-label="Search"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 bg-transparent p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {/* <button className="text-gs-background-1000 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-600 outline-none transition-colors hover:bg-gray-500 focus-visible:ring-1 focus-visible:ring-gray-400 disabled:opacity-50 disabled:hover:bg-gray-700"></button> */}

                  <Icons.search className="h-6 w-6" />
                </Link>
                <StylishThemeToggle />
                <MobileNav mainNavItems={siteConfig.mainNav} />
              </nav>
            </div>
          </div>
          {/* <div className="flex min-w-0 flex-1 items-center self-end">
            <form className="h-full w-full [&_textarea]:pr-11">
              <div
                className="relative flex h-fit min-h-full w-full items-center transition-all duration-300"
                style={{ height: '44px' }}
              >
                <label htmlFor="textarea-input" className="sr-only">
                  Prompt
                </label>
                <div className="relative flex min-w-0 flex-1 self-start">
                  <textarea
                    id="home-prompt"
                    maxLength={1000}
                    className="min-w-[50%] flex-[1_0_50%] resize-none border-0 bg-transparent py-3 pl-3 text-base text-white shadow-none outline-none ring-0 [scroll-padding-block:0.75rem] selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 disabled:bg-transparent disabled:opacity-80 sm:min-h-[15px] sm:leading-6 md:text-sm"
                    spellCheck="false"
                    rows={1}
                    placeholder="A minimalist blog post template"
                    style={{ height: '44px !important' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="send-button"
                  className="text-gs-background-1000 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-600 outline-none transition-colors hover:bg-gray-500 focus-visible:ring-1 focus-visible:ring-gray-400 disabled:opacity-50 disabled:hover:bg-gray-700"
                >
                  <span className="sr-only">Send</span>
                  <svg
                    //   width="16"
                    //   height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      {/* </Container> */}
    </header>
  )
}
