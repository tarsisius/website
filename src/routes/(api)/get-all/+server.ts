import type { RequestHandler } from './$types'
import fs from 'fs/promises'
import path from 'path'
import { json } from '@sveltejs/kit'
import matter from 'gray-matter'

export const GET: RequestHandler = async () => {
  return await fs
    .readdir(path.join(process.cwd(), 'contents'))
    .then(async (d) =>
      json(
        await Promise.all(
          d.map(async (f) => ({
            slug: f.replace(/\.md$/, ''),
            ...(await fs
              .readFile(path.join(process.cwd(), 'contents', f), 'utf-8')
              .then((raw) => matter(raw).data as { date: string })),
          }))
        ).then((p) => {
          return p.sort((x, y) =>
            Number(new Date(x.date)) > Number(new Date(y.date)) ? -1 : 1
          )
        })
      )
    )
}
