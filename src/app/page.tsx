import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { generateRSSFeed } from '@/lib/feed'
import { Container } from '@/components/Container'
import { Intro } from '@/components/Intro'
import { MoreStories } from '@/components/MoreStories'
import { HeroPost } from '@/components/posts/HeroPost'

// NOTE: all metadata comes from layout - don't need anything else for the home page

export default async function Home() {
  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  // Remove any unpublished posts
  posts = posts.filter((posts) => posts.published)

  // Remove any future posts
  posts = posts.filter((posts) => Date.parse(posts.date) <= Date.now())

  // Generate RSS feed
  await generateRSSFeed(posts)

  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <Container variant="padded">
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
    </Container>
  )
}
