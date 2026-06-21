import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { username } from 'better-auth/plugins';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db/index.js';
import * as schema from '$lib/server/db/schema.js';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite',
		schema: {
			user:         schema.user,
			session:      schema.session,
			account:      schema.account,
			verification: schema.verification,
		},
	}),
	secret: env.BETTER_AUTH_SECRET,
	baseURL: env.ORIGIN,
	emailAndPassword: {
		enabled: true,
		minPasswordLength: 8,
	},
	plugins: [
		username(),
	],
	session: {
		expiresIn: 60 * 60 * 24 * 30,
		updateAge:  60 * 60 * 24,
		cookieCache: {
			enabled: true,
			maxAge: 60 * 5,
		},
	},
	trustedOrigins: [env.ORIGIN ?? ''],
});