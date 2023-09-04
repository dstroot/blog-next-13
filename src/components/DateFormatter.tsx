import { Suspense } from 'react'
import { format, parseISO } from 'date-fns'

// https://paulie.dev/posts/2022/10/react-hydration-error-425-text-content-does-not-match-server-rendered-html/

export const DateFormatter = ({ dateString }: { dateString: string }) => {
  return (
    <time dateTime={dateString}>
      <Suspense fallback={null}>
        {format(parseISO(dateString), 'LLLL d, yyyy')}
      </Suspense>
    </time>
  )
}
