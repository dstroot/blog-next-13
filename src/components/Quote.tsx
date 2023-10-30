'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Quote(randomQuote: Quote) {
  const router = useRouter()
  const [fade, setFade] = useState(false)

  return (
    <div className="mx-auto max-w-4xl">
      <section
        className={`flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="mt-4 grow md:mt-24">
            <blockquote className="border-l-8 border-gray-400 px-4 py-2 dark:border-gray-600 md:px-8">
              <p className="text-xl font-medium italic text-gray-900 dark:text-white md:text-3xl">
                {randomQuote.quote}
              </p>
              <p className="text pt-8 font-medium italic leading-relaxed text-gray-900 dark:text-white md:text-xl">
                {' '}
                &mdash; {randomQuote.author}
                {randomQuote.publication
                  ? ', ' + randomQuote.publication
                  : null}
              </p>
            </blockquote>
          </div>

          <button
            type="button"
            className="mb-2 mr-2 mt-12 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-0 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={() => {
              setFade(true)
              setTimeout(() => router.refresh(), 500)
              setTimeout(() => setFade(false), 800)
            }}
          >
            Refresh Quote
          </button>
        </div>
      </section>
    </div>
  )
}
