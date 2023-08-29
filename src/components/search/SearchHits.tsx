import Image from 'next/image'
import Link from 'next/link'
import { useInstantSearch } from 'react-instantsearch'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from '@/components/ui/card'

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

//TODO fix  type checking
const PostCard = ({ hit }: { hit: any }) => {
  return (
    <Link href={`/posts/${hit.slug}`}>
      <Card className="flex h-full flex-col bg-zinc-100 shadow-md dark:bg-zinc-800">
        <CardHeader className="">
          <Image
            src={hit.image}
            width={708}
            height={354}
            alt={`Cover Image for ${hit.title}`}
            className="mb-4"
          />
          <CardTitle className="line-clamp-1">{hit.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="text-zinc line-clamp-3 text-sm">{hit.excerpt}</div>
        </CardContent>

        <CardFooter className="flex space-x-2 text-xs">
          <div className="flex space-x-2 text-xs">
            <span className="rounded-full bg-accent px-2 py-1 text-accent2-foreground">
              {hit.date}
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
