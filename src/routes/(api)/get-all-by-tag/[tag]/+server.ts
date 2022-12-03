import type { RequestHandler } from './$types'
import { json } from '@sveltejs/kit'
import { getAllByTag } from '$lib/md'

export const GET: RequestHandler = async ({ params }) =>
  json(await getAllByTag(params.tag))
