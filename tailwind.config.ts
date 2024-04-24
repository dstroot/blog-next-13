import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
}

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        footerbg: 'hsl(var(--footerbg))',
        foreground: 'hsl(var(--foreground))',
        footerfg: 'hsl(var(--footerfg))',
        accent2: {
          DEFAULT: 'hsl(var(--accent2))',
          foreground: 'hsl(var(--accent-foreground2))',
        },
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
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
      letterSpacing: {
        tighter: '-.05em',
      },
      lineHeight: {
        tight: '1.2',
      },
      outline: {
        transparent: '2px #983799',
      },
      typography(theme: any) {
        return {
          DEFAULT: {
            css: [disabledCss],
          },
          lg: {
            css: [
              {
                li: {
                  marginTop: '0',
                  marginBottom: '0',
                },
                cite: {
                  fontSize: '1.0rem',
                },
                hr: {
                  marginTop: '.75rem',
                  marginBottom: '1.25rem',
                  border: '0.5px solid',
                },
              },
            ],
          },
        }
      },
    },
  },
  plugins: [animatePlugin, typographyPlugin],
}
export default config
