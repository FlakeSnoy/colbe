<script lang="ts">
	import { Megaphone, Bell, Trophy, CheckCircle } from '@lucide/svelte';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card/index.js';

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

<section id="features" class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<div class="badge badge-neutral badge-outline">Features</div>
		<h2 class="mt-4 text-3xl font-black tracking-tight lg:text-5xl">
			Everything your school community needs.
		</h2>
		<p class="mt-4 text-base leading-7 text-base-content/70 lg:text-lg">
			Colbe is not just another social app. Built around channels, updates, and community engagement — your way.
		</p>
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-3">
		{#each features as { icon: Icon, title, copy }}
			<Card class="transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
				<CardHeader>
					<div class="bg-primary/10 text-primary w-fit rounded-xl p-3 mb-2">
						<Icon size={22} />
					</div>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription class="text-base leading-7">{copy}</CardDescription>
				</CardContent>
			</Card>
		{/each}
	</div>

	<div class="mt-6 grid gap-4 rounded-3xl bg-base-200/70 p-6 lg:grid-cols-3 lg:p-8">
		{#each highlights as item}
			<div class="flex items-center gap-3 rounded-2xl bg-base-100 p-4 shadow-sm">
				<CheckCircle size={16} class="text-primary shrink-0" />
				<p class="font-medium text-sm">{item}</p>
			</div>
		{/each}
	</div>
</section>