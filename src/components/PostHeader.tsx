import { Post } from 'contentlayer/generated'

import { MoreStats } from '@/components/MoreStats'
import { PostImage } from '@/components/PostImage'
import { PostTitle } from '@/components/PostTitle'

import { Avatar } from './Avatar'

interface PostHeaderProps {
  title: string
  coverImage: string
  date: string
  author: Post['author']
  slug: string
  stats: Post['stats']
}
export const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  slug,
  stats,
}: PostHeaderProps) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0 md:mb-10">
        <PostImage coverImage={coverImage} title={title} />
        <MoreStats stats={stats} slug={slug} />
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Avatar
            name={author.name}
            picture={author.picture}
            size={55}
            date={date}
          />
        </div>
      </div>
    </>
  )
}
