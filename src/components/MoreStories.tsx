'use client'

import { useEffect, useRef } from 'react'
import { useIntersection } from '@mantine/hooks'
import { useInfiniteQuery } from '@tanstack/react-query'
import type { Post } from 'velite/generated'

import { PostPreview } from '@/components/posts/PostPreview'

interface MoreStoriesProps {
  posts: Post[]
}
export const MoreStories = ({ posts }: MoreStoriesProps) => {
  const chunkSize = 6

  // get another chunk of posts to display
  const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
    return posts.slice((pageParam - 1) * chunkSize, pageParam * chunkSize)
  }

  // setup infinite query
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1
    },
    initialData: {
      pages: [posts.slice(0, chunkSize)],
      pageParams: [1],
    },
  })

  // create ref
  const lastPostRef = useRef<HTMLElement>(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry, fetchNextPage])

  const _posts = data?.pages.flatMap((page) => page)

  return (
    <section>
      <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
        More Stories
      </h1>
      <div className="grid min-h-screen grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20">
        {_posts?.map((post, index) => {
          // if we are at the end include the ref for infinite scrolling
          if (index === _posts.length - 2) {
            return (
              <div key={`${post.slug}`} ref={ref}>
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  stats={post.metadata}
                />
              </div>
            )
          }
          return (
            <div key={`${post.slug}`}>
              <PostPreview
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                stats={post.metadata}
              />
            </div>
          )
        })}
      </div>
      <div className="my-12 text-center text-xl md:text-3xl">
        Wow! You made it to the end!
      </div>
    </section>
  )
}
