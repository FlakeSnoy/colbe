import { db } from '$lib/server/db/index.js';
import { conversation, conversationMember, message, profile } from '$lib/server/db/schema.js';
import { eq, desc, and, ne } from 'drizzle-orm';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ locals }) => {
	const userId = locals.user?.id;
	if (!userId) return { conversations: [] };

	const memberships = await db
		.select({ conversationId: conversationMember.conversationId })
		.from(conversationMember)
		.where(eq(conversationMember.userId, userId));

	const conversationIds = memberships.map((m) => m.conversationId);
	if (conversationIds.length === 0) return { conversations: [] };

	const results = await Promise.all(
		conversationIds.map(async (convId) => {
			const [conv] = await db
				.select()
				.from(conversation)
				.where(eq(conversation.id, convId))
				.limit(1);

			const [lastMessage] = await db
				.select()
				.from(message)
				.where(eq(message.conversationId, convId))
				.orderBy(desc(message.createdAt))
				.limit(1);

			let otherProfile = null;
			if (conv.type === 'dm') {
				const [other] = await db
					.select({ userId: conversationMember.userId })
					.from(conversationMember)
					.where(
						and(
							eq(conversationMember.conversationId, convId),
							ne(conversationMember.userId, userId)
						)
					)
					.limit(1);

				if (other) {
					const [p] = await db
						.select()
						.from(profile)
						.where(eq(profile.userId, other.userId))
						.limit(1);
					otherProfile = p ?? null;
				}
			}

			return { conv, lastMessage: lastMessage ?? null, otherProfile };
		})
	);

	results.sort((a, b) => {
		const aTime = a.lastMessage?.createdAt?.getTime() ?? a.conv.updatedAt.getTime();
		const bTime = b.lastMessage?.createdAt?.getTime() ?? b.conv.updatedAt.getTime();
		return bTime - aTime;
	});

	return { conversations: results };
};