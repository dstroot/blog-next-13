import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { Avatar } from '@/components/Avatar'
import { MoreStats } from '@/components/MoreStats'
import { ReadMore } from '@/components/posts/ReadMore'

interface PostPreviewProps {
  key: string
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Post['author']
  slug: string
  stats: Post['stats']
}

export const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  stats,
}: PostPreviewProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="mb-5">
        <Link href={`/posts/${slug}`}>
          <div aria-label={title} className="sm:mx-0">
            <div className="relative aspect-[2/1]">
              {/*
                It usually is best practice to wrap images in a div and set height
                and width with it. HTML treats images as foreign objects so they
                don't follow the same rules as everything else. A simple div is the
                best way to work with an img as a normal block level element. Then
                set "fill" on the Next Image componenet.
              */}
              <Image
                src={coverImage}
                alt={`Cover image for ${title}`}
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className={cn(
                  'overflow-hidden object-cover transition-opacity	duration-500',
                  isLoading ? 'opacity-0' : 'opacity-100',
                )}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <MoreStats stats={stats} slug={slug} />
          </div>
        </Link>
      </div>
      <div className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          <Balancer>{title}</Balancer>
        </Link>
      </div>
      {/* <div className="mb-4">
        <Avatar
          name={author.name}
          picture={author.picture}
          size={50}
          date={date}
        />
      </div> */}
      <p className="mb-4 leading-relaxed md:text-lg">{excerpt}</p>
      <ReadMore slug={slug} />
    </>
  )
}
