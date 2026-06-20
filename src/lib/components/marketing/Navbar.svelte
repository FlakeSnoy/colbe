<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { ChevronDown, Menu, X } from '@lucide/svelte';

	let mobileOpen = $state(false);
</script>

<header class="fixed top-0 inset-x-0 z-50 bg-neutral-950 border-b border-neutral-900">
	<nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">

		<a href="/" class="flex items-center gap-2 shrink-0">
			<img src="/favicon.svg" alt="Colbe" class="h-6 w-6" />
			<span class="text-white text-sm font-medium tracking-tight">Colbe</span>
		</a>

		<div class="hidden md:flex items-center gap-8">
			<a href="/about" class="text-sm text-neutral-500 hover:text-white transition-colors">About</a>
			<a href="/docs" class="text-sm text-neutral-500 hover:text-white transition-colors">Docs</a>
		</div>

		<div class="hidden md:flex items-center gap-4">
			<a href="/login" class="text-sm text-neutral-500 hover:text-white transition-colors">Log in</a>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="group inline-flex items-center gap-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-full transition-colors">
					Get started
					<ChevronDown size={12} strokeWidth={2} class="transition-transform duration-150 group-data-[state=open]:rotate-180" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content
					class="z-50 mt-2 w-40 rounded-xl border border-neutral-800 bg-neutral-950 p-1 shadow-xl"
					sideOffset={6}
					align="end"
				>
					<DropdownMenu.Item
						class="px-3 py-2 text-sm text-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors"
						onclick={() => window.location.href = '/register'}
					>
						Create account
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>

		<button
			class="md:hidden text-neutral-500 hover:text-white transition-colors"
			onclick={() => mobileOpen = !mobileOpen}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}<X size={18} />{:else}<Menu size={18} />{/if}
		</button>
	</nav>

	{#if mobileOpen}
		<div class="md:hidden border-t border-neutral-900 bg-neutral-950 px-6 py-4 flex flex-col gap-3">
			<a href="/about" onclick={() => mobileOpen = false} class="text-sm text-neutral-400 hover:text-white transition-colors">About</a>
			<a href="/docs" onclick={() => mobileOpen = false} class="text-sm text-neutral-400 hover:text-white transition-colors">Docs</a>
			<div class="pt-3 border-t border-neutral-900 flex flex-col gap-2">
				<a href="/login" onclick={() => mobileOpen = false} class="text-sm text-neutral-400 hover:text-white transition-colors">Log in</a>
				<a href="/register" onclick={() => mobileOpen = false} class="text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-center transition-colors">Create account</a>
			</div>
		</div>
	{/if}
</header>
<div class="h-14"></div>