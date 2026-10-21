import { useId } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import type { Locale } from "@/types/documentation"

type DocumentationHeaderProps = {
  labels: Locale["ui"]
  title: string
  language: "en" | "pt"
  onLanguageChange: (language: "en" | "pt") => void
  onNavigate: (id: string) => void
}

export function DocumentationHeader({
  labels,
  title,
  language,
  onLanguageChange,
  onNavigate,
}: DocumentationHeaderProps) {
  const languageSelectId = useId()

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              onClick={(event) => {
                event.preventDefault()
                onNavigate("overview")
              }}
            >
              {labels.documentation}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <label htmlFor={languageSelectId} className="sr-only">
          {labels.language}
        </label>
        <select
          id={languageSelectId}
          value={language}
          onChange={(event) => onLanguageChange(event.target.value as "en" | "pt")}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            window.open(
              "https://github.com/StudioLoad/ModernTerrainGenerator",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <ExternalLink className="mr-2 size-4" />
          {labels.source}
        </Button>
      </div>
    </header>
  )
}
