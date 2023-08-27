import { cva, type VariantProps } from 'class-variance-authority'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

const headerTitleVariants = cva('font-bold tracking-tight', {
  variants: {
    size: {
      default: 'text-3xl md:text-4xl',
      sm: 'text-2xl md:text-3xl',
      //   lg: 'text-4xl md:text-5xl',
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
      default: 'text-lg',
      sm: 'text-base',
      lg: 'text-xl md:text-2xl text-gray-500',
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
  balacedDescription?: boolean
}

export const PageHeader = ({
  title,
  description,
  descriptionAs = 'h2',
  className,
  size,
  balancedTitle = false,
  balacedDescription = true,
  ...props
}: PageHeaderProps) => {
  const Title = balancedTitle ? Balancer : 'h1'
  const Description = balacedDescription ? Balancer : 'h2'

  return (
    <div className={cn('mb-6 grid gap-1 md:mb-12', className)} {...props}>
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
