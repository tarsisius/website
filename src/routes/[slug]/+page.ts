import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch('/get-by/' + params.slug)
  if (res.ok) {
    return {
      post: (await res.json()) as {
        title: string
        date: string
        tags: string[]
        html: string
      },
    }
  }
  throw error(404, 'Not found')
}
