// A loading file can create instant loading states built on Suspense.
// By default, this file is a Server Component - but can also be
// used as a Client Component through the "use client" directive.
import { Container } from '@/components/Container'

export default function Loading() {
  return (
    <Container variant="padded">
      <p className="text-xl font-medium">Loading...</p>
    </Container>
  )
}
