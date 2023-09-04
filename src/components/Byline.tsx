import Image from 'next/image'
import Link from 'next/link'

// import { format, parseISO } from 'date-fns'

interface AvatarProps {
  name: string
  picture: string
  date: string
}

export const Byline = ({ name, picture, date }: AvatarProps) => {
  //   const parsedDate = parseISO(date)

  return (
    <Link href="/about" aria-label="About" className="group">
      {/*
        You can use the class "group" to group behavior
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
      */}
      <div className="flex items-center space-x-4">
        <div className="relative h-12 w-12">
          <Image
            sizes="10vw"
            priority={false}
            className="overflow-hidden rounded-full object-cover duration-300 ease-in-out group-hover:opacity-[85%]"
            src={picture}
            alt={name}
            fill
          />
        </div>
        <div className="flex-auto">
          <div className="mb-0 text-xl font-semibold group-hover:underline">
            Dan Stroot
          </div>
          <div className="text-sm text-muted-foreground">
            {/* {format(parsedDate, 'LLLL d, yyyy')} */}
          </div>
        </div>
      </div>
    </Link>
  )
}
