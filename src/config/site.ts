import { IconKey } from '@/components/Icons'

export type SiteConfig = typeof siteConfig

type NavItem = {
  name: string
  href: string
  disabled?: boolean
  prefetch?: boolean
  external?: boolean
  new: boolean
  icon?: IconKey
  description?: string
}

type FooterNavItem = {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}

export const siteConfig = {
  meta: {
    lang: 'en',
    location: 'Crafted with ♥️ in California.',
    name: 'Dan Stroot · Blog',
    tagline: 'I love building things',
    author: 'Dan Stroot',
    description:
      'I love building things. Made in California. Family man, technologist and Hacker News aficionado. Eternally curious.',
    keywords: ['CIO Blog', 'Code Snippets'],
    themeColor: '##F5E1E6',
    backgroundColor: '#F5E1E6',
    og: {
      locale: 'en-US',
      type: 'website',
      ogImage: '/ogimage.jpg',
      width: 1200,
      height: 630,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@dreamawesome',
    },
  },
  mainNav: [
    { href: '/', name: 'Home', new: false, external: false },
    { href: '/about', name: 'About', new: false, external: false },
    {
      href: '/archive',
      name: 'Archive',
      new: false,
      prefetch: false,
      external: false,
    },
    {
      href: '/snippets',
      name: 'Snippets',
      new: false,
      prefetch: false,
      external: false,
    },
    {
      href: '/uses',
      name: 'Uses',
      new: false,
      prefetch: false,
      external: false,
    },
  ] satisfies NavItem[],
  footerNav: [
    {
      title: 'Tools',
      items: [
        { title: 'Search', href: '/search', external: false },
        { title: 'Archive', href: '/archive', external: false },
        { title: 'Snippets', href: '/snippets', external: false },
        { title: 'Uses', href: '/uses', external: false },
      ],
    },
  ] satisfies FooterNavItem[],
}
