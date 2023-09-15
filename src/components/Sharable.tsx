'use client'

import { useState } from 'react'

import { env } from '@/config/env.mjs'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/Icons'

export function Sharable({ title, slug }: { title: string; slug: string }) {
  const [showAlert, setShowAlert] = useState(false)

  function fbShare() {
    window.open(
      encodeURI(
        `https://www.facebook.com/sharer/sharer.php?u=${env.NEXT_PUBLIC_APP_URL}${slug}`,
      ),
      'sharer',
      'toolbar=0,status=0,width=548,height=325',
    )
  }

  function twShare() {
    window.open(
      encodeURI(
        `https://twitter.com/share?lang=en&text=${title}&url=${env.NEXT_PUBLIC_APP_URL}${slug}`,
      ),
      'sharer',
      'toolbar=0,status=0,width=548,height=325',
    )
  }

  function CopiedLinkMsg() {
    setShowAlert(true)
    navigator.clipboard.writeText(`${env.NEXT_PUBLIC_APP_URL}${slug}`)
    const timer = setTimeout(() => {
      setShowAlert(false)
    }, 1000)

    return () => clearTimeout(timer)
  }

  return (
    <div className="flex flex-col">
      <h4 className="pb-2 text-lg font-bold">Sharing is Caring</h4>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Share this blog on Facebook."
          onClick={fbShare}
        >
          <Icons.facebook className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Share this blog on Twitter."
          onClick={twShare}
        >
          <Icons.twitterX className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Share this blog everywhere."
          onClick={CopiedLinkMsg}
        >
          <Icons.share className="h-6 w-6" />
        </Button>
      </div>

      {showAlert ? (
        <div className="fixed bottom-56 left-96 z-10 flex items-center space-x-2 rounded bg-gray-200 p-6 shadow dark:bg-gray-700">
          <p className="text-slate">Link copied succesfully</p>
          <span className="rounded-full bg-gray-800 p-1 dark:bg-gray-200">
            <Icons.check className="h-6 w-6 text-gray-200 dark:text-gray-800" />
          </span>
        </div>
      ) : null}
    </div>
  )
}
