import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

interface AvatarProps {
  name: string
  picture: string
  size: number
  date: string
}

export const Avatar = ({ name, picture, size, date }: AvatarProps) => {
  const parsedDate = parseISO(date)

  return (
    <Link href="/about" aria-label="About">
      {/*
        You can use the class "group" to group behavior
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
      */}
      <div className="group flex items-center space-x-5">
        <Image
          src={picture}
          alt={name}
          width={size}
          height={size}
          priority={true}
          className="flex-initial rounded-full"
        />
        <div className="flex-auto">
          <div className="mb-0 text-xl font-semibold group-hover:underline">
            Dan Stroot
          </div>
          <div className="text-sm text-muted-foreground">
            {format(parsedDate, 'LLLL d, yyyy')}
          </div>
        </div>
      </div>
    </Link>
  )
}
