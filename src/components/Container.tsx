import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const ContainerVariants = cva('container', {
  variants: {
    variant: {
      default: 'container mx-auto p-4 md:p-6',
      padded: 'container mx-auto p-4 md:p-6 mt-6 md:mt-12',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof ContainerVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      className={cn(ContainerVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  )
})
Container.displayName = 'Container'

export { Container, ContainerVariants }
