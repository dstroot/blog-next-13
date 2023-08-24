export const YouTube = ({ link }: { link: string }) => {
  const url = new URL(link)
  return (
    <iframe
      className="aspect-video w-full"
      src={'https://www.youtube-nocookie.com/embed/' + url.pathname}
      // frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
