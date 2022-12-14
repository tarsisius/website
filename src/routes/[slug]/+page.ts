import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch('/get-detail/' + params.slug)
  if (res.ok) {
    return {
      post: await res.json(),
    }
  }
  throw error(404)
}
