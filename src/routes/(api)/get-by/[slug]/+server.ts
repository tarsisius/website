import type { RequestHandler } from './$types'
import fs from 'fs/promises'
import path from 'path'
import { error, json } from '@sveltejs/kit'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'

export const GET: RequestHandler = async ({ params }) => {
  return await fs
    .readFile(path.join(process.cwd(), `contents/${params.slug}.md`), 'utf-8')
    .then((src) => matter(src))
    .then((post) =>
      json({
        ...(post.data as {
          title: string
          date: string
          published: boolean
          tags: string[]
          thumbnail: string
        }),
        html: marked
          .setOptions({
            highlight: (c, l) => hljs.highlight(c, { language: l }).value,
          })
          .parse(post.content),
      })
    )
}
