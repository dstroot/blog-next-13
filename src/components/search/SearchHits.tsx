import Image from 'next/image'
import Link from 'next/link'
import { useInstantSearch } from 'react-instantsearch'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DateFormatter } from '@/components/DateFormatter'

type Hit = {
  content: string
  date: string
  excerpt: string
  image: string
  objectID: string
  readingTime: string
  slug: string
  title: string
  views: number
}

export const Hits = ({ ...props }) => {
  const { results, indexUiState } = useInstantSearch(props)
  let validQuery = false

  if (indexUiState.query !== undefined) {
    validQuery = indexUiState.query.length >= 3
  }

  return (
    <>
      {validQuery ? (
        <div className="mb-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {results.hits.map((hit) => (
            <PostCard key={hit.objectID} hit={hit}></PostCard>
          ))}
        </div>
      ) : null}
    </>
  )
}

const PostCard = ({ hit }: { hit: Hit }) => {
  return (
    <Link href={`/posts/${hit.slug}`} prefetch={false}>
      <Card className="flex h-full flex-col bg-zinc-100 shadow-md dark:bg-zinc-800">
        <CardHeader className="">
          <Image
            src={hit.image}
            width={708}
            height={354}
            alt={`Cover Image for ${hit.title}`}
            className="mb-4"
          />
          <CardTitle className="line-clamp-1 overflow-hidden text-ellipsis pb-1">
            {hit.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="text-zinc line-clamp-3 text-sm">{hit.excerpt}</div>
        </CardContent>

        <CardFooter className="flex space-x-2 text-xs">
          <div className="flex space-x-2 text-xs">
            <span className="rounded-full bg-accent px-2 py-1 text-accent2-foreground">
              <DateFormatter dateString={hit.date} />
            </span>
            <span className="rounded-full bg-accent px-2 py-1 text-accent2-foreground">
              {hit.readingTime}
            </span>
            {hit.views ? (
              <span className="rounded-full bg-accent px-2 py-1 text-accent2-foreground">
                {hit.views} views
              </span>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
