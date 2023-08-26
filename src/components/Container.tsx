import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const ContainerVariants = cva('container', {
  variants: {
    variant: {
      default: '',
      padded: 'my-6 md:my-12',
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
