import Link from 'next/link'
import { parseISO } from 'date-fns'
import type { Post } from 'velite/generated'

import { DateFormatter } from './DateFormatter'

export const Archive = ({ posts }: { posts: Post[] }) => {
  let year: number, newYear: number
  let changed: boolean

  return (
    <>
      {posts.map((post, index) => {
        newYear = parseISO(post.date).getFullYear()

        // track when the year changes
        if (year != newYear) {
          year = newYear
          changed = true
        } else {
          changed = false
        }

        return (
          <div key={`${post.slug}-${index}`}>
            {changed && (
              <h3 className="mb-2 mt-4 text-xl font-bold leading-tight tracking-tighter md:text-2xl">
                {year}
              </h3>
            )}
            <div className="ml-8 grid grid-flow-col items-center gap-6">
              <div className="truncate">
                <Link
                  className="hover:underline"
                  href={`/posts/${post.slug}`}
                  prefetch={false}
                >
                  {post.title}
                </Link>
              </div>
              <div className="text-right text-sm">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
