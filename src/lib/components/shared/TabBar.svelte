<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Phone, Radio, Wrench, Settings } from '@lucide/svelte';
	import { Tooltip } from 'bits-ui';
	import { authClient } from '$lib/auth-client.js';

	type Tab = { href: string; label: string; icon: 'chat' | 'phone' | 'radio' | 'wrench' };

	const tabs: Tab[] = [
		{ href: '/home',    label: 'Chats',   icon: 'chat'   },
		{ href: '/calls',   label: 'Calls',   icon: 'phone'  },
		{ href: '/updates', label: 'Updates', icon: 'radio'  },
		{ href: '/tools',   label: 'Tools',   icon: 'wrench' }
	];

	let path = $derived($page.url.pathname);
	function active(href: string) { return path.startsWith(href); }

	async function signOut() {
		await authClient.signOut();
		goto('/login');
	}
</script>

<Tooltip.Provider delayDuration={300}>
	<nav class="flex h-full flex-col items-center py-3">

		<!-- Logo -->
		<a href="/home" class="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl hover:rounded-xl transition-all">
			<img src="/favicon.svg" alt="Colbe" class="h-8 w-8" />
		</a>

		<div class="my-2 h-px w-8 bg-neutral-800"></div>

		<!-- Nav tabs -->
		<div class="flex flex-1 flex-col items-center gap-1">
			{#each tabs as tab}
				<Tooltip.Root>
					<Tooltip.Trigger>
						<a
							href={tab.href}
							aria-label={tab.label}
							class="relative flex h-10 w-10 items-center justify-center rounded-2xl transition-all
								{active(tab.href)
									? 'rounded-xl bg-blue-600 text-white'
									: 'text-neutral-500 hover:rounded-xl hover:bg-neutral-800 hover:text-neutral-100'}"
						>
							{#if active(tab.href)}
								<span class="absolute -left-3 h-5 w-1 rounded-r bg-white"></span>
							{/if}

							{#if tab.icon === 'chat'}
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
									<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
									<circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
									<circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
								</svg>
							{:else if tab.icon === 'phone'}
								<Phone size={18} />
							{:else if tab.icon === 'radio'}
								<Radio size={18} />
							{:else}
								<Wrench size={18} />
							{/if}
						</a>
					</Tooltip.Trigger>
					<Tooltip.Content side="right" class="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-100 shadow-lg">
						{tab.label}
					</Tooltip.Content>
				</Tooltip.Root>
			{/each}
		</div>

		<!-- Bottom: settings + avatar -->
		<div class="flex flex-col items-center gap-2 pb-1">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<a
						href="/settings"
						aria-label="Settings"
						class="flex h-10 w-10 items-center justify-center rounded-2xl text-neutral-500 transition-all hover:rounded-xl hover:bg-neutral-800 hover:text-neutral-100
							{active('/settings') ? 'rounded-xl bg-neutral-800 text-neutral-100' : ''}"
					>
						<Settings size={18} />
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" class="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-100 shadow-lg">
					Settings
				</Tooltip.Content>
			</Tooltip.Root>

			<!-- Profile avatar -->
			<button
				onclick={signOut}
				aria-label="Account"
				class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white ring-2 ring-neutral-800 hover:ring-blue-500 transition-all"
			>
				A
			</button>
		</div>
	</nav>
</Tooltip.Provider>