import quotes from '@/app/quotes/quotes.json'

export type Quote = {
  quote: string
  author: string
  publication: string | null
  category: string
  comments?: string
}

let myArray: number[] = []

function saveIndex(addIndex: number) {
  // if array is more than five items, remove first one
  if (myArray.length === 5 && myArray.length > 1) {
    myArray.shift()
  }

  myArray.push(addIndex)
}

export function getRandomQuote(): Quote {
  // start with a random number
  let randomIndex = Math.floor(Math.random() * quotes.length)

  // iterate until the quote id is *not* the same as any in array
  while (myArray.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * quotes.length)
  }

  // save new quote id in array
  saveIndex(randomIndex)

  return quotes[randomIndex] // return object (it's not returning an array)
}
