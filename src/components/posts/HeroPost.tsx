import Image from 'next/image'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'

import { Avatar } from '@/components/Avatar'
import { MoreStats } from '@/components/MoreStats'
import { ReadMore } from '@/components/posts/ReadMore'

interface HeroPostProps {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Post['author']
  slug: string
  stats: Post['stats']
}
export const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  stats,
}: HeroPostProps) => {
  return (
    <section>
      <Link href={`/posts/${slug}`}>
        <div aria-label={title} className="group">
          <div className="mb-8 md:mb-10">
            {/*
            It usually is best practice to wrap images in a div and set height and width with it. HTML treats images as foreign objects so they don't follow the same rules as everything else. A simple div is the best way to work with an img as a normal block level element.
             */}
            <div className="relative aspect-[2/1]">
              <Image
                src={coverImage}
                alt={`Hero image for ${title}`}
                fill
                sizes="(max-width: 1280px) 90vw, 1496px"
                priority={true}
                className="overflow-hidden object-cover duration-300 ease-in-out group-hover:opacity-[85%]"
              />
            </div>
            <MoreStats stats={stats} slug={slug} />
          </div>
        </div>
      </Link>
      <div className="mb-12 flex flex-col gap-x-16 md:mb-16 md:flex-row">
        {/* Title and Avatar */}
        <div className="flex-none md:max-w-[45%]">
          <div className="mb-4 text-3xl leading-tight group-hover:underline md:text-4xl">
            <Link href={`/posts/${slug}`}>
              <Balancer className="hover:underline">{title}</Balancer>
            </Link>
          </div>
          <div className="mb-4 md:mb-0">
            <Avatar
              name={author.name}
              picture={author.picture}
              size={65}
              date={date}
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="flex-1">
          <p className="mb-4 leading-relaxed md:text-lg">{excerpt}</p>
          <ReadMore slug={slug} />
        </div>
      </div>
    </section>
  )
}
