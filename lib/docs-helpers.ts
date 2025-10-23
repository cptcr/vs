import type { DocsNavChild, DocsNavItem } from "@/config/docs-navigation"
import { slugify } from "@/lib/slugify"

export function getChildHref(item: DocsNavItem, child: DocsNavChild) {
  if (child.href) return child.href
  const hash = slugify(child.title)
  return `${item.href}#${hash}`
}
