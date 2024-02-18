import * as runtime from 'react/jsx-runtime'

import { MDXComponents } from '@/components/MDXComponents'

interface MdxProps {
  code: string
  components?: Record<string, React.ComponentType>
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={{ ...MDXComponents, ...components }} />
}
