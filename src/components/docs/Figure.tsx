import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

type FigureProps = {
  src: string
  alt: string
  caption?: string
  className?: string
  imageClassName?: string
}

export function Figure({
  src,
  alt,
  caption,
  className,
  imageClassName,
}: FigureProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")

  return (
    <figure className={`my-6 space-y-2 ${className ?? ""}`}>
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        className={`relative inline-block min-h-32 min-w-0 max-w-full overflow-hidden rounded-md border bg-muted ${imageClassName ?? ""}`}
        aria-label={alt}
      >
        {status === "loading" && (
          <Skeleton
            aria-hidden="true"
            className="absolute inset-0 z-20 h-full min-h-32 w-full rounded-none"
          />
        )}
        {status === "error" ? (
          <span
            role="img"
            aria-label={alt}
            className="absolute inset-0 flex min-h-32 items-center justify-center bg-muted text-muted-foreground"
          >
            <span aria-hidden="true" className="text-4xl font-semibold">:(</span>
          </span>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={`relative block h-auto max-w-full transition-opacity duration-300 ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </a>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
