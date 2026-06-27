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

<div class="flex h-dvh w-screen overflow-hidden bg-background text-foreground">
	<!-- Icon rail: 72px fixed -->
	<aside class="flex w-[72px] min-w-[72px] flex-col items-center border-r border-border bg-card py-2">
		{#if rail}{@render rail()}{/if}
	</aside>

	<!-- Panel: conversation list -->
	<aside class="flex w-[300px] min-w-[240px] flex-col border-r border-border bg-card">
		{#if panel}{@render panel()}{/if}
	</aside>

	<!-- Main content -->
	<main class="flex min-w-0 flex-1 flex-col bg-background">
		{@render children()}
	</main>
</div>