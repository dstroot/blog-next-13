import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { Archive } from '@/components/Archive'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

export const generateMetadata = () => {
  return { title: 'Archive' }
}

export default function ArchivePage() {
  let posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  // Remove any unpublished posts
  posts = posts.filter((posts) => posts.published)

  // Remove any future posts
  posts = posts.filter((posts) => Date.parse(posts.date) <= Date.now())

  return (
    <Container variant="padded">
      <PageHeader
        title="Archive"
        description="Here's all my posts in chronological order. Cheers!"
        size="lg"
      />
      {posts.length > 0 && <Archive posts={posts} />}
    </Container>
  )
}
