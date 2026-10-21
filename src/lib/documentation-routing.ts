export function getDocumentIdFromPath(pathname: string, validIds: string[]): string {
  const slug = pathname.replace(/\/$/, "").split("/").pop()
  return slug && validIds.includes(slug) ? slug : "overview"
}
