'use client'

import { useEffect, useRef, useState } from 'react'
import { useIntersection } from '@mantine/hooks'
import type { Post } from 'contentlayer/generated'

import { PostPreview } from '@/components/posts/PostPreview'

interface MoreStoriesProps {
  posts: Post[]
}
export const MoreStories = ({ posts }: MoreStoriesProps) => {
  const [page, setPage] = useState(1)
  const [postList, setPostList] = useState<Post[]>([])
  const chunkSize = 6

  // create ref to trigger page loads
  const lastPostRef = useRef<HTMLDivElement>(null)
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    rootMargin: '0px',
    threshold: 0.9,
  })

  useEffect(() => {
    const fetchPosts = (page: number) => {
      let start = page * chunkSize - chunkSize
      let end = page * chunkSize

      // get another slice of posts
      const morePosts = posts.slice(start, end)

      // and append them
      setPostList((postList) => {
        return postList.concat(morePosts) // concatination = infinite scroll
      })
    }
    fetchPosts(page)
  }, [page, posts])

  useEffect(() => {
    if (entry?.isIntersecting) {
      setPage((page) => page + 1)
    }
  }, [entry])

  return (
    <section>
      <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
        More Stories
      </h1>
      <div className="grid min-h-screen grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20">
        {postList.map((post, index) => {
          // if we are at the end include the ref for infinite scrolling
          if (index === postList.length - 2) {
            return (
              <div key={`${post._id}`} ref={ref}>
                <PostPreview
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slugAsParams}
                  excerpt={post.excerpt}
                  stats={post.stats}
                />
              </div>
            )
          }
          return (
            <div key={`${post._id}`}>
              <PostPreview
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slugAsParams}
                excerpt={post.excerpt}
                stats={post.stats}
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
