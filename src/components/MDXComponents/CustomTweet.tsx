'use client'

import { useEffect, useState } from 'react'

import { env } from '@/config/env.mjs'

// import { Tweet } from '@/components/Tweet'

export const CustomTweet = ({ id }: { id: string }) => {
  let [tweet, setTweet] = useState({ status: 500 })
  const URL =
    env.NODE_ENV === 'development'
      ? `http://localhost:3000/api/tweet/${id}`
      : `${env.NEXT_PUBLIC_APP_URL}/api/tweet/${id}`

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then((res) => res.json())
      setTweet(data)
    }

    fetchData()
  }, [URL])

  if (tweet?.status !== 200 && tweet?.status !== 201) {
    return null
  }

  return (
    <>
      {tweet && (
        <div className="md:w-[550px]">{/* <Tweet tweet={tweet} /> */}</div>
      )}
    </>
  )
}
