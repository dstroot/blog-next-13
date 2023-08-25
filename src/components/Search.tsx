'use client'

import Image from 'next/image'
import Link from 'next/link'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, useHits, useInstantSearch } from 'react-instantsearch'

import { env } from '@/config/env.mjs'
import { SearchBox } from '@/components/SearchBox'

export const generateMetadata = () => {
  return { title: 'Search' }
}

const searchClient = algoliasearch(
  env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
)

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="blog">
      <SearchBox />
      <NoResultsBoundary fallback={<NoResults />}>
        <Hits />
      </NoResultsBoundary>
    </InstantSearch>
  )
}

const Hits = ({ ...props }) => {
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
      <div className="flex w-full flex-col space-y-3 rounded bg-gray-100 p-5 shadow-md dark:bg-gray-700">
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
          <span className="rounded-full bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-300 dark:text-gray-800">
            {hit.date}
          </span>
          <span className="rounded-full bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-300 dark:text-gray-800">
            {hit.readingTime}
          </span>
          {hit.views ? (
            <span className="rounded-full bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-300 dark:text-gray-800">
              {hit.views} views
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  )
}

//TODO fix  type checking
function NoResultsBoundary({
  children,
  fallback,
}: {
  children: any
  fallback: any
}) {
  const { results } = useInstantSearch()

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    )
  }

  return children
}

function NoResults() {
  const { indexUiState } = useInstantSearch()

  return (
    <p>
      Sorry! There are no results for <q>{indexUiState.query}</q>.
    </p>
  )
}
