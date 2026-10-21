import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"

type DocumentationCodeProps = {
  title?: string
  children: string
}

export function DocumentationCode({ title, children }: DocumentationCodeProps) {
  return (
    <CodeBlock className="my-4">
      {title ? (
        <CodeBlockHeader>
          <CodeBlockTitle>{title}</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={children} />
          </CodeBlockActions>
        </CodeBlockHeader>
      ) : null}
      <CodeBlockContent>{children}</CodeBlockContent>
    </CodeBlock>
  )
}
