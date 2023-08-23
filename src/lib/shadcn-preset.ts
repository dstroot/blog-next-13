//https://youtu.be/QJlTWj30krw
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

import { shadcnPlugin } from "./shadcn-plugin"

export const shadcnPreset = {
  darkmode: "class",
  content: [],
  plugins: [shadcnPlugin, animatePlugin],
} satisfies Config
