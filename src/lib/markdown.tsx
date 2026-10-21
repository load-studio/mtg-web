import { useState, type ReactNode } from "react"
import { DocumentationCode } from "@/components/docs/DocumentationCode"

function MarkdownImage({ src, alt }: { src: string; alt: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading")

  return (
    <div className="relative my-3 aspect-[4/3] w-full overflow-hidden rounded-md border bg-muted">
      {status === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}
      {status === "error" ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <span aria-hidden="true" className="text-4xl font-semibold">:(</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  )
}

function renderInline(value: string, keyPrefix: string): ReactNode[] {
  const parts = value
    .split(/(!\[[^\]]*\]\([^)]+\)|`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g)
    .filter(Boolean)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`

    const image = part.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (image) {
      return <MarkdownImage key={key} src={image[2]} alt={image[1]} />
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={key}>{part.slice(1, -1)}</code>
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <a
          key={key}
          href={link[2]}
          target="_blank"
          rel="noreferrer"
          className={/download|descarregar/i.test(link[1])
            ? "my-2 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground no-underline hover:opacity-90"
            : undefined}
        >
          {link[1]}
        </a>
      )
    }

    return part
  })
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim())
}

function isTableSeparator(line: string): boolean {
  const cells = parseTableRow(line)
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

export function renderMarkdown(markdown: string): ReactNode {
  const lines = markdown.split("\n")
  const blocks: ReactNode[] = []
  let paragraph: string[] = []
  let listItems: string[] = []
  let listType: "ul" | "ol" | null = null
  let codeLines: string[] = []
  let codeLanguage = ""
  let isInsideCodeBlock = false

  function flushParagraph() {
    if (paragraph.length === 0) return

    const key = `paragraph-${blocks.length}`
    blocks.push(<p key={key}>{renderInline(paragraph.join(" "), key)}</p>)
    paragraph = []
  }

  function flushList() {
    if (listItems.length === 0 || listType === null) return

    const Tag = listType
    blocks.push(
      <Tag key={`list-${blocks.length}`}>
        {listItems.map((item, index) => (
          <li key={index}>{renderInline(item, `list-item-${blocks.length}-${index}`)}</li>
        ))}
      </Tag>,
    )

    listItems = []
    listType = null
  }

  function flushCodeBlock() {
    blocks.push(
      <DocumentationCode key={`code-${blocks.length}`} title={codeLanguage || undefined}>
        {codeLines.join("\n")}
      </DocumentationCode>,
    )
    codeLines = []
    codeLanguage = ""
  }

  function flushPendingText() {
    flushParagraph()
    flushList()
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]

    if (line.startsWith("```")) {
      flushPendingText()

      if (isInsideCodeBlock) {
        flushCodeBlock()
        isInsideCodeBlock = false
      } else {
        isInsideCodeBlock = true
        codeLanguage = line.slice(3).trim()
      }

      continue
    }

    if (isInsideCodeBlock) {
      codeLines.push(line)
      continue
    }

    if (!line.trim()) {
      flushPendingText()
      continue
    }

    if (line.trim() === ":::preset-grid") {
      flushPendingText()
      const cardBlocks: string[][] = []
      let currentCard: string[] = []
      index += 1

      for (; index < lines.length && lines[index].trim() !== ":::endgrid"; index += 1) {
        if (lines[index].trim() === ":::card") {
          if (currentCard.length > 0) cardBlocks.push(currentCard)
          currentCard = []
          continue
        }
        currentCard.push(lines[index])
      }
      if (currentCard.length > 0) cardBlocks.push(currentCard)

      blocks.push(
        <div key={`preset-grid-${blocks.length}`} className="my-5 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {cardBlocks.map((cardLines, cardIndex) => {
            const imageLine = cardLines.find((value) => /^!\\[[^\\]]*\\]\\([^)]+\\)$/.test(value.trim()))?.trim() ?? ""
            const titleLine = cardLines.find((value) => /^\\*\\*.+\\*\\*$/.test(value.trim()))?.trim() ?? ""
            const linkLine = cardLines.find((value) => /^\\[[^\\]]+\\]\\([^)]+\\)$/.test(value.trim()))?.trim() ?? ""
            const description = cardLines.find((value) => value.trim() && value.trim() !== imageLine && value.trim() !== titleLine && value.trim() !== linkLine)?.trim() ?? ""
            const image = imageLine.match(/^!\\[([^\\]]*)\\]\\(([^)]+)\\)$/)
            const link = linkLine.match(/^\\[([^\\]]+)\\]\\(([^)]+)\\)$/)

            return (
              <div key={cardIndex} className="flex h-full min-w-0 flex-col rounded-lg border p-4">
                {image ? <MarkdownImage src={image[2]} alt={image[1]} /> : null}
                <div className="mt-2 font-semibold">{renderInline(titleLine, `preset-title-${cardIndex}`)}</div>
                <p className="mt-2 text-sm text-muted-foreground">{renderInline(description, `preset-description-${cardIndex}`)}</p>
                {link ? (
                  <div className="mt-auto flex justify-center pt-4">
                    <a
                      href={link[2]}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground no-underline hover:opacity-90"
                    >
                      {link[1]}
                    </a>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>,
      )
      continue
    }

    if (line.trimStart().startsWith("|")) {
      flushPendingText()

      const tableLines: string[] = [line]
      while (index + 1 < lines.length && lines[index + 1].trimStart().startsWith("|")) {
        tableLines.push(lines[index + 1])
        index += 1
      }

      const rows = tableLines.filter((row) => !isTableSeparator(row)).map(parseTableRow)
      const [header, ...body] = rows

      if (header?.length) {
        blocks.push(
          <div className="my-4 overflow-x-auto" key={`table-${blocks.length}`}>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  {header.map((cell, cellIndex) => (
                    <th className="px-3 py-2 font-semibold" key={cellIndex}>
                      {renderInline(cell, `table-header-${blocks.length}-${cellIndex}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIndex) => (
                  <tr className="border-b align-top" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td className="px-3 py-2" key={cellIndex}>
                        {renderInline(cell, `table-cell-${blocks.length}-${rowIndex}-${cellIndex}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        )
      }

      continue
    }

    if (line.startsWith("### ")) {
      flushPendingText()
      blocks.push(<h3 key={`heading-${blocks.length}`}>{line.slice(4)}</h3>)
      continue
    }

    if (line.startsWith("## ") || line.startsWith("# ")) {
      flushPendingText()
      const heading = line.startsWith("## ") ? line.slice(3) : line.slice(2)
      blocks.push(<h2 key={`heading-${blocks.length}`}>{heading}</h2>)
      continue
    }

    const unorderedItem = line.match(/^\s*[-*]\s+(.+)$/)
    const orderedItem = line.match(/^\s*\d+\.\s+(.+)$/)

    if (unorderedItem || orderedItem) {
      flushParagraph()

      const nextListType = unorderedItem ? "ul" : "ol"
      if (listType !== null && listType !== nextListType) {
        flushList()
      }

      listType = nextListType
      listItems.push((unorderedItem ?? orderedItem)![1])
      continue
    }

    flushList()
    paragraph.push(line.trim())
  }

  flushPendingText()

  if (isInsideCodeBlock) {
    flushCodeBlock()
  }

  return <>{blocks}</>
}
