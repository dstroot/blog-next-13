'use client'

// Error components must be Client Components

// import { useEffect } from 'react';
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error);
  // }, [error]);

  return (
    <Container variant="padded">
      <PageHeader title="Error" description="Something went wrong!" size="lg" />
      <p className="my-8">{error.message}</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Container>
  )
}
