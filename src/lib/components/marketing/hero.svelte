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

<section class="relative mx-auto max-w-7xl px-4 py-28 lg:px-8 lg:py-40 text-center overflow-hidden">
	<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
		<div class="h-105 w-105 rounded-full bg-primary/10 blur-[120px]"></div>
	</div>

	<div class="relative z-10">
		<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary tracking-widest uppercase">
			Now in beta
		</div>

		<h1 class="text-5xl font-black tracking-tight text-base-content lg:text-7xl">
			Your school.<br />Your feed.
		</h1>
		<h1 class="mt-2 text-5xl font-black tracking-tight text-primary lg:text-7xl">
			Stay in the loop.
		</h1>

		<p class="mx-auto mt-8 max-w-lg text-base leading-relaxed text-base-content/50">
			Channels, updates, and your school community — in one place. No noise. Just what matters.
		</p>

		<div class="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<Button href="/register" size="lg" class="px-10 font-semibold">Join now</Button>
			<Button href="#features" variant="ghost" size="lg" class="px-10 text-base-content/60">See how it works</Button>
		</div>

		<div class="mt-20 flex flex-wrap justify-center gap-3">
			{#each pills as { icon: Icon, label }}
				<div class="flex items-center gap-2 rounded-full border border-base-content/10 bg-base-200/60 px-4 py-2 text-xs text-base-content/40 backdrop-blur-sm">
					<Icon size={13} class="text-primary/70" />
					{label}
				</div>
			{/each}
		</div>
	</div>
</section>