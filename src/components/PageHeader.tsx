import { cva, type VariantProps } from 'class-variance-authority'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

const headerTitleVariants = cva('font-bold tracking-tight', {
  variants: {
    size: {
      default:
        'mb-2 md:mb-4 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-4xl md:leading-none lg:text-5xl',
      lg: 'mb-2 md:mb-4 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const headerDescriptionVariants = cva('text-muted', {
  variants: {
    size: {
      default:
        'text-center md:text-left text-lg md:text-xl text-muted-foreground',
      lg: 'text-center md:text-left text-xl md:text-2xl text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface PageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerTitleVariants>,
    VariantProps<typeof headerDescriptionVariants> {
  title: string
  description?: string | null
  descriptionAs?: React.ElementType
  balancedTitle?: boolean
  balancedDescription?: boolean
}

export const PageHeader = ({
  title,
  description,
  descriptionAs = 'h2',
  className,
  size,
  balancedTitle = false,
  balancedDescription = true,
  ...props
}: PageHeaderProps) => {
  const Title = balancedTitle ? Balancer : 'h1'
  const Description = balancedDescription ? Balancer : 'h2'

  return (
    <div
      className={cn('mb-6 grid w-full gap-1 md:mb-12', className)}
      {...props}
    >
      <Title as="h1" className={cn(headerTitleVariants({ size }))}>
        {title}
      </Title>
      {description && (
        <Description
          as={descriptionAs}
          className={cn(headerDescriptionVariants({ size }))}
        >
          {description}
        </Description>
      )}
    </div>
  )
}
