<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	let menuOpen = $state(false);
</script>

<div class="navbar bg-base-100 border-b border-base-200 px-4 lg:px-8 sticky top-0 z-50">
	<div class="navbar-start">
		<a href="/" class="flex items-center gap-2">
			<img src="/favicon.svg" alt="Colbe" class="w-7 h-7" />
			<span class="font-bold text-lg tracking-tight text-primary">Colbe</span>
		</a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-1 px-0">
			<li><a href="#features" class="text-sm font-medium">Features</a></li>
			<li><a href="#pricing" class="text-sm font-medium">Pricing</a></li>
			<li><a href="#updates" class="text-sm font-medium">Updates</a></li>
		</ul>
	</div>

	<div class="navbar-end gap-2">
		<Button href="/login" variant="ghost" size="sm" class="hidden lg:flex">Sign in</Button>
		<Button href="/register" size="sm" class="hidden lg:flex">Get started</Button>

		<button
			class="btn btn-ghost btn-sm lg:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			{#if menuOpen}<X size={20} />{:else}<Menu size={20} />{/if}
		</button>
	</div>
</div>

{#if menuOpen}
	<div class="lg:hidden bg-base-100 border-b border-base-200 px-4 pb-4 flex flex-col gap-2">
		<a href="#features" class="btn btn-ghost btn-sm justify-start" onclick={() => (menuOpen = false)}>Features</a>
		<a href="#pricing" class="btn btn-ghost btn-sm justify-start" onclick={() => (menuOpen = false)}>Pricing</a>
		<a href="#updates" class="btn btn-ghost btn-sm justify-start" onclick={() => (menuOpen = false)}>Updates</a>
		<div class="divider my-1"></div>
		<Button href="/login" variant="ghost" size="sm" class="justify-start">Sign in</Button>
		<Button href="/register" size="sm">Get started</Button>
	</div>
{/if}