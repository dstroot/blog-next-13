// import { ScrollArea } from '../ui/scroll'

type CodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  raw?: string
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <div className="relative flex flex-col space-y-4 rounded-lg bg-gray-200 p-4 font-mono text-base dark:bg-gray-700 md:text-lg">
      <div className="flex w-full space-x-2">
        <span className="h-3 w-3 rounded-full bg-[#ff605c]"></span>
        <span className="h-3 w-3 rounded-full bg-[#ffbd44]"></span>
        <span className="h-3 w-3 rounded-full bg-[#00ca4e]"></span>
      </div>
      {/* <ScrollArea className="bg-black">{props.children}</ScrollArea> */}
      <div className="overflow-x-auto rounded bg-gray-800 dark:bg-black">
        {props.children}
      </div>
    </div>
  )
}

// https://ped.ro/blog/code-blocks-but-better
// https://github.com/wooorm/xdm#syntax-highlighting-with-the-meta-field
// https://www.alaycock.co.uk/
