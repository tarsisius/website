import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch('/get-all-by-tag/' + params.tag)
  if (res.ok) {
    return {
      posts: await res.json(),
      tag: params.tag
    }
  }
}
