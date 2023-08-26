// A loading file can create instant loading states built on Suspense.
// By default, this file is a Server Component - but can also be
// used as a Client Component through the "use client" directive.

export default function Loading() {
  return (
    <div className="container my-6 md:my-12">
      <p className="text-xl font-medium text-muted">Loading...</p>
    </div>
  )
}
