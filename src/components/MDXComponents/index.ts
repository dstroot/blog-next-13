/* ---  Custom MDX Components --- */
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
