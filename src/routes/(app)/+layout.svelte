<script lang="ts">
	import { Frame } from '$lib/index.js';
	import { TabBar } from '$lib/index.js';

	let { children } = $props();
</script>

<Frame>
	{#snippet rail()}
		<TabBar />
	{/snippet}
	{#snippet panel()}
		{@render children()}
	{/snippet}
	<!-- Content area: populated by /home/[id] and other sub-routes -->
	<div class="flex h-full items-center justify-center">
		<p class="text-sm text-neutral-600">Select a conversation</p>
	</div>
</Frame>