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
      <div aria-label={name} className="group">
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
            <p className="mb-0 text-xl font-semibold group-hover:underline">
              Dan Stroot
            </p>
            <p className="text-sm text-muted-foreground">
              <DateFormatter dateString={date} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
