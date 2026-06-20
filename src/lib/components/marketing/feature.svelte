<script lang="ts">
	import { Megaphone, Bell, Trophy, CheckCircle } from '@lucide/svelte';

	const features = [
		{
			icon: Megaphone,
			title: 'Base Channels',
			copy: 'Subscribe to channels that matter — school announcements, clubs, topics. All updates in one feed.'
		},
		{
			icon: Bell,
			title: 'Live Updates',
			copy: 'Never miss a post. Channel owners broadcast in real time and your feed stays fresh automatically.'
		},
		{
			icon: Trophy,
			title: 'Leaderboard',
			copy: 'Earn points for staying active. React, subscribe, and show up daily to climb the school rankings.'
		}
	];

	const highlights = [
		'WhatsApp-style channel browsing',
		'Points & streak system',
		'Desktop dashboard + mobile app feel'
	];
</script>

<section id="features" class="mx-auto max-w-7xl px-4 py-20 lg:px-8">
	<div class="mb-14">
		<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Features</p>
		<h2 class="text-3xl font-black tracking-tight text-base-content lg:text-5xl max-w-xl">
			Built for your school. Not for everyone.
		</h2>
		<p class="mt-4 max-w-lg text-base text-base-content/50 leading-7">
			Colbe strips away the noise and gives your community the tools it actually needs.
		</p>
	</div>

	<div class="grid gap-px lg:grid-cols-3 rounded-2xl overflow-hidden border border-base-content/10">
		{#each features as { icon: Icon, title, copy }, i}
			<div class="bg-base-200/50 p-8 flex flex-col gap-5 hover:bg-base-200 transition-colors duration-200 {i === 1 ? 'border-x border-base-content/10' : ''}">
				<div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
					<Icon size={20} />
				</div>
				<div>
					<p class="font-bold text-base-content text-lg">{title}</p>
					<p class="mt-2 text-sm text-base-content/50 leading-6">{copy}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-4 grid gap-3 lg:grid-cols-3">
		{#each highlights as item}
			<div class="flex items-center gap-3 rounded-xl border border-base-content/10 bg-base-200/30 px-5 py-4">
				<CheckCircle size={15} class="text-primary shrink-0" />
				<p class="text-sm text-base-content/60">{item}</p>
			</div>
		{/each}
	</div>
</section>