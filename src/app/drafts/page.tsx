import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { HeroPost } from '@/components/HeroPost'
import { Intro } from '@/components/Intro'
import { MoreStories } from '@/components/MoreStories'

export default function DraftsPage() {
  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  // Remove any published posts
  posts = posts.filter((posts) => !posts.published)

  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <main className="container my-6 md:my-12">
      <Intro />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slugAsParams}
        excerpt={heroPost.excerpt}
        stats={heroPost.stats}
      />
      <MoreStories posts={morePosts} />
    </main>
  )
}
