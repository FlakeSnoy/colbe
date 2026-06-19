<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
</script>

<section id="pricing" class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
	<div class="card bg-primary text-primary-content overflow-hidden shadow-2xl">
		<div class="card-body gap-8 p-8 lg:flex-row lg:items-center lg:p-12">
			<div class="max-w-2xl space-y-4">
				<div class="badge badge-accent badge-outline">Get started</div>
				<h2 class="text-3xl font-black tracking-tight lg:text-5xl">
					Join your school's social hub.
				</h2>
				<p class="max-w-xl text-primary-content/80 leading-7 lg:text-lg">
					Sign up free, subscribe to channels, and start earning points. Colbe is where your school community actually happens.
				</p>
				<div class="flex flex-col gap-3 sm:flex-row">
					<Button href="/register" variant="secondary" size="lg">Create your account</Button>
					<Button href="/login" variant="ghost" size="lg" class="text-primary-content">Sign in</Button>
				</div>
			</div>

			<div class="grid w-full gap-4 sm:grid-cols-3 lg:max-w-2xl">
				{#each [
					{ label: 'Free', value: '$0', sub: 'Full access, always' },
					{ label: 'Channels', value: '∞', sub: 'Subscribe to any', highlight: true },
					{ label: 'Leaderboard', value: '#1', sub: 'Climb the ranks' }
				] as { label, value, sub, highlight }}
					<Card class={highlight ? 'ring-2 ring-accent' : ''}>
						<CardContent class="gap-2 pt-6">
							<p class="text-sm text-muted-foreground">{label}</p>
							<p class="text-3xl font-black">{value}</p>
							<p class="text-sm text-muted-foreground">{sub}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>