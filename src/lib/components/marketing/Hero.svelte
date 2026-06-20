<script lang="ts">
	import { onMount } from 'svelte';

	const words = ['friends.', 'family.', 'teams.', 'everyone.'];
	let current = $state(0);
	let visible = $state(true);

	onMount(() => {
		const interval = setInterval(() => {
			visible = false;
			setTimeout(() => {
				current = (current + 1) % words.length;
				visible = true;
			}, 300);
		}, 2200);
		return () => clearInterval(interval);
	});
</script>

<section class="bg-neutral-950 pt-20 pb-32 px-6">
	<div class="mx-auto max-w-5xl">

		<div class="flex items-center gap-3 mb-10">
			<img src="/favicon.svg" alt="Colbe" class="h-8 w-8" />
			<span class="text-white font-medium text-lg tracking-tight">Colbe</span>
			<span class="text-neutral-800 text-lg">|</span>
			<span class="text-neutral-600 text-sm">Chat. Call. Explore.</span>
		</div>

		<h1 class="text-5xl md:text-7xl font-semibold text-white tracking-[-0.03em] leading-[1.05] mb-6">
			Chat with<br/>
			<span
				class="text-blue-500 inline-block transition-all duration-300"
				style="opacity: {visible ? 1 : 0}; transform: translateY({visible ? '0' : '8px'})"
			>
				{words[current]}
			</span>
		</h1>

		<p class="text-base text-neutral-500 max-w-md leading-relaxed mb-10">
			Colbe brings your conversations, calls, and communities into one simple place.
		</p>

		<div class="flex items-center gap-4">
			<a href="/register" class="text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-colors">
				Get started
			</a>
			<a href="/about" class="text-sm text-neutral-500 hover:text-white transition-colors">
				Learn more →
			</a>
		</div>

	</div>
</section>