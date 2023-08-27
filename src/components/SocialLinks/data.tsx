import { ReactElement } from 'react'

import { Icons } from '@/components/Icons'

export type SocialLink = {
  name: string
  url: string
  icon: ReactElement
  aria: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/danstroot',
    icon: <Icons.twitterX />,
    aria: 'Join me on Twitter.',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/danstroot',
    icon: <Icons.linkedin />,
    aria: 'Join me on LinkedIn.',
  },
  {
    name: 'Github',
    url: 'https://github.com/dstroot/blog-next',
    icon: <Icons.github />,
    aria: 'Join me on GitHub.',
  },
]
