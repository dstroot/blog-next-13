import quotes from '@/app/quotes/quotes.json'

export type Quote = {
  quote: string
  author: string
  publication: string | null
  category: string
}

const prevQuoteObj = {
  prev: 0,
  setPrev: function (num: number) {
    this.prev = num
  },
}

export function getRandomQuote(): Quote {
  let randomIndex = prevQuoteObj.prev

  // iterate until the quote id is not the same as the previous quote id
  while (randomIndex === prevQuoteObj.prev) {
    randomIndex = Math.floor(Math.random() * quotes.length)
  }

  // save new quote id
  prevQuoteObj.setPrev(randomIndex)

  return quotes[randomIndex] // return object (it's not returning an arr)
}
