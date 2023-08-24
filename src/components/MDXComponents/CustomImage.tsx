'use client'

import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'

import { cn } from '@/lib/utils'

export const CustomImage = (props: React.HTMLAttributes<HTMLImageElement>) => {
  let imgProps = props as unknown as ImageProps
  let src = imgProps.src as string

  const isInternalImage = src && src.startsWith('/')
  const [isLoading, setLoading] = useState(true)

  // https://github.com/contentlayerdev/contentlayer/issues/506
  const Image = (props: ImageProps) => <NextImage {...props} />

  if (isInternalImage) {
    return (
      // height and width are part of the props, from rehype-img-size
      // so they are automatically passed here with {...props}

      // https://www.peterlunch.com/snippets/next-image-styling
      <div className="relative">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          {...imgProps}
          loading="lazy"
          fill
          sizes="(max-width: 1280px) 90vw, 1496px"
          className={cn(
            'duration-300 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0',
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    )
  }

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      // className='object-contain max-h-max'
      className="max-h-[384px]"
      src={imgProps.src + '?w=768'}
      alt={imgProps.alt}
      loading="lazy"
    />
  )
}
