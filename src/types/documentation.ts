import type { ReactNode } from "react"

export type DocSection = {
  id: string
  title: string
  group: string
  summary: string
  content: ReactNode
}

export type LocalePage = {
  title: string
  group: string
  summary: string
  content?: string
}

export type Locale = {
  ui: {
    brand: string
    search: string
    source: string
    documentation: string
    issue: string
    footer: string
    language: string
  }
  groups: string[]
  pages: Record<string, LocalePage>
}
