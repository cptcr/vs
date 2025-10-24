/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Image, { type StaticImageData } from "next/image"
import { cn } from "@/lib/utils"

type DocsScreenshotProps = {
  image: StaticImageData
  alt: string
  caption?: string
  priority?: boolean
  className?: string
}

export function DocsScreenshot({ image, alt, caption, priority, className }: DocsScreenshotProps) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border border-border/60 bg-muted/20", className)}>
      <Image
        src={image}
        alt={alt}
        className="w-full rounded-t-xl border-b border-border/50 bg-background object-cover"
        priority={priority}
      />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
