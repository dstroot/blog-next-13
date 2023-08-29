import Link from 'next/link'

import { Icons } from '@/components/Icons'

export const ReadMore = ({ slug }: { slug: string }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="group flex items-center space-x-2 ease-in-out">
        <div className="text-lg font-semibold text-gray-900 transition-colors group-hover:underline dark:text-gray-100 md:text-xl">
          Read Post
        </div>
        <Icons.chevronsRight className="h-6 w-6 md:h-8 md:w-8" />
      </div>
    </Link>
  )
}
