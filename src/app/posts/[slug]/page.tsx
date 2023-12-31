import { type Metadata } from 'next'
import NextImage, { ImageProps } from 'next/image'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { env } from '@/config/env.mjs'
import { absoluteUrl } from '@/lib/utils'
import { Container } from '@/components/Container'
import { MDXComponents } from '@/components/MDXComponents'
import { GitHubLink } from '@/components/posts/GitHubLink'
import { PostHeader } from '@/components/posts/PostHeader'
import { SendPageView } from '@/components/SendPageView'
import { Sharable } from '@/components/Sharable'

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slugAsParams }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.slugAsParams === params.slug)

  if (!post) {
    return {}
  }

  // setup og image url
  const ogImgParams = '?auto=format&fit=crop&w=1200&h=630'
  const ogImgUrl = post.ogImage.url + ogImgParams

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
  const post = allPosts.find((post) => post.slugAsParams === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const Content = useMDXComponent(post.body.code)

  const components = {
    ...MDXComponents,
    // Image: (props: ImageProps) => <NextImage {...props} />,
  }

  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/content/${post._id}`

  return (
    <Container variant="padded">
      <article className="mb-6 md:mb-10">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slugAsParams}
          stats={post.stats}
        />
        <div className="mx-auto max-w-3xl">
          <div className="converted-html">
            <Content components={components} />
          </div>
          <Sharable slug={post.slug} title={post.title} />
        </div>
        <GitHubLink path={github} />
      </article>
      <SendPageView slug={post.slugAsParams} />
    </Container>
  )
}

export default PostLayout
