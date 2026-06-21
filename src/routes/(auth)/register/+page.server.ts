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

		const identifier = email ?? phone ?? username ?? '';
		const isEmail = !!email;

		const result = await auth.api.signUpEmail({
			body: {
				email: isEmail ? identifier : `${identifier}@colbe.local`,
				password,
				name: username ?? identifier.split('@')[0],
				username: username,
			},
			asResponse: true,
		});

		if (!result.ok) {
			const body = await result.json().catch(() => ({}));
			return fail(400, { error: body?.message ?? 'Registration failed. Please try again.' });
		}

		const headers = new Headers();
		result.headers.forEach((value, key) => {
			if (key.toLowerCase() === 'set-cookie') headers.append('set-cookie', value);
		});

		redirect(302, '/home');
	},
};