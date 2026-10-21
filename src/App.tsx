import { useEffect, useMemo, useState } from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { DocumentationArticle } from "@/components/docs/DocumentationArticle"
import { DocumentationHeader } from "@/components/docs/DocumentationHeader"
import { DocumentationSidebar } from "@/components/docs/DocumentationSidebar"
import en from "@/i18n/en.json"
import pt from "@/i18n/pt.json"
import { docs } from "@/data/documentation"
import { getDocumentIdFromPath } from "@/lib/documentation-routing"
import { renderMarkdown } from "@/lib/markdown"
import type { DocSection, Locale } from "@/types/documentation"

const locales: Record<"en" | "pt", Locale> = {
  en,
  pt,
}

const documentIds = docs.map((document) => document.id)

export function App() {
  const [activeId, setActiveId] = useState(() => getDocumentIdFromPath(window.location.pathname, documentIds))
  const [query, setQuery] = useState("")
  const [language, setLanguage] = useState<"en" | "pt">(() => {
    try {
      return window.localStorage.getItem("mtg-docs-language") === "pt" ? "pt" : "en"
    } catch {
      return "en"
    }
  })
  useEffect(() => {
    try {
      window.localStorage.setItem("mtg-docs-language", language)
    } catch {
      // Language selection still works when storage is unavailable.
    }
  }, [language])

  const locale = locales[language]

  const localizedDocuments = useMemo<DocSection[]>(
    () =>
      docs.map((document) => {
        const translated = locale.pages[document.id]

        return {
          ...document,
          title: translated?.title ?? document.title,
          group: translated?.group ?? document.group,
          summary: translated?.summary ?? document.summary,
          content:
            language === "pt"
              ? renderMarkdown(translated?.content ?? "")
              : document.content,
        }
      }),
    [language, locale],
  )

  const filteredDocuments = useMemo(() => {
    const search = query.trim().toLocaleLowerCase()
    if (!search) return localizedDocuments

    return localizedDocuments.filter((document) =>
      `${document.title} ${document.summary} ${document.group}`
        .toLocaleLowerCase()
        .includes(search),
    )
  }, [localizedDocuments, query])

  const navigate = (id: string) => {
    setActiveId(id)
    const path = `/documentation/${id}`

    if (window.location.pathname !== path) {
      window.history.pushState({ id }, "", path)
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      setActiveId(getDocumentIdFromPath(window.location.pathname, documentIds))
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  const activeDocument =
    localizedDocuments.find((document) => document.id === activeId) ?? localizedDocuments[0]

  return (
    <SidebarProvider>
      <DocumentationSidebar
        brand={locale.ui.brand}
        searchPlaceholder={locale.ui.search}
        query={query}
        onQueryChange={setQuery}
        groups={locale.groups}
        documents={filteredDocuments}
        activeId={activeId}
        onNavigate={navigate}
      />
      <SidebarInset className="min-w-0">
        <DocumentationHeader
          labels={locale.ui}
          title={activeDocument.title}
          language={language}
          onLanguageChange={setLanguage}
          onNavigate={navigate}
        />
        <DocumentationArticle document={activeDocument} labels={locale.ui} />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
