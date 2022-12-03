import type { RequestHandler } from './$types'
import { json } from '@sveltejs/kit'
import { getDetail } from '$lib/md'

export const GET: RequestHandler = async ({ params }) =>
  json(await getDetail(params.slug))
