'use client'

import { useState } from 'react'
import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'
import { type Quote } from 'velite/generated'

import { cn } from '@/lib/utils'
import { IconKey, Icons } from '@/components/Icons'

export function Quote({ quote, newSlug }: { quote: Quote; newSlug: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = Icons['chevronRight' as IconKey]

  return (
    <section className="flex flex-col">
      <div className="grow">
        <blockquote className="border-l-8 border-gray-400 px-4 py-2 dark:border-gray-600 md:px-8">
          <p className="text-balance text-xl font-medium italic text-gray-900 dark:text-white md:text-2xl">
            {quote.quote}
          </p>
          <p className="text pt-8 font-medium italic leading-relaxed text-muted-foreground md:text-xl">
            {' '}
            &mdash; {quote.author}
            {quote.publication ? ', ' + quote.publication : null}
          </p>
        </blockquote>

        {quote.comments ? (
          <Collapsible.Root
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mt-6 md:mt-12"
          >
            <Collapsible.Trigger className="flex items-center text-base font-semibold text-muted-foreground">
              Commentary{'  '}
              <div className="mt-1 inline-block w-5">
                <Icon
                  className={cn(
                    isOpen ? '-rotate-90' : 'rotate-90',
                    'transform duration-300 ease-in-out',
                  )}
                />
              </div>
            </Collapsible.Trigger>
            <Collapsible.Content className="CollapsibleContent mt-4 text-muted-foreground">
              {quote.comments}
            </Collapsible.Content>
          </Collapsible.Root>
        ) : null}
      </div>

      <Link
        href={`/quotes/${newSlug}`}
        type="button"
        className="mb-2 mt-8 w-52 rounded-full bg-gray-900 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:mt-16"
      >
        Another Quote Please
      </Link>
    </section>
  )
}
