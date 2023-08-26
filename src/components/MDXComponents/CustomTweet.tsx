'use client'

import { useEffect, useState } from 'react'

import { env } from '@/config/env.mjs'

// import { Tweet } from '@/components/Tweet'

export const CustomTweet = ({ id }: { id: string }) => {
  let [tweet, setTweet] = useState({ status: 500 })
  const URL = `${env.NEXT_PUBLIC_APP_URL}/api/tweet/${id}`

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then((res) => res.json())
      setTweet(data)
    }

    fetchData()
  }, [URL])

  if (tweet?.status !== 200 && tweet?.status !== 201) {
    return <div className="text-sm">Oh no! Tweet not found...</div>
  }

  return (
    <>
      {tweet && (
        <div className="md:w-[550px]">{/* <Tweet tweet={tweet} /> */}</div>
      )}
    </>
  )
}
