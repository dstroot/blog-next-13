'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

// Supported easing functions are:

// anticipate
// backIn/backOut/backInOut
// circIn/circOut/circInOut
// easeIn/easeOut/easeInOut

/*

A template file is similar to a layout in that it wraps a layout or page. Unlike layouts that persist across routes and maintain state, templates are given a unique key, meaning children Client Components reset their state on navigation.

*/
