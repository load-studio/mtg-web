import { BookOpen, FileCode2, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import type { DocSection } from "@/types/documentation"

type DocumentationSidebarProps = {
  brand: string
  searchPlaceholder: string
  query: string
  onQueryChange: (value: string) => void
  groups: string[]
  documents: DocSection[]
  activeId: string
  onNavigate: (id: string) => void
}

export function DocumentationSidebar({
  brand,
  searchPlaceholder,
  query,
  onQueryChange,
  groups,
  documents,
  activeId,
  onNavigate,
}: DocumentationSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="gap-2 p-4">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault()
            onNavigate("overview")
          }}
          className="flex items-center gap-2 font-semibold"
        >
          <BookOpen className="size-5" />
          <span>{brand}</span>
        </a>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={searchPlaceholder}
            className="pl-8"
            aria-label={searchPlaceholder}
          />
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {groups.map((group) => {
          const groupDocuments = documents.filter((document) => document.group === group)
          if (groupDocuments.length === 0) return null

          return (
            <SidebarGroup key={group}>
              <SidebarGroupLabel>{group}</SidebarGroupLabel>
              <SidebarMenu>
                {groupDocuments.map((document) => (
                  <SidebarMenuItem key={document.id}>
                    <SidebarMenuButton
                      isActive={activeId === document.id}
                      onClick={() => onNavigate(document.id)}
                      tooltip={document.title}
                    >
                      <FileCode2 />
                      <span>{document.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
    </Sidebar>
  )
}
