'use client'

import { useState } from 'react'
import { useSearchBox } from 'react-instantsearch'
import { Input } from '@/components/ui/input'

export const SearchBox = ({ ...props }) => {
  const [search, setSearch] = useState('')
  const { refine } = useSearchBox(props)

  const handleChange = (e: any) => {
    setSearch(e.target.value)
    refine(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    refine(search)
  }

  return (
    <form
      noValidate
      action=""
      role="search"
      className="my-6 flex justify-center"
    >
      <div className="relative mx-auto w-full md:w-3/4">
        <Input
          type="search"
          className="h-12 w-full rounded-full px-5 pr-16"
          placeholder="Search..."
          aria-label="Search..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          autoFocus
          spellCheck="false"
          value={search}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="absolute right-0 top-0 mr-4 mt-4"
        >
          <svg
            className="h-5 w-4 fill-current "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
            xmlSpace="preserve"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
    </form>
  )
}
