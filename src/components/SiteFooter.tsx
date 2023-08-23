import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { SocialLinks } from '@/components/SocialLinks'

export const SiteFooter = () => {
  const year = new Date() // evergreen copyright year

  return (
    <footer className="text-gray-600 transition-colors bg-gray-100 dark:bg-dark-4 dark:text-gray-300">
      <div className="container p-5 mx-auto">
        <div className="flex flex-col items-center content-center my-2 gap-x-1 md:my-4 md:flex-row">
          {/*
            IMAGE & TAGLINE
          */}
          <div className="flex-none mb-4 md:mb-0 md:mr-8">
            <Image
              src="/assets/blog/authors/dan.jpeg"
              alt={siteConfig.meta.name}
              width={85}
              height={85}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 text-xl text-center md:text-left md:text-2xl">
            I love building things. Family man, technologist and Hacker News
            aficionado. Eternally curious.
          </div>

          {/*
            LINKS
          */}
          <div className="flex-none">
            <div className="flex flex-col text-sm">
              {siteConfig.footerNav.map((item) => (
                <div key={item.title} className="space-y-3">
                  <h4 className="mt-4 mb-1 text-base font-bold text-gray-700 uppercase dark:text-gray-100 md:mt-0 ">
                    {item.title}
                  </h4>
                  <ul className="">
                    {item.items.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          target={link?.external ? '_blank' : undefined}
                          rel={link?.external ? 'noreferrer' : undefined}
                          className="mt-2 text-sm font-medium transition-colors hover:text-gray-500 md:mt-0"
                        >
                          {link.title}
                          <span className="sr-only">{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*
            Bottom Section
        */}
        <div className="flex flex-col items-center justify-between md:flex-row md:items-end">
          <div className="flex items-center order-2 text-xs tracking-wide dark:text-gray-400 md:order-1">
            Crafted with ♥️ in California.&nbsp;&copy;&nbsp;
            {year.getFullYear()}
            {','}&nbsp;
            <Link className="font-medium" href="/analytics">
              Dan Stroot
            </Link>
          </div>

          <div className="flex items-center order-1 my-3 space-x-4 text-2xl md:order-2 md:my-0">
            <SocialLinks className="hover:text-gray-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}
