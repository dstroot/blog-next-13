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
      {/** FIXME */}
      {/*
        You can use the class "group" to group behavior
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
      */}
      <div className="group flex items-center space-x-5">
        <div>
          <Image
            src={picture}
            alt={name}
            width={size}
            height={size}
            priority={true}
            className="flex-initial rounded-full"
          />
        </div>
        <div className="flex-auto">
          <p className="mb-0 text-xl font-semibold group-hover:underline">
            Dan Stroot
          </p>
          <p className="text-sm text-muted-foreground">
            {format(parsedDate, 'LLLL d, yyyy')}
          </p>
        </div>
      </div>
    </Link>
  )
}
