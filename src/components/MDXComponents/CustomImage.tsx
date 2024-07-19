import Image, { ImageProps } from 'next/image'

export const CustomImage = (props: React.HTMLAttributes<HTMLImageElement>) => {
  const imgProps = props as unknown as ImageProps
  const src = imgProps.src as string

  // external images start with http*, website images start with /
  const isInternalImage = src && src.startsWith('/')

  if (isInternalImage) {
    return (
      <span className="relative block aspect-[2/1]">
        <Image
          src={src}
          alt={imgProps.alt}
          fill
          loading="lazy"
          sizes="(min-width: 1040px) 768px, (min-width: 780px) 720px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
          className="m-0 object-cover"
        />
      </span>
    )
  }

  return (
    <span className="relative block aspect-[2/1]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="max-h-[384px]"
        src={imgProps.src + '?w=768'}
        alt={imgProps.alt}
        loading="lazy"
      />
    </span>
  )
}
