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

<nav class="flex h-full flex-col items-center gap-1 py-2">
	<!-- Logo -->
	<div class="mb-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-lg transition-all hover:rounded-xl">
		C
	</div>

	<div class="my-1 h-px w-8 bg-border"></div>

	<!-- Tabs -->
	<div class="flex flex-1 flex-col items-center gap-1">
		{#each tabs as tab}
			<Tooltip.Root>
				<Tooltip.Trigger>
					<a
						href={tab.href}
						aria-label={tab.label}
						class="relative flex h-10 w-10 items-center justify-center rounded-2xl transition-all
							{active(tab.href)
								? 'rounded-xl bg-primary text-primary-foreground'
								: 'bg-muted text-muted-foreground hover:rounded-xl hover:bg-primary hover:text-primary-foreground'}"
					>
						{#if active(tab.href)}
							<span class="absolute -left-2 h-5 w-1 rounded-r bg-foreground"></span>
						{/if}

						{#if tab.icon === 'chat'}
							<!-- Custom chat SVG -->
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
				<Tooltip.Content side="right" class="rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md">
					{tab.label}
				</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</div>

	<!-- Bottom -->
	<div class="flex flex-col items-center gap-1">
		<a
			href="/settings"
			aria-label="Settings"
			class="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-all hover:rounded-xl hover:bg-primary hover:text-primary-foreground
				{active('/settings') ? 'rounded-xl bg-primary text-primary-foreground' : ''}"
		>
			<Settings size={18} />
		</a>

		<button
			onclick={signOut}
			aria-label="Sign out"
			class="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-all hover:rounded-xl hover:bg-destructive hover:text-destructive-foreground"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
				<polyline points="16 17 21 12 16 7"/>
				<line x1="21" y1="12" x2="9" y2="12"/>
			</svg>
		</button>
	</div>
</nav>