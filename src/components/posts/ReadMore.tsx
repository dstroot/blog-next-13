import Link from 'next/link'

import { Icons } from '@/components/Icons'

export const ReadMore = ({ slug }: { slug: string }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="group flex items-center ease-in-out">
        <span className="text-lg font-semibold group-hover:underline md:text-xl">
          Read Post
        </span>
        <Icons.chevronsRight className="h-6 w-6 md:h-8 md:w-8" />
      </div>
    </Link>
  )
}
