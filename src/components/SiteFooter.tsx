import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { env } from '@/config/env.mjs'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/Container'
import { SocialLinks } from '@/components/SocialLinks'

export const SiteFooter = () => {
  return (
    <footer className="bg-zinc-50 text-muted-foreground dark:bg-zinc-900">
      <Container variant="default" className="my-4">
        <div className="flex flex-col content-center items-center gap-x-2 md:flex-row">
          {/*
            IMAGE & TAGLINE ---------------------
          */}

          <div className="mb-4 flex-none md:mb-0 md:mr-8">
            <Image
              src="/assets/blog/authors/dan.jpeg?auto=format&amp;fit=max&amp;w=85"
              alt={siteConfig.meta.name}
              width={85}
              height={85}
              className="rounded-full"
            />
          </div>
          <div className="flex-1 text-center text-xl md:mr-16 md:text-left md:text-2xl">
            {siteConfig.meta.description}
          </div>

          {/*
            SOCIAL LINKS ------------------------
          */}

          <div className="mt-4 flex md:flex-col">
            <SocialLinks className="mx-2 mb-4 h-6 w-6 hover:text-gray-500" />
          </div>
        </div>

        {/*
            Bottom Section ----------------------
        */}

        <div className="flex flex-col items-center justify-between md:flex-row md:items-end">
          <div className="order-2 flex items-center text-xs tracking-wide dark:text-gray-400 md:order-1">
            <span className="hidden md:inline">
              {siteConfig.meta.location}&nbsp;
            </span>
            &copy;&nbsp;
            {/* https://paulie.dev/posts/2022/10/react-hydration-error-425-text-content-does-not-match-server-rendered-html/ */}
            <time>
              <Suspense fallback={null}>{new Date().getFullYear()}</Suspense>
            </time>
            {','}&nbsp;
            <Link className="font-medium" href="/analytics">
              Dan Stroot
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
