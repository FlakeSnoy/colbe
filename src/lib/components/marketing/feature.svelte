<script lang="ts">
	import { Megaphone, Trophy, Bell, Smartphone } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	const pills = [
		{ icon: Megaphone, label: 'Base Channels' },
		{ icon: Trophy, label: 'Leaderboard' },
		{ icon: Bell, label: 'Live Updates' },
		{ icon: Smartphone, label: 'Mobile-first' }
	];
</script>

<section class="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36 text-center">
	<div class="badge badge-outline badge-primary mb-6 gap-2 px-4 py-3 text-xs font-medium tracking-wide">
		Now in beta
	</div>

	<h1 class="text-4xl font-black tracking-tight lg:text-6xl">
		Your school. Your feed.<br />
		<span class="text-primary">Stay in the loop.</span>
	</h1>

	<p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-base-content/60">
		Colbe brings channels, updates, and your school community into one clean social platform — no noise, just what matters.
	</p>

	<div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
		<Button href="/register" size="lg" class="px-8">Join now</Button>
		<Button href="#features" variant="ghost" size="lg" class="px-8">See how it works</Button>
	</div>

	<div class="mt-16 flex flex-wrap justify-center gap-4">
		{#each pills as { icon: Icon, label }}
			<div class="flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm text-base-content/60">
				<Icon size={15} />
				{label}
			</div>
		{/each}
	</div>
</section>