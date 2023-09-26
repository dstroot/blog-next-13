import { ReactNode } from 'react'

// import Balancer from 'react-wrap-balancer'

// https://vercel.com/blog/react-wrap-balancer

type PostTitleProps = {
  children: ReactNode
}

export const PostTitle = ({ children }: PostTitleProps) => {
  return (
    <h1 className="text-balanced mb-12 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl">
      {children}
      {/* <Balancer>{children}</Balancer> */}
    </h1>
  )
}
