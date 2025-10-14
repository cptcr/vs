import { buildMetadata } from "@/lib/seo"

// Root-level metadata for the entire site. Individual pages export their own
// metadata where necessary which will be merged with these defaults.
export const metadata = buildMetadata()