import * as z from 'zod'

export const ogImageSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  icon: z.string().optional(),
  mode: z.enum(['light', 'dark']).default('dark'),
})
