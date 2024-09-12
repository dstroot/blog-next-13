'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/Icons'

export function ThemeToggle() {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // if not mounted return a placeholder to avoid CLS
  if (!mounted) return <div className="h-8 w-8"> </div>

  return (
    <>
      {mounted && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              {resolvedTheme === 'light' ? (
                <Icons.sun className="h-6 w-6" />
              ) : null}
              {resolvedTheme === 'dark' ? (
                <Icons.moon className="h-6 w-6" />
              ) : null}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-gray-50 dark:bg-gray-900"
          >
            <DropdownMenuItem
              className={cn(theme === 'light' && 'bg-accent')}
              onClick={() => setTheme('light')}
            >
              <Icons.sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(theme === 'dark' && 'bg-accent')}
              onClick={() => setTheme('dark')}
            >
              <Icons.moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={cn(theme === 'system' && 'bg-accent')}
              onClick={() => setTheme('system')}
            >
              <Icons.laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
