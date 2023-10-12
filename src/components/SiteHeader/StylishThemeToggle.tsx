'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/Icons'

export function StylishThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
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
            {/* <Button
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
            </Button> */}
            <button className="text-gs-background-1000 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent outline-none hover:bg-gray-500 focus-visible:ring-1 focus-visible:ring-gray-400 disabled:opacity-50 disabled:hover:bg-gray-700">
              {resolvedTheme === 'light' ? (
                <Icons.sun className="h-4 w-4" />
              ) : null}
              {resolvedTheme === 'dark' ? (
                <Icons.moon className="h-4 w-4" />
              ) : null}
              <span className="sr-only">Toggle theme</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-gray-50 dark:bg-gray-900"
          >
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Icons.sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Icons.moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Icons.laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
