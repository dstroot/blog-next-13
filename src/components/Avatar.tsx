import Image from 'next/image'
import Link from 'next/link'

import { DateFormatter } from '@/components/DateFormatter'

interface AvatarProps {
  name: string
  picture: string
  size: number
  date: string
}

export const Avatar = ({ name, picture, size, date }: AvatarProps) => {
  return (
    <Link href="/about">
      {/*
        You can use the class "group" to group behavior
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
      */}
      <div aria-label={name} className="group duration-300 ease-in-out">
        <div className="flex items-center space-x-5">
          <Image
            src={picture}
            alt={name}
            width={size}
            height={size}
            priority={true}
            className="flex-initial rounded-full"
          />
          <div className="flex-auto">
            <p className="mb-0 text-xl font-semibold text-gray-900 transition-colors group-hover:underline dark:text-gray-100">
              Dan Stroot
            </p>
            <p className="text-sm text-gray-600 transition-colors dark:text-gray-300">
              <DateFormatter dateString={date} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
