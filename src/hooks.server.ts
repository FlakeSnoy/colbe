import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';

const handleBetterAuth: Handle = async ({ event, resolve }) => {
	if (!event.url.pathname.startsWith('/api/auth')) {
		return resolve(event);
	}

	const [{ auth }, { svelteKitHandler }] = await Promise.all([
		import('$lib/server/auth.js'),
		import('better-auth/svelte-kit')
	]);

	if (!auth) {
		return resolve(event);
	}

	const session = await auth.api.getSession({ headers: event.request.headers });

	if (session) {
		event.locals.session = session.session;
		event.locals.user = session.user;
	}

	return svelteKitHandler({ event, resolve, auth, building });
};

export const handle: Handle = handleBetterAuth;
