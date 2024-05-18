// import { useEffect } from 'react'
import { quotes } from 'velite/generated'

import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

// TODO: implement this
export const generateMetadata = () => {
  return { title: 'Quotes' }
}

// useEffect(() => {
//   // Handler to call on window resize
//   function handleResize() {
//     // do stuff
//   }
//   // Add event listener
//   window.addEventListener('resize', handleResize)
//   // Call handler right away so state gets updated with initial window size
//   handleResize()
//   // Remove event listener on cleanup
//   return () => window.removeEventListener('resize', handleResize)
// }, []) // Empty array ensures that effect is only run on mount

export default function QuotesPage() {
  let firstColumn = quotes.filter((_, index) => index % 3 === 0)
  let secondColumn = quotes.filter((_, index) => index % 3 === 1)
  let thirdColumn = quotes.filter((_, index) => index % 3 === 2)

  //   console.log(firstColumn)
  //   console.log(secondColumn)
  //   console.log(thirdColumn)

  return (
    <Container variant="padded">
      <PageHeader
        title="Quotes"
        description="Inspiring words. Beautifully expressed."
      />
      <div className="converted-html grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid auto-rows-min gap-y-0">
          {firstColumn.map((quote, _idx) => (
            <a href={`/quotes/${quote.id}`}>
              <blockquote className="text-balance duration-200 ease-in-out hover:scale-[103%]">
                {quote.quote}
              </blockquote>
            </a>
          ))}
        </div>
        <div className="grid auto-rows-min gap-y-0">
          {secondColumn.map((quote, _idx) => (
            <a href={`/quotes/${quote.id}`}>
              <blockquote className="text-balance duration-200 ease-in-out hover:scale-[103%]">
                {quote.quote}
              </blockquote>
            </a>
          ))}
        </div>
        <div className="grid auto-rows-min gap-y-0">
          {thirdColumn.map((quote, _idx) => (
            <a href={`/quotes/${quote.id}`}>
              <blockquote className="text-balance duration-200 ease-in-out hover:scale-[103%]">
                {quote.quote}
              </blockquote>
            </a>
          ))}
        </div>
      </div>
    </Container>
  )
}
