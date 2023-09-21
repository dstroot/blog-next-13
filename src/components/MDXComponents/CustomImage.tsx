import NextImage, { ImageProps } from 'next/image'

export const CustomImage = (props: React.HTMLAttributes<HTMLImageElement>) => {
  let imgProps = props as unknown as ImageProps
  let src = imgProps.src as string
  const isInternalImage = src && src.startsWith('/')

  // https://github.com/contentlayerdev/contentlayer/issues/506
  const Image = (props: ImageProps) => <NextImage {...props} />

  if (isInternalImage) {
    return (
      // height and width are part of the props, from rehype-img-size
      // so they are automatically passed here with {...props}

      // https://www.peterlunch.com/snippets/next-image-styling
      <div className="relative aspect-[2/1]">
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
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}{' '}
      <img
        className="max-h-[384px]"
        src={imgProps.src + '?w=768'}
        alt={imgProps.alt}
        loading="lazy"
      />
    </div>
  )
}
