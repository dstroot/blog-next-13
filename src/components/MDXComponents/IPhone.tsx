import { env } from '@/config/env.mjs'

export const IPhone = () => {
  const URL =
    env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : env.NEXT_PUBLIC_APP_URL

  return (
    <div className="m-0 hidden h-[970px] w-[480px] place-content-center bg-[url('https://danstroot.imgix.net/assets/blog/img/iphone-x.png')] bg-contain bg-no-repeat sm:grid">
      <iframe src={URL} className="-mt-8 h-[800px] w-[395px]"></iframe>
    </div>
  )
}
