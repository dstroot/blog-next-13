// import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { posts } from 'velite/generated'

import { generateRSSFeed } from '@/lib/feed'
import { Container } from '@/components/Container'
import { Intro } from '@/components/Intro'
import { MoreStories } from '@/components/MoreStories'
import { HeroPost } from '@/components/posts/HeroPost'

// NOTE: all metadata comes from layout - don't need anything else for the home page

export default async function Home() {
  let sortedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  // Remove any unpublished posts
  sortedPosts = sortedPosts.filter((posts) => posts.published)

  // Remove any future posts
  sortedPosts = sortedPosts.filter(
    (posts) => Date.parse(posts.date) <= Date.now(),
  )

  // Generate RSS feed
  await generateRSSFeed(sortedPosts)

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
