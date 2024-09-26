import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from 'velite/generated'

import { env } from '@/config/env.mjs'
import imgixLoader, { LoaderProps } from '@/lib/imgixLoader'
import { MDXContent } from '@/lib/mdx-content'
import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { GitHubLink } from '@/components/posts/GitHubLink'
import { PostHeader } from '@/components/posts/PostHeader'
import { SendPageView } from '@/components/SendPageView'
import { Sharable } from '@/components/Sharable'

export const generateStaticParams = async () => {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return {}
  }

  // setup og image url
  const imgProps: LoaderProps = {
    src: post.ogImage.url,
    width: 1200,
    quality: 75,
  }
  const imgURL = imgixLoader(imgProps)
  const ogImgUrl = imgURL

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogImgUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImgUrl],
    },
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  // Find the post for the current slug.
  const post = posts.find((post) => post.slug === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/content${post.permalink}.mdx`

  return (
    <Container variant="padded">
      <article className="mb-6 md:mb-10">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          stats={post.metadata}
        />
        <div className="mx-auto max-w-3xl">
          <div className="converted-html">
            <MDXContent code={post.content} />
          </div>
          <Sharable slug={post.permalink} title={post.title} />
        </div>
        <GitHubLink path={github} />
      </article>
      <SendPageView slug={post.slug} />
    </Container>
  )
}

export default PostLayout
