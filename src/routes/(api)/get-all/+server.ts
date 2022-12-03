import type { RequestHandler } from './$types'
import { json } from '@sveltejs/kit'
import { getAll } from '$lib/md'

export const GET: RequestHandler = async () => json(await getAll())
