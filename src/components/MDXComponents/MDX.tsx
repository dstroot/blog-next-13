import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { CodeBlock } from '@/components/MDXComponents/CodeBlock'

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

// add any mdx components you need here
const components = {
  pre: CodeBlock,
  //   Card: MdxCard,
  //   Callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="converted-html">
      <Component components={components} />
    </div>
  )
}
