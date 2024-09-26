/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

import { siteConfig } from '@/config/site'
import { ogImageSchema } from '@/lib/validations/og'
import { IconKey, Icons } from '@/components/Icons'

const IMAGE_WIDTH = 1200
const IMAGE_HEIGHT = 630

export const dynamic = 'force-dynamic' // don't cache
export const runtime = 'edge' // image response requires edge

export async function GET(req: Request) {
  const avatarUrl =
    'https://danstroot.imgix.net/assets/blog/authors/dan.jpeg?auto=format&fit=max&w=128&h=128'

  try {
    const url = new URL(req.url)
    const parsedValues = ogImageSchema.parse(
      Object.fromEntries(url.searchParams),
    )

    const { mode, title, description, location, icon } = parsedValues

    //TODO Delete
    // console.log(parsedValues)
    // console.log(mode)
    // console.log(title)
    // console.log(description)
    // console.log(location)
    // console.log(icon)

    // if (!description) {
    //   throw new Error('No description provided.')
    // }

    const paint = mode === 'dark' ? '#fff' : '#000'
    const Icon = Icons[icon as IconKey]

    // TODO needs some design work
    return new ImageResponse(
      (
        <div
          tw="h-full w-full flex items-center justify-center"
          style={{
            color: paint,
            background:
              mode === 'dark'
                ? 'linear-gradient(90deg, #000 0%, #111 100%)'
                : 'white',
          }}
        >
          <div tw="flex w-1/3 justify-end pb-12 mr-12">
            <div tw="flex flex-col items-center">
              {icon ? (
                <Icon
                  tw="w-64 h-64 mt-8"
                  style={{ objectPosition: 'center', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={avatarUrl}
                  tw="w-64 h-64 rounded-full shadow-2xl mt-8"
                  style={{ objectPosition: 'center', objectFit: 'cover' }}
                />
              )}
            </div>
          </div>
          <div tw="flex w-2/3 flex-col">
            <div tw="text-7xl mb-4">{siteConfig.meta.name}</div>
            {title ? (
              <div tw="text-5xl font-bold tracking-tight leading-tight dark:text-zinc-50">
                {title}
              </div>
            ) : (
              <div tw="text-3xl pr-32">
                {siteConfig.meta.description
                  .replace(
                    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                    '',
                  )
                  .trim()}
              </div>
            )}
            {description ? (
              <div tw="flex flex-wrap max-w-[650px] mt-5 text-3xl text-zinc-500 font-normal tracking-tight leading-tight">
                {description}
              </div>
            ) : (
              <div tw="flex flex-wrap mt-8">
                {location && <div tw="flex mb-2 mr-4">📍 {location}</div>}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
      },
    )
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message}`)
      return errorResponse(error.message)
    }

    return errorResponse('Failed to generate an image.')
  }
}

function errorResponse(message: string) {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col p-4 items-center justify-center">
        <div tw="flex flex-col items-stretch rounded-xl shadow-2xl min-w-1/2">
          <div tw="text-3xl bg-red-600 text-white px-4 py-2 rounded-t-xl">
            Error
          </div>
          <div tw="text-xl border border-red-600 p-4 rounded-b-xl bg-white">
            {message}
          </div>
        </div>
      </div>
    ),
    { width: IMAGE_WIDTH, height: IMAGE_HEIGHT },
  )
}
