import { useId } from "react"
import { ExternalLink, Moon, Sun } from "lucide-react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "@/components/theme-provider"
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
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

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
        <Toggle
          type="button"
          variant="outline"
          size="sm"
          pressed={isDark}
          onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </Toggle>
        <label htmlFor={languageSelectId} className="sr-only">
          {labels.language}
        </label>
        <Select
          value={language}
          onValueChange={(value) => {
            if (value === "en" || value === "pt") onLanguageChange(value)
          }}
        >
          <SelectTrigger id={languageSelectId} size="sm" aria-label={labels.language} className="min-w-32">
            <SelectValue>{language === "pt" ? "Português" : "English"}</SelectValue>
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="pt">Português</SelectItem>
          </SelectContent>
        </Select>
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
