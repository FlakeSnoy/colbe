import { auth } from '$lib/auth.js';
import type { RequestEvent } from '@sveltejs/kit';

export const GET = (event: RequestEvent) => auth.handler(event.request);
export const POST = (event: RequestEvent) => auth.handler(event.request);