export type SiteConfig = typeof siteConfig

type NavItem = {
  name: string
  href: string
  disabled?: boolean
  external?: boolean
  new: boolean
  //   icon?: keyof typeof Icons
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

// TODO: implement OG API Route
export const siteConfig = {
  meta: {
    lang: 'en',
    name: 'Dan Stroot',
    tagline: 'I love building things',
    description: 'Dan Stroot · The most obscure blog in the world.',
    keywords: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Server Components',
      'Server Actions',
      'Skateshop',
      'Skateboard',
      'Skateboarding',
      'Kickflip',
    ],
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
    { href: '/about', name: 'About', new: false, external: false },
    { href: '/archive', name: 'Archive', new: false, external: false },
    { href: '/snippets', name: 'Snippets', new: false, external: false },
    { href: '/uses', name: 'Uses', new: false, external: false },
    { href: '/search', name: 'Search', new: false, external: false },
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
