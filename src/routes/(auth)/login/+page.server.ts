import { auth } from '$lib/auth.js';
import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types.js';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) redirect(302, '/home');
	return {};
};

export const actions: Actions = {
	default: async (event) => {
		const data     = await event.request.formData();
		const email    = data.get('email')?.toString();
		const phone    = data.get('phone')?.toString();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString() ?? '';

		let result: Response;

		if (username) {
			result = await auth.api.signInUsername({
				body: { username, password },
				asResponse: true,
			});
		} else {
			const identifier = email ?? (phone ? `${phone}@colbe.local` : '');
			result = await auth.api.signInEmail({
				body: { email: identifier, password },
				asResponse: true,
			});
		}

		if (!result.ok) {
			return fail(400, { error: 'Invalid credentials. Please try again.' });
		}

		for (const cookie of result.headers.getSetCookie?.() ?? []) {
			event.cookies.set(
				cookie.split('=')[0],
				cookie.split('=')[1]?.split(';')[0] ?? '',
				{ path: '/', httpOnly: true, sameSite: 'lax', secure: true }
			);
		}

		redirect(302, '/home');
	},
};