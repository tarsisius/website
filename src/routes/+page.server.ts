import type { PageServerLoad } from './$types'
import fs from 'fs/promises'
import path from 'path'
import { markdownToData } from '$lib/utils/md'

export const load: PageServerLoad = async () => {
  return {
    posts: await fs
      .readdir(path.join(process.cwd(), 'contents'))
      .then(async (d) => {
        return await Promise.all(
          d.map(async (f) => {
            return {
              slug: f.replace(/\.md$/, ''),
              ...(await fs
                .readFile(path.join(process.cwd(), 'contents', f), 'utf-8')
                .then((raw) => markdownToData(raw).data)),
            }
          })
        ).then((p) => {
          return p.sort((x, y) =>
            Number(new Date(x.date)) > Number(new Date(y.date)) ? -1 : 1
          )
        })
      }),
  }
}
