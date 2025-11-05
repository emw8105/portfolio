import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from "react"
import type { ReactNode } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parse a plain string and convert any URLs or Markdown-style links into React nodes.
 *
 * Supported patterns:
 * - Markdown links: [label](https://example.com)
 * - Plain URLs: https://example.com
 *
 * Returns an array of ReactNode so it can be rendered inline in JSX.
 */
export function parseTextWithLinks(text: string): ReactNode[] {
  if (!text) return []

  const nodes: ReactNode[] = []
  // Matches either a markdown link [label](url) in group 1/2, or a plain url in group 3
  const regex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[\w\-./?=&%#:+,;~]+)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    const matchStart = match.index
    // push text before match
    if (matchStart > lastIndex) {
      nodes.push(text.slice(lastIndex, matchStart))
    }

    if (match[1] && match[2]) {
      // markdown link
      const label = match[1]
      const href = match[2]
      nodes.push(
        React.createElement(
          "a",
          { key: nodes.length, href, target: "_blank", rel: "noopener noreferrer", className: "underline text-primary" },
          label,
        ),
      )
    } else if (match[3]) {
      // plain url
      const href = match[3]
      nodes.push(
        React.createElement(
          "a",
          { key: nodes.length, href, target: "_blank", rel: "noopener noreferrer", className: "underline text-primary" },
          href,
        ),
      )
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}