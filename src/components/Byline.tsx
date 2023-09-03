import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface AvatarProps {
  name: string
  picture: string
  date: string
}

export const Byline = ({ name, picture, date }: AvatarProps) => {
  const parsedDate = parseISO(date)

  return (
    <Link href="/about" aria-label="About">
      {/** FIXME */}
      {/*
        You can use the class "group" to group behavior
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
      */}
      <div className="group flex items-center space-x-5">
        <Avatar className="h-14 w-14">
          <AvatarImage
            src={picture} // "https://danstroot.imgix.net/assets/blog/authors/dan.jpeg?auto=format&fit=max&w=112"
            alt={name}
          />
          <AvatarFallback />
        </Avatar>
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
