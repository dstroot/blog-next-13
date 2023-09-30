type CodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  raw?: string
}

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <div className="relative my-5 flex w-full flex-col space-y-5 rounded-lg bg-gray-700 p-5 font-mono text-base md:text-lg">
      <div className="flex w-full space-x-2">
        <span className="h-3 w-3 rounded-full bg-[#ff605c]"></span>
        <span className="h-3 w-3 rounded-full bg-[#ffbd44]"></span>
        <span className="h-3 w-3 rounded-full bg-[#00ca4e]"></span>
      </div>
      <div>{props.children}</div>
    </div>
  )
}

// https://ped.ro/blog/code-blocks-but-better
// https://github.com/wooorm/xdm#syntax-highlighting-with-the-meta-field
// https://www.alaycock.co.uk/
