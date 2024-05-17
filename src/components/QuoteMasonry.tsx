'use client'

import { Masonry } from 'masonic'
// import dynamic from 'next/dynamic'
import { type Quote } from 'velite/generated'

// const Masonry = dynamic(() => import('masonic').then((mod) => mod.Masonry), {
//   ssr: false,
// })

export function QuoteMasonry({ quotes }: { quotes: Quote[] }) {
  return (
    // https://www.npmjs.com/package/masonic
    <Masonry
      className="converted-html"
      items={quotes}
      columnGutter={30}
      rowGutter={0}
      columnWidth={400}
      overscanBy={5}
      render={QuoteCard}
    />
  )
}

const QuoteCard = ({ data: { ...quote } }) => (
  <a href={`/quotes/${quote.id}`}>
    <blockquote className="duration-200 ease-in-out hover:scale-[103%]">
      <p className="text-balance">{quote.quote}</p>
    </blockquote>
  </a>
)
