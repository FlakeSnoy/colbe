<script lang="ts">
	import { NavigationMenu, DropdownMenu } from 'bits-ui';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Info from '@lucide/svelte/icons/info';
	import LogIn from '@lucide/svelte/icons/log-in';
	import Menu from '@lucide/svelte/icons/menu';
	import UserPlus from '@lucide/svelte/icons/user-plus';
	import X from '@lucide/svelte/icons/x';

	let mobileOpen = $state(false);
</script>

<header class="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
	<nav class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">

		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 text-white font-semibold tracking-tight text-base">
			<svg width="26" height="26" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="4" y="10" width="28" height="52" rx="6" stroke="white" stroke-width="4"/>
				<rect x="48" y="10" width="28" height="52" rx="6" stroke="white" stroke-width="4"/>
				<rect x="4" y="58" width="28" height="12" rx="4" stroke="#3b82f6" stroke-width="3"/>
				<line x1="32" y1="36" x2="48" y2="36" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
			</svg>
			Colbe
		</a>

		<!-- Desktop nav -->
		<NavigationMenu.Root class="hidden md:flex">
			<NavigationMenu.List class="flex items-center gap-1">

				<NavigationMenu.Item>
					<NavigationMenu.Link
						href="/about"
						class="flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-400 rounded-full transition-colors hover:text-white hover:bg-neutral-800"
					>
						<Info size={14} />
						About
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						href="/docs"
						class="flex items-center gap-1.5 px-3 py-1.5 text-sm text-neutral-400 rounded-full transition-colors hover:text-white hover:bg-neutral-800"
					>
						<BookOpen size={14} />
						Docs
					</NavigationMenu.Link>
				</NavigationMenu.Item>

			</NavigationMenu.List>
		</NavigationMenu.Root>

		<!-- Desktop CTA -->
		<div class="hidden md:flex items-center gap-2">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger
					class="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors"
				>
					Get started
					<ChevronDown size={14} class="transition-transform duration-200 in-data-[state=open]:rotate-180" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content
					class="z-50 mt-2 w-44 rounded-xl border border-neutral-800 bg-neutral-900 p-1 shadow-xl"
					sideOffset={6}
				>
					<DropdownMenu.Item
						class="flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors"
						onclick={() => window.location.href = '/register'}
					>
						<UserPlus size={14} />
						Register
					</DropdownMenu.Item>
					<DropdownMenu.Item
						class="flex items-center gap-2 px-3 py-2 text-sm text-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors"
						onclick={() => window.location.href = '/login'}
					>
						<LogIn size={14} />
						Log in
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="md:hidden text-neutral-400 hover:text-white transition-colors"
			onclick={() => mobileOpen = !mobileOpen}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>

	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 py-4 flex flex-col gap-1">
			<a
				href="/about"
				onclick={() => mobileOpen = false}
				class="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 rounded-full hover:text-white hover:bg-neutral-800 transition-colors"
			>
				<Info size={14} />
				About
			</a>
			<a
				href="/docs"
				onclick={() => mobileOpen = false}
				class="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 rounded-full hover:text-white hover:bg-neutral-800 transition-colors"
			>
				<BookOpen size={14} />
				Docs
			</a>
			<div class="mt-2 pt-2 border-t border-neutral-800 flex flex-col gap-2">
				<a
					href="/register"
					onclick={() => mobileOpen = false}
					class="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 rounded-full hover:text-white hover:bg-neutral-800 transition-colors"
				>
					<UserPlus size={14} />
					Register
				</a>
				<a
					href="/login"
					onclick={() => mobileOpen = false}
					class="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors"
				>
					<LogIn size={14} />
					Log in
				</a>
			</div>
		</div>
	{/if}
</header>

<div class="h-14"></div>