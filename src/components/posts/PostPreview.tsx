import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { Post } from 'contentlayer/generated'
import { Post } from 'velite/generated'

import { cn } from '@/lib/utils'
import { Byline } from '@/components/Byline'
import { MoreStats } from '@/components/posts/MoreStats'
import { ReadMore } from '@/components/posts/ReadMore'

interface PostPreviewProps {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Post['author']
  slug: string
  stats: Post['metadata']
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
        <Link href={`/posts/${slug}`} prefetch={false}>
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
                sizes="(min-width: 1540px) 704px, (min-width: 1280px) 576px, (min-width: 1040px) 448px, (min-width: 780px) 328px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
                className={cn(
                  'overflow-hidden object-cover transition-opacity	duration-300',
                  isLoading ? 'opacity-0' : 'opacity-100',
                )}
                onLoad={() => setIsLoading(false)}
              />
            </div>
            <MoreStats stats={stats} slug={slug} />
          </div>
        </Link>
      </div>
      <h2 className="mb-3 text-balance text-3xl leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          prefetch={false}
        >
          {title}
        </Link>
      </h2>

      <Byline name={author.name} picture={author.picture} date={date} />
      <div className="my-4 leading-relaxed md:text-lg">{excerpt}</div>
      <ReadMore slug={slug} />
    </>
  )
}
