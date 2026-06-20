<script lang="ts">
	import { NavigationMenu, Dialog } from 'bits-ui';
	import { Button } from '$lib/components/ui/button/index.js';

	let mobileOpen = $state(false);

	const links = [
		{ label: 'Features', href: '#features' },
		{ label: 'How it works', href: '#how-it-works' },
		{ label: 'Pricing', href: '#pricing' },
	];
</script>

<header class="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
	<nav class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">

		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 text-white font-semibold tracking-tight text-base">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="3" y="3" width="8" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
				<rect x="13" y="10" width="8" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
				<path d="M3 9h8M13 16h8" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
			</svg>
			Colbe
		</a>

		<!-- Desktop nav -->
		<NavigationMenu.Root class="hidden md:flex">
			<NavigationMenu.List class="flex items-center gap-1">
				{#each links as link}
					<NavigationMenu.Item>
						<NavigationMenu.Link
							href={link.href}
							class="px-3 py-1.5 text-sm text-neutral-400 rounded-md transition-colors hover:text-white hover:bg-neutral-800"
						>
							{link.label}
						</NavigationMenu.Link>
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>

		<!-- Desktop CTA -->
		<div class="hidden md:flex items-center gap-2">
			<Button variant="ghost" href="/login" class="text-sm text-neutral-400 hover:text-white">
				Log in
			</Button>
			<Button href="/register" class="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4">
				Get started
			</Button>
		</div>

		<!-- Mobile: hamburger via Bits UI Dialog -->
		<Dialog.Root bind:open={mobileOpen}>
			<Dialog.Trigger class="md:hidden text-neutral-400 hover:text-white transition-colors">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
				</svg>
				<span class="sr-only">Open menu</span>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
				<Dialog.Content
					class="fixed right-0 top-0 z-50 h-full w-72 bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col gap-6 shadow-xl"
				>
					<div class="flex items-center justify-between">
						<a href="/" onclick={() => mobileOpen = false} class="flex items-center gap-2 text-white font-semibold text-base">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="3" y="3" width="8" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
								<rect x="13" y="10" width="8" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
								<path d="M3 9h8M13 16h8" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
							</svg>
							Colbe
						</a>
						<Dialog.Close class="text-neutral-500 hover:text-white transition-colors">
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
							</svg>
							<span class="sr-only">Close menu</span>
						</Dialog.Close>
					</div>

					<nav class="flex flex-col gap-1">
						{#each links as link}
							<a
								href={link.href}
								onclick={() => mobileOpen = false}
								class="px-3 py-2 text-sm text-neutral-400 rounded-md hover:text-white hover:bg-neutral-800 transition-colors"
							>
								{link.label}
							</a>
						{/each}
					</nav>

					<div class="flex flex-col gap-2 mt-auto">
						<Button variant="ghost" href="/login" class="w-full justify-start text-neutral-400 hover:text-white">
							Log in
						</Button>
						<Button href="/register" class="w-full bg-blue-600 hover:bg-blue-500 text-white">
							Get started
						</Button>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>

	</nav>
</header>

<div class="h-14"></div>