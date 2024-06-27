export const YouTube = ({ link, short }: { link: string; short: boolean }) => {
  const url = new URL(link)

  if (short) {
    return (
      <iframe
        title="YouTube iFrame Component"
        className="aspect-[9/16] h-[750px]"
        loading="lazy"
        src={'https://www.youtube-nocookie.com/embed/' + url.pathname}
        // frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  }

  return (
    <iframe
      title="YouTube iFrame Component"
      className="aspect-video w-full"
      loading="lazy"
      src={'https://www.youtube-nocookie.com/embed/' + url.pathname}
      // frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
