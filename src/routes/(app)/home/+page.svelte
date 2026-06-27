<script lang="ts">
	import { Search, PenSquare, MessageSquareOff } from '@lucide/svelte';

	let { data } = $props();

	type Filter = 'all' | 'unread' | 'groups';
	let filter = $state<Filter>('all');

	const chips: { key: Filter; label: string }[] = [
		{ key: 'all',    label: 'All'    },
		{ key: 'unread', label: 'Unread' },
		{ key: 'groups', label: 'Groups' }
	];

	let list = $derived(
		filter === 'groups'
			? data.conversations.filter((c: any) => c.conv.type === 'group')
			: data.conversations
	);

	function displayName(item: any) {
		if (item.conv.type === 'group') return item.conv.name ?? 'Group';
		return item.otherProfile?.displayName ?? item.otherProfile?.username ?? 'Unknown';
	}

	function initials(name: string) {
		return name.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase();
	}

	function timeLabel(date: Date | null) {
		if (!date) return '';
		const diff = Date.now() - date.getTime();
		const day = 86400000;
		if (diff < day) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		if (diff < 2 * day) return 'Yesterday';
		return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
	}

	function previewText(item: any) {
		const msg = item.lastMessage;
		if (!msg) return 'No messages yet';
		if (msg.isDeleted) return 'Message deleted';
		if (msg.type === 'image') return '📷 Photo';
		if (msg.type === 'video') return '🎥 Video';
		if (msg.type === 'audio') return '🎵 Audio';
		if (msg.type === 'file') return '📎 File';
		return msg.content ?? '';
	}
</script>

<div class="flex h-full flex-col overflow-hidden">
	<!-- Header -->
	<div class="flex items-center justify-between px-4 pt-4 pb-2">
		<span class="text-lg font-semibold text-neutral-100">Chats</span>
		<button
			class="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
			aria-label="New chat"
		>
			<PenSquare size={15} />
		</button>
	</div>

	<!-- Search -->
	<div class="px-3 pb-2">
		<div class="flex h-8 items-center gap-2 rounded-lg bg-neutral-800 px-3">
			<Search size={13} class="shrink-0 text-neutral-500" />
			<input
				type="text"
				placeholder="Search"
				class="flex-1 bg-transparent text-sm text-neutral-100 outline-none placeholder:text-neutral-500"
			/>
		</div>
	</div>

	<!-- Filter chips -->
	<div class="flex gap-1.5 px-3 pb-3">
		{#each chips as chip}
			<button
				onclick={() => (filter = chip.key)}
				class="rounded-full px-3 py-1 text-xs font-medium transition-colors
					{filter === chip.key
						? 'bg-blue-600 text-white'
						: 'bg-neutral-800 text-neutral-500 hover:text-neutral-100'}"
			>
				{chip.label}
			</button>
		{/each}
	</div>

	<!-- List or empty -->
	<div class="flex-1 overflow-y-auto">
		{#if list.length === 0}
			<div class="flex h-full flex-col items-center justify-center gap-3 text-center">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800">
					<MessageSquareOff size={18} class="text-neutral-500" />
				</div>
				<p class="text-sm text-neutral-500">No chats yet.</p>
			</div>
		{:else}
			{#each list as item (item.conv.id)}
				{@const name = displayName(item)}
				<a
					href="/home/{item.conv.id}"
					class="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-neutral-800"
				>
					<div class="relative shrink-0">
						{#if item.otherProfile?.avatar ?? item.conv.avatar}
							<img
								src={item.otherProfile?.avatar ?? item.conv.avatar}
								alt={name}
								class="h-10 w-10 rounded-full object-cover"
							/>
						{:else}
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-sm font-semibold text-blue-400">
								{initials(name)}
							</div>
						{/if}
					</div>

					<div class="flex min-w-0 flex-1 flex-col gap-0.5">
						<div class="flex items-center justify-between">
							<span class="truncate text-sm font-medium text-neutral-100">{name}</span>
							<span class="ml-2 shrink-0 text-[11px] text-neutral-500">
								{timeLabel(item.lastMessage?.createdAt ?? null)}
							</span>
						</div>
						<span class="truncate text-xs text-neutral-500">{previewText(item)}</span>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</div>