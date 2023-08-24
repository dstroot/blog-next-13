'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

export const PostImage = ({ title, coverImage }:{ title: string, coverImage: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  {
    /*
    It usually is best practice to wrap images in a div and set height and width with it.
    HTML treats images as foreign objects so they don't follow the same rules as everything else.
    A simple div is the best way to work with an img as a normal block level element.
    */
  }
  return (
    <div className="relative aspect-[2/1]">
      <Image
        src={coverImage}
        alt={`Hero image for ${title}`}
        fill
        sizes="(max-width: 1280px) 90vw, 1496px"
        priority={true}
        className={cn(
          'overflow-hidden object-cover transition-opacity	duration-500',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}
