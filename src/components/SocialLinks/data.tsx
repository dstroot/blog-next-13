import { ReactElement } from 'react'

// import {
//   // FaFacebookF,
//   FaGithub,
//   FaLinkedin,
//   // FaInstagram,
//   FaTwitter,
// } from 'react-icons/fa'

import { Icons2 } from '../icons'

export type SocialLink = {
  name: string
  url: string
  icon: ReactElement
  aria: string
}

export const socialLinks: SocialLink[] = [
  // {
  //   name: 'Facebook',
  //   url: 'https://www.facebook.com/dan.stroot/',
  //   icon: <FaFacebookF />,
  //   aria: 'Join me on on Facebook.',
  // },
  {
    name: 'Twitter',
    url: 'https://twitter.com/danstroot',
    icon: <Icons2.twitter />,
    aria: 'Join me on Twitter.',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/danstroot',
    icon: <Icons2.linkedin />,
    aria: 'Join me on LinkedIn.',
  },
  {
    name: 'Github',
    url: 'https://github.com/dstroot/blog-next',
    icon: <Icons2.gitHub />,
    aria: 'Join me on GitHub.',
  },
  // {
  //   name: 'Instagram',
  //   url: 'https://instagram.com',
  //   icon: <FaInstagram />,
  //   aria: 'Join me on Instagram.',
  // },
]
