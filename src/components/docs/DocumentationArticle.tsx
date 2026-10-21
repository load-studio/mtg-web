import { ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import type { DocSection, Locale } from "@/types/documentation"

type DocumentationArticleProps = {
  document: DocSection
  labels: Locale["ui"]
}

export function DocumentationArticle({ document, labels }: DocumentationArticleProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-8 md:px-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <span>{document.group}</span>
        <ChevronRight className="size-4" />
        <span>{document.summary}</span>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight">{document.title}</h1>
      <p className="mt-2 text-base text-muted-foreground">{document.summary}</p>
      <Separator className="my-6" />

      <article className="max-w-none [&_a]:font-medium [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6">
        {document.content}
      </article>

      <Separator className="my-8" />
      <footer className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>{labels.footer}</span>
        <a
          href="https://github.com/StudioLoad/ModernTerrainGenerator/issues"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 underline"
        >
          {labels.issue}
          <ChevronRight className="size-4" />
        </a>
      </footer>
    </main>
  )
}
