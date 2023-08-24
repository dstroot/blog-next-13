import { allSnippets } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { PageHeader } from '@/components/PageHeader'
import { SnippetCard } from '@/components/SnippetCard'

import '@/styles/atom-one-dark.css'

// TODO add SEO
export const generateMetadata = () => {
  return { title: 'Snippets' }
}

export default function Snippets() {
  let snippets = allSnippets.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  // Remove any unpublished snippets
  snippets = snippets.filter((snippet) => snippet.published)

  // Remove any future snippets
  snippets = snippets.filter(
    (snippet) => Date.parse(snippet.date) <= Date.now(),
  )

  return (
    <main className="container mx-auto mt-6 p-5 md:mt-12">
      <PageHeader
        title="Snippets"
        description="Short solutions to discrete problems."
        size="lg"
      />

      {/* Grid */}
      <div className="mb-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {snippets.map((snippet, _idx) => (
          <SnippetCard key={snippet.slugAsParams} {...snippets[_idx]} />
        ))}
      </div>
    </main>
  )
}
