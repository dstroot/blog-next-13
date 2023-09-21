import Image, { ImageProps } from 'next/image'

export const CustomImage = (props: React.HTMLAttributes<HTMLImageElement>) => {
  let imgProps = props as unknown as ImageProps
  let src = imgProps.src as string

  // external images start with http*, website images start with /
  const isInternalImage = src && src.startsWith('/')

  if (isInternalImage) {
    return (
      <div className="relative aspect-[2/1]">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          {...imgProps}
          fill
          loading="lazy"
          sizes="(max-width: 1280px) 90vw, 1496px"
          className="m-0 object-contain"
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-[2/1]">
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        className="max-h-[384px]"
        src={imgProps.src + '?w=768'}
        alt={imgProps.alt}
        loading="lazy"
      />
    </div>
  )
}
