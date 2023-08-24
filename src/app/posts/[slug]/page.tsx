import NextImage, { ImageProps } from 'next/image'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { env } from '@/config/env.mjs'
import { GitHubLink } from '@/components/GitHubLink'
// import { Header } from '@/components/Header'
import { MDXComponents } from '@/components/MDXComponents'
import { PostHeader } from '@/components/PostHeader'

// import { SendPageView } from '@/components/SendPageView'
// import { Sharable } from '@/components/Sharable'

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post.slugAsParams }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug)

  if (!post) {
    return {}
  }

  return { title: post.title }
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
    Image: (props: ImageProps) => <NextImage {...props} />,
  }

  //TODO: change "/data/_posts" to "/content/posts"
  const github = `${env.NEXT_PUBLIC_GITHUB_REPO}/blob/master/content/posts/${post.slugAsParams}.mdx`

  return (
    <main className="container mx-auto mt-6 p-5 md:mt-12">
      <article className="mb-6 md:mb-10">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slugAsParams}
          stats={post.stats}
        />
        <div className="prose-lg mx-auto max-w-3xl">
          <div className="prose prose-lg dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500 mb-8 max-w-none break-words">
            {/* TODO Fix - pass custom MDX components */}
            {/* @ts-ignore */}
            <Content components={components} />
          </div>
          {/* <Sharable slug={post.slug} title={post.title} /> */}
        </div>
        <GitHubLink path={github} />
      </article>
      {/* <SendPageView slug={post.slugAsParams} /> */}
    </main>
  )
}

export default PostLayout