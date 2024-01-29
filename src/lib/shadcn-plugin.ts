// https://youtu.be/QJlTWj30krw
import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
  ({ addBase }) => {
    // add css variable definitions to the base layer
    addBase({
      ':root': {
        // Default background color of <body />
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',

        // Background color for <Card />
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',

        // Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',

        // Primary & secondary colors for <Button />
        '--primary': '221.2 83.2% 53.3%',
        '--primary-foreground': '210 40% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',

        // Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',

        // Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc.
        '--accent': '210 40% 96.1%',
        '--accent-foreground': '222.2 47.4% 11.2%',

        // Used for destructive actions such as <Button variant="destructive">
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 40% 98%',

        // Default border color
        '--border': '214.3 31.8% 91.4%',

        // Border color for inputs such as <Input />, <Select />, <Textarea />
        '--input': '214.3 31.8% 91.4%',

        // Used for focus ring
        '--ring': '221.2 83.2% 53.3%',

        // Border radius for card, input and buttons
        '--radius': '0.5rem',

        // CUSTOM overlay text
        '--overlay': '236 29% 18%',
      },
      '.dark': {
        '--background': '222.2 84% 4.9%',
        '--foreground': '210 40% 98%',
        '--card': '222.2 84% 4.9%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 84% 4.9%',
        '--popover-foreground': '210 40% 98%',
        '--primary': '217.2 91.2% 59.8%',
        '--primary-foreground': '222.2 47.4% 11.2%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--accent': '217.2 32.6% 17.5%',
        '--accent-foreground': '210 40% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': '224.3 76.3% 48%',
      },
    })

    addBase({
      '*': {
        '@apply border-border': {},
      },
      body: {
        '@apply bg-background text-foreground': {},
        'font-feature-settings': '"rlig" 1, "calt" 1',
      },
    })
  },

  // extend the tailwindcss theme with "themeable" utilities
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          overlay: 'hsl(var(--overlay))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: 'calc(var(--radius) - 4px)',
        },
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
)
