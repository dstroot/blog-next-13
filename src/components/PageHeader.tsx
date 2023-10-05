import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const headerTitleVariants = cva(
  ' mb-2 md:mb-4 text-balance text-center md:text-left font-bold md:leading-none leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: 'text-2xl md:text-4xl lg:text-5xl',
        lg: 'text-4xl md:text-6xl lg:text-7xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

const headerDescriptionVariants = cva(
  'px-4 md:px-0 text-balance text-center text-muted-foreground md:text-left',
  {
    variants: {
      size: {
        default: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

interface PageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerTitleVariants>,
    VariantProps<typeof headerDescriptionVariants> {
  title: string
  description?: string | null
  size?: 'default' | 'lg' | null | undefined
}

export const PageHeader = ({
  title,
  description,
  className,
  size,
}: PageHeaderProps) => {
  return (
    <div className={cn('mb-6 w-full md:mb-12', className)}>
      <h1 className={cn(headerTitleVariants({ size }))}>{title}</h1>
      {description && (
        <h2 className={cn(headerDescriptionVariants({ size }))}>
          {description}
        </h2>
      )}
    </div>
  )
}
