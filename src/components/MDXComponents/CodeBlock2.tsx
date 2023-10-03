import { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// import * as ScrollArea from '@radix-ui/react-scroll-area'
import { ScrollArea } from '../ui/scroll'

type CodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  title?: string
}

export const Card: FC<{
  children: ReactNode
  className?: string
  shadow?: boolean
  dark?: boolean
}> = ({ children, className, shadow = false, dark = false }) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border',
        dark
          ? 'border-gray-800 bg-gray-900'
          : 'border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900',
        shadow &&
          `shadow-lg ${
            dark ? 'shadow-gray-900' : 'shadow-gray-100 dark:shadow-gray-900'
          }`,
        className,
      )}
    >
      {children}
    </div>
  )
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <Card shadow className="mb-8">
      <Tabs defaultValue="tab1" orientation="horizontal">
        <TabsList aria-label="code example">
          <div className="flex h-10 items-center space-x-1.5 border-b border-r border-gray-100 px-4 dark:border-gray-900">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <TabsTrigger value="tab1">{props.title}</TabsTrigger>
          <div className="grow border-b border-gray-100 dark:border-gray-900"></div>
        </TabsList>
        <TabsContent className="bg-white dark:bg-black" value="tab1">
          <ScrollArea>{props.children}</ScrollArea>
        </TabsContent>
      </Tabs>

      {/*
          <ScrollArea.Root className="w-full overflow-hidden bg-white dark:bg-[#0D1116]">
            <ScrollArea.Viewport>
              {props.children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="horizontal">
              <ScrollArea.Thumb className="relative" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </ScrollArea.Root>
     */}
    </Card>
  )
}
