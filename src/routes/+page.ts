import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/get-all')
  if (res.ok) {
    return {
      posts: await res.json(),
    }
  }
}
