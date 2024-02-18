// import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { posts } from 'velite/generated'

import { Container } from '@/components/Container'
import { Intro } from '@/components/Intro'
import { MoreStories } from '@/components/MoreStories'
import { HeroPost } from '@/components/posts/HeroPost'

export default function DraftsPage() {
  let sortedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )
  // Remove any published posts
  sortedPosts = sortedPosts.filter((posts) => !posts.published)

  const heroPost = sortedPosts[0]
  const morePosts = sortedPosts.slice(1)

  return (
    <Container variant="padded">
      <Intro />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
        stats={heroPost.metadata}
      />
      <MoreStories posts={morePosts} />
    </Container>
  )
}
