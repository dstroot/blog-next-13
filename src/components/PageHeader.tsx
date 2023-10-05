import { cn } from '@/lib/utils'

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string | null
}

export const PageHeader = ({
  title,
  description,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn('mb-6 w-full md:mb-12', className)}>
      <h1 className="mb-2 text-balance text-center text-4xl font-bold leading-tight tracking-tighter md:mb-4 md:text-left md:text-6xl md:leading-none lg:text-7xl">
        {title}
      </h1>
      {description && (
        <h2 className="text-balance text-center text-xl text-muted-foreground md:text-left md:text-2xl">
          {description}
        </h2>
      )}
    </div>
  )
}
