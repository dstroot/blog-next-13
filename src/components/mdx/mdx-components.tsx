import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Callout } from '@/components/mdx/callout'
import { CodeBlock } from '@/components/mdx/code-block'
import { MdxCard } from '@/components/mdx/mdx-card'

/** Originally from `shadcn/ui-docs`
 * @link https://github.com/shadcn/ui/blob/main/apps/www/components/mdx-components.tsx
 */

// These types are required to make the related components work with `useMDXComponent`
// They used to work without these types, but now they don't for some reason
type ImageProps = React.ComponentProps<typeof Image>
type AlertProps = React.ComponentProps<typeof Alert>
type AlertTitleProps = React.ComponentProps<typeof AlertTitle>
type AlertDescriptionProps = React.ComponentProps<typeof AlertDescription>
type AspectRatioProps = React.ComponentProps<typeof AspectRatio>

const components = {
  pre: CodeBlock,
  Card: MdxCard,
  Callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    // <div className="mdx">
    //   <Component components={components} />
    // </div>

    <div className="prose-lg mx-auto max-w-3xl">
      <div className="prose prose-lg mb-8 max-w-none break-words dark:prose-invert prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-blue-500 dark:prose-a:text-blue-300 dark:hover:prose-a:text-blue-500">
        <Component components={components} />
      </div>
    </div>
  )
}
