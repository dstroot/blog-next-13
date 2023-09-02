import { siteConfig } from '@/config/site'

export const Intro = () => {
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex flex-col">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            {siteConfig.meta.name}
          </p>
          <p className="mt-2 text-2xl font-semibold italic md:text-2xl lg:text-3xl">
            {siteConfig.meta.tagline}.
          </p>
        </div>
      </div>
    </section>
  )
}
