<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		rail,
		panel,
		children
	}: {
		rail?: Snippet;
		panel?: Snippet;
		children: Snippet;
	} = $props();
</script>

<div class="flex h-dvh w-screen overflow-hidden bg-neutral-950 text-neutral-100">
	<!-- Icon rail -->
	<aside class="flex w-[72px] min-w-[72px] flex-col items-center border-r border-neutral-800 bg-neutral-950 py-2">
		{#if rail}{@render rail()}{/if}
	</aside>

	<!-- Panel -->
	<aside class="flex w-[300px] min-w-[240px] flex-col border-r border-neutral-800 bg-neutral-900">
		{#if panel}{@render panel()}{/if}
	</aside>

	<!-- Main content -->
	<main class="flex min-w-0 flex-1 flex-col bg-neutral-950">
		{@render children()}
	</main>
</div>