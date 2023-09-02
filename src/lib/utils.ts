import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { env } from '@/config/env.mjs'

/*
usage:

import { cn } from "@/lib/cn";

export const Navbar = ({ fixed }: { fixed: boolean }) => {
  return (
    <nav className={cn("bg-white", fixed ?? "fixed top-0 left-0 right-0")}>
      Item
    </nav>
  );
};
*/

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}
