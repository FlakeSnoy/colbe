import { auth } from '$lib/auth.js';
import type { RequestHandler } from './$types.js';

const handler: RequestHandler = (event) => auth.handler(event.request);

export const GET = handler;
export const POST = handler;