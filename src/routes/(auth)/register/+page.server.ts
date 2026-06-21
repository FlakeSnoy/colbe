import { auth } from '$lib/auth.js';
import { db } from '$lib/server/db/index.js';
import { profile } from '$lib/server/db/schema.js';
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

		if (!password || password.length < 8) {
			return fail(400, { error: 'Password must be at least 8 characters.' });
		}

		if (!email && !phone && !username) {
			return fail(400, { error: 'Please provide an email, phone, or username.' });
		}

		const authEmail = email
			? email
			: phone
				? `${phone}@colbe.local`
				: `${username}@colbe.local`;

		const name = username ?? (email ? email.split('@')[0] : phone!);

		const result = await auth.api.signUpEmail({
			body: { email: authEmail, password, name, username },
			asResponse: true,
		});

		if (!result.ok) {
			const body = await result.json().catch(() => ({}));
			return fail(400, { error: body?.message ?? 'Registration failed. Please try again.' });
		}

		const responseData = await result.clone().json().catch(() => null);
		const userId = responseData?.user?.id;

		if (userId) {
			await db.insert(profile).values({
				userId,
				username:    username ?? null,
				phone:       phone ?? null,
				displayName: name,
				lunes:       0,
				isVerified:  false,
			}).onConflictDoNothing();
		}

		// Forward session cookies so the browser gets the session
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