import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import hljs from 'highlight.js'

const getAll = async () =>
  await fs.readdir(path.join(process.cwd(), 'contents')).then(
    async (d) =>
      await Promise.all(
        d.map(async (f) => ({
          slug: f.replace(/\.md$/, ''),
          ...(await fs
            .readFile(path.join(process.cwd(), 'contents', f), 'utf-8')
            .then(
              (raw) =>
                matter(raw).data as {
                  date: string
                  tags: string[]
                }
            )),
        }))
      ).then((p) => {
        return p.sort((x, y) =>
          Number(new Date(x.date)) > Number(new Date(y.date)) ? -1 : 1
        )
      })
  )

const getDetail = async (slug: string) =>
  await fs
    .readFile(path.join(process.cwd(), `contents/${slug}.md`), 'utf-8')
    .then((src) => matter(src))
    .then((p) => ({
      html: marked
        .setOptions({
          highlight: (c, l) => hljs.highlight(c, { language: l }).value,
        })
        .parse(p.content),
      ...p.data,
    }))

const getAllByTag = async (tag: string) =>
  await getAll().then((p) => p.filter((p) => p.tags.includes(tag)))

export { getAll, getDetail, getAllByTag }
