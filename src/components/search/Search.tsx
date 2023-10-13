'use client'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, useInstantSearch } from 'react-instantsearch'

import { env } from '@/config/env.mjs'
import { SearchBox } from '@/components/search/SearchBox'
import { Hits } from '@/components/search/SearchHits'

export const generateMetadata = () => {
  return { title: 'Search' }
}

// App Router Support - I don't need this since I built custom components
// https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/react/#app-router-experimental

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

function NoResultsBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode
  fallback: React.ReactNode
}) {
  const { results } = useInstantSearch()

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
