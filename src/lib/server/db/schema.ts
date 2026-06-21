import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export * from './auth.schema.js';

export const profile = sqliteTable('profile', {
	id:          text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	userId:      text('user_id').notNull().unique(),
	displayName: text('display_name'),
	bio:         text('bio'),
	avatar:      text('avatar'),
	banner:      text('banner'),
	lunes:       integer('lunes').notNull().default(0),
	isVerified:  integer('is_verified', { mode: 'boolean' }).notNull().default(false),
	createdAt:   integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
	updatedAt:   integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const conversation = sqliteTable('conversation', {
	id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	type:      text('type', { enum: ['dm', 'group'] }).notNull().default('dm'),
	name:      text('name'),
	avatar:    text('avatar'),
	createdBy: text('created_by'),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
	updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const conversationMember = sqliteTable('conversation_member', {
	id:             text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	conversationId: text('conversation_id').notNull(),
	userId:         text('user_id').notNull(),
	role:           text('role', { enum: ['admin', 'member'] }).notNull().default('member'),
	joinedAt:       integer('joined_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const message = sqliteTable('message', {
	id:             text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	conversationId: text('conversation_id').notNull(),
	senderId:       text('sender_id').notNull(),
	content:        text('content'),
	type:           text('type', { enum: ['text', 'image', 'video', 'file', 'audio'] }).notNull().default('text'),
	mediaUrl:       text('media_url'),
	replyToId:      text('reply_to_id'),
	isDeleted:      integer('is_deleted', { mode: 'boolean' }).notNull().default(false),
	createdAt:      integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
	updatedAt:      integer('updated_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const call = sqliteTable('call', {
	id:             text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	conversationId: text('conversation_id'),
	callerId:       text('caller_id').notNull(),
	type:           text('type', { enum: ['audio', 'video'] }).notNull().default('audio'),
	status:         text('status', { enum: ['missed', 'answered', 'declined', 'scheduled'] }).notNull().default('missed'),
	scheduledAt:    integer('scheduled_at', { mode: 'timestamp' }),
	startedAt:      integer('started_at', { mode: 'timestamp' }),
	endedAt:        integer('ended_at', { mode: 'timestamp' }),
	createdAt:      integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const callParticipant = sqliteTable('call_participant', {
	id:       text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	callId:   text('call_id').notNull(),
	userId:   text('user_id').notNull(),
	joinedAt: integer('joined_at', { mode: 'timestamp' }),
	leftAt:   integer('left_at', { mode: 'timestamp' }),
});

export const status = sqliteTable('status', {
	id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	userId:    text('user_id').notNull(),
	mediaUrl:  text('media_url').notNull(),
	mediaType: text('media_type', { enum: ['image', 'video'] }).notNull().default('image'),
	caption:   text('caption'),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const channel = sqliteTable('channel', {
	id:          text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	ownerId:     text('owner_id').notNull(),
	name:        text('name').notNull(),
	description: text('description'),
	avatar:      text('avatar'),
	isPublic:    integer('is_public', { mode: 'boolean' }).notNull().default(true),
	createdAt:   integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const channelSubscriber = sqliteTable('channel_subscriber', {
	id:           text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	channelId:    text('channel_id').notNull(),
	userId:       text('user_id').notNull(),
	subscribedAt: integer('subscribed_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});

export const contact = sqliteTable('contact', {
	id:        text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	userId:    text('user_id').notNull(),
	contactId: text('contact_id').notNull(),
	status:    text('status', { enum: ['pending', 'accepted', 'blocked'] }).notNull().default('pending'),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(sql`(unixepoch())`),
});