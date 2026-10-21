import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

type FigureProps = {
  src: string
  alt: string
  caption?: string
}

export function Figure({ src, alt, caption }: FigureProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const isLoaded = loadedSrc === src

  return (
    <figure className="my-6 space-y-2">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className="relative inline-block min-h-32 max-w-full overflow-hidden rounded-md border bg-muted"
        aria-label={alt}
      >
        {!isLoaded ? (
          <Skeleton
            aria-hidden="true"
            className="absolute inset-0 z-20 h-full min-h-32 w-full rounded-none"
          />
        ) : null}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoadedSrc(src)}
          onError={() => setLoadedSrc(src)}
          className={`relative block h-auto max-w-full transition-opacity duration-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </a>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
