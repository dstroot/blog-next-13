export default function PageNotFound() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center md:flex-row">
      <div className="border-b-4 pb-3 text-8xl font-bold leading-tight tracking-tighter md:border-b-0 md:border-r-4 md:pr-6">
        404
      </div>
      <div className="pt-3 text-xl font-semibold italic md:pl-6 md:text-2xl">
        This page could not be found. snippets/[slug]
      </div>
    </div>
  )
}
