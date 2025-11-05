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
export function parseTextWithLinks(text?: string): ReactNode[] {
  if (!text) return []

  const nodes: ReactNode[] = []

  // This combined regex matches either:
  //  - markdown links: [label](https://...)
  //  - plain URLs: https://....
  // It stops plain URL matches at whitespace or a closing parenthesis so trailing punctuation isn't swallowed.
  const regex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^)\s]+)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  const trailingPunct = /[.,!?;:]+$/

  while ((match = regex.exec(text)) !== null) {
    const matchStart = match.index
    // push text before match
    if (matchStart > lastIndex) {
      nodes.push(text.slice(lastIndex, matchStart))
    }

    if (match[1] && match[2]) {
      // markdown link: label in match[1], url in match[2]
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
      // plain url - we trim trailing punctuation from the matched URL
      let href = match[3]
      let trailing = ""
      const punctMatch = href.match(trailingPunct)
      if (punctMatch) {
        trailing = punctMatch[0]
        href = href.replace(trailingPunct, "")
      }

      nodes.push(
        React.createElement(
          "a",
          { key: nodes.length, href, target: "_blank", rel: "noopener noreferrer", className: "underline text-primary" },
          href,
        ),
      )

      if (trailing) {
        nodes.push(trailing)
      }
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}