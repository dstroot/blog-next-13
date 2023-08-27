import Image from 'next/image'
import Link from 'next/link'
import { useInstantSearch } from 'react-instantsearch'

export const Hits = ({ ...props }) => {
  const { results, indexUiState } = useInstantSearch(props)
  let validQuery = false

  if (indexUiState.query !== undefined) {
    validQuery = indexUiState.query.length >= 3
  }

  return (
    <>
      {validQuery ? (
        <div className="mb-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
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
      <div className="flex w-full flex-col space-y-3 rounded bg-muted p-5 shadow-md">
        <div className="flex flex-col">
          <div className="w-100">
            <Image
              src={hit.image}
              width={708}
              height={354}
              alt={`Cover Image for ${hit.title}`}
            />
          </div>
          <h1 className="mt-4 line-clamp-1 text-lg font-bold">{hit.title}</h1>
        </div>
        <p className="line-clamp-3 text-sm">{hit.excerpt}</p>
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
      </div>
    </Link>
  )
}
