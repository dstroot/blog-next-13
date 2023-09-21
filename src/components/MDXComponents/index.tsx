/* ---  Custom MDX Components --- */
import Image from 'next/image'

import { CodeBlock } from './CodeBlock'
import { CustomImage } from './CustomImage'
import { CustomLink } from './CustomLink'
import { CustomTweet } from './CustomTweet'
import { IPhone } from './IPhone'
import { Step } from './Step'
import { YouTube } from './YouTube'

export const MDXComponents = {
  // Override standard HTML Tags
  a: CustomLink,
  img: CustomImage,

  // img: (props: any) => {
  //   return (
  //     <div className="relative">
  //       <Image {...props} layout="fill" loading="lazy" />
  //     </div>
  //   )
  // },

  // add MDX components
  CodeBlock,
  YouTube,
  CustomTweet,
  Step,
  IPhone,
}

/*
  MDX Bundler will "bundle" these components along with any other directly imported
  components for the MDX files to use.
*/
