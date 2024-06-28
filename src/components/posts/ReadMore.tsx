import Link from 'next/link'

import { Icons } from '@/components/Icons'

export const ReadMore = ({ slug }: { slug: string }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="group flex items-center ease-in-out">
        <span className="text-normal font-semibold group-hover:underline md:text-lg">
          Read Post
        </span>
        <Icons.chevronsRight className="h-6 w-6 md:h-6 md:w-6" />
      </div>
    </Link>
  )
}
