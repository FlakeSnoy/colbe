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

<header class="fixed top-0 inset-x-0 z-50">
	<!-- Glassmorphism bar -->
	<div class="border-b border-white/6 bg-neutral-950/75 backdrop-blur-xl backdrop-saturate-150">
		<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">

			<!-- Logo -->
			<a href="/" class="flex items-center gap-2.5 shrink-0">
				<img src="/favicon.svg" alt="Colbe" class="h-7 w-7" />
				<span class="text-white font-semibold text-[15px] tracking-[-0.01em]">Colbe</span>
			</a>

			<!-- Desktop nav — centered -->
			<NavigationMenu.Root class="hidden md:flex absolute left-1/2 -translate-x-1/2">
				<NavigationMenu.List class="flex items-center gap-0.5">
					<NavigationMenu.Item>
						<NavigationMenu.Link
							href="/about"
							class="flex items-center gap-1.5 px-3.5 py-2 text-[13px] text-neutral-400 rounded-full transition-all duration-150 hover:text-white hover:bg-white/[0.07]"
						>
							<Info size={13} strokeWidth={1.75} />
							About
						</NavigationMenu.Link>
					</NavigationMenu.Item>
					<NavigationMenu.Item>
						<NavigationMenu.Link
							href="/docs"
							class="flex items-center gap-1.5 px-3.5 py-2 text-[13px] text-neutral-400 rounded-full transition-all duration-150 hover:text-white hover:bg-white/[0.07]"
						>
							<BookOpen size={13} strokeWidth={1.75} />
							Docs
						</NavigationMenu.Link>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>

			<!-- Desktop CTA -->
			<div class="hidden md:flex items-center gap-2 shrink-0">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="group flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-full transition-all duration-150 shadow-lg shadow-blue-600/20"
					>
						Get started
						<ChevronDown
							size={13}
							strokeWidth={2}
							class="transition-transform duration-200 group-data-[state=open]:rotate-180"
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						class="z-50 mt-2 w-48 rounded-2xl border border-white/8eutral-900/95 backdrop-blur-xl p-1.5 shadow-2xl shadow-black/40"
						sideOffset={8}
						align="end"
					>
						<DropdownMenu.Item
							class="flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-neutral-300 rounded-xl cursor-pointer hover:bg-white/[0.07] hover:text-white transition-colors"
							onclick={() => window.location.href = '/register'}
						>
							<span class="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
								<UserPlus size={12} strokeWidth={2} />
							</span>
							Create account
						</DropdownMenu.Item>
						<DropdownMenu.Item
							class="flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-neutral-300 rounded-xl cursor-pointer hover:bg-white/[0.07] hover:text-white transition-colors"
							onclick={() => window.location.href = '/login'}
						>
							<span class="flex h-6 w-6 items-center justify-center rounded-lg bg-neutral-500/15 text-neutral-400">
								<LogIn size={12} strokeWidth={2} />
							</span>
							Log in
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>

			<!-- Mobile hamburger -->
			<button
				class="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 hover:text-white hover:bg-white/[0.07] transition-all"
				onclick={() => mobileOpen = !mobileOpen}
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X size={18} strokeWidth={1.75} />
				{:else}
					<Menu size={18} strokeWidth={1.75} />
				{/if}
			</button>

		</nav>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden border-b border-white/6 bg-neutral-950/95 backdrop-blur-xl px-5 py-3 flex flex-col gap-0.5">
			<a
				href="/about"
				onclick={() => mobileOpen = false}
				class="flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-neutral-400 rounded-xl hover:text-white hover:bg-white/[0.07] transition-colors"
			>
				<Info size={14} strokeWidth={1.75} />
				About
			</a>
			<a
				href="/docs"
				onclick={() => mobileOpen = false}
				class="flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-neutral-400 rounded-xl hover:text-white hover:bg-white/[0.07] transition-colors"
			>
				<BookOpen size={14} strokeWidth={1.75} />
				Docs
			</a>
			<div class="mt-2 pt-2 border-t border-white/6 flex flex-col gap-1.5">
				<a
					href="/register"
					onclick={() => mobileOpen = false}
					class="flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors shadow-lg shadow-blue-600/20"
				>
					<UserPlus size={14} strokeWidth={1.75} />
					Create account
				</a>
				<a
					href="/login"
					onclick={() => mobileOpen = false}
					class="flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-neutral-400 rounded-xl hover:text-white hover:bg-white/[0.07] transition-colors"
				>
					<LogIn size={14} strokeWidth={1.75} />
					Log in
				</a>
			</div>
		</div>
	{/if}
</header>

<div class="h-16"></div>