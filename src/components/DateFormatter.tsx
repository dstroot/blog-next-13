import { Suspense } from 'react'
import { format, parseISO } from 'date-fns'

// https://paulie.dev/posts/2022/10/react-hydration-error-425-text-content-does-not-match-server-rendered-html/

export const DateFormatter = ({
  dateString,
  formatString,
}: {
  dateString: string
  formatString?: string
}) => {
  if (!formatString) {
    formatString = 'LLLL d, yyyy'
  }
  return (
    <time dateTime={dateString}>
      <Suspense fallback={null}>
        {format(parseISO(dateString), formatString)}
      </Suspense>
    </time>
  )
}
