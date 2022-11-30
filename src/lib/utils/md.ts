import matter from 'gray-matter'
import hljs from 'highlight.js'
import { marked } from 'marked'

export const markdownToHtml = (content: string) => {
  return {
    html: marked
      .setOptions({
        highlight: (c, l) => hljs.highlight(c, { language: l }).value,
      })
      .parse(content),
  }
}
export const markdownToData = (raw: string) => {
  return {
    data: matter(raw).data as {
      title: string
      date: string
      published: boolean
      tags: string[]
      thumbnail: string
    },
  }
}
