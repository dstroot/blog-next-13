'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('flex flex-nowrap bg-gray-100 dark:bg-gray-800', className)}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, value }, ref) => (
  <TabsPrimitive.Trigger
    value={value}
    ref={ref}
    className={cn(
      'relative h-10 shrink-0 items-center px-4 text-slate-600 focus:outline-none focus:ring-0 data-[state=active]:border-b-transparent data-[state=active]:bg-white dark:text-slate-300 dark:data-[state=active]:bg-black',
      className,
    )}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, value }, ref) => (
  <TabsPrimitive.Content
    value={value}
    ref={ref}
    className={cn('overflow-y-hidden focus:outline-none', className)}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
