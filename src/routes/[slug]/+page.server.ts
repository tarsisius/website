import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'

import { markdownToHtml } from '$lib/utils/md'

export const load: PageServerLoad = async ({ params }) => ({
  post: await fs
    .readFile(path.join(process.cwd(), `contents/${params.slug}.md`), 'utf-8')
    .then((src) => matter(src))
    .then((post) => ({
      ...(post.data as {
        title: string
        date: string
        published: boolean
        tags: string[]
        thumbnail: string
      }),
      ...markdownToHtml(post.content),
    }))
    .catch(() => {
      throw error(404)
    }),
})
