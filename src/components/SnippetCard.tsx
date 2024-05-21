import Link from 'next/link'
import type { Snippet } from 'velite/generated'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IconKey, Icons } from '@/components/Icons'

export const SnippetCard = (props: Snippet) => {
  const Icon = Icons[props.icon as IconKey]

  return (
    <Link href={`/snippets/${props.slug}`} prefetch={false}>
      <Card className="flex h-full flex-col bg-zinc-100 shadow-md dark:bg-zinc-900">
        <CardHeader className="">
          <CardTitle>
            <div className="flex items-center justify-between">
              <div className="w-3/4">
                <h1 className="truncate text-xl font-bold md:text-2xl">
                  {props.title}
                </h1>
              </div>
              <div className="h-12 w-12 flex-none rounded-full bg-accent md:order-2">
                <span className="grid h-full w-full place-items-center">
                  {Icon ? <Icon className="h-8 w-8" /> : null}
                </span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-zinc flex-grow">
          {props.summary}
        </CardContent>

        <CardFooter className="flex space-x-2 text-xs">
          {props.tags
            ? props.tags.map((tag) => (
                <span
                  className="truncate rounded-full bg-accent px-2 py-1 text-accent-foreground"
                  key={tag}
                >
                  #{tag}
                </span>
              ))
            : null}
        </CardFooter>
      </Card>
    </Link>
  )
}
