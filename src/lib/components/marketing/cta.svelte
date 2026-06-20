<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowRight } from '@lucide/svelte';
</script>

<section id="pricing" class="mx-auto max-w-7xl px-4 py-20 lg:px-8">
	<div class="relative rounded-3xl border border-primary/20 bg-base-200/60 overflow-hidden p-10 lg:p-16">
		<div class="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/15 blur-[100px]"></div>

		<div class="relative z-10 lg:flex lg:items-center lg:justify-between gap-12">
			<div class="max-w-xl space-y-5">
				<p class="text-xs font-semibold uppercase tracking-widest text-primary">Get started</p>
				<h2 class="text-3xl font-black tracking-tight text-base-content lg:text-5xl">
					Join your school's social hub.
				</h2>
				<p class="text-base text-base-content/50 leading-7">
					Sign up free, subscribe to channels, and start earning points. Colbe is where your school community actually happens.
				</p>
				<div class="flex flex-col gap-3 sm:flex-row pt-2">
					<Button href="/register" size="lg" class="gap-2 font-semibold">
						Create your account <ArrowRight size={16} />
					</Button>
					<Button href="/login" variant="ghost" size="lg" class="text-base-content/50">Sign in</Button>
				</div>
			</div>

			<div class="mt-10 lg:mt-0 grid grid-cols-3 gap-3 lg:w-80 shrink-0">
				{#each [
					{ label: 'Free', value: '$0', sub: 'Always' },
					{ label: 'Channels', value: '∞', sub: 'No limits' },
					{ label: 'Rank', value: '#1', sub: 'Earn it' }
				] as { label, value, sub }}
					<div class="rounded-2xl border border-base-content/10 bg-base-100 p-4 text-center">
						<p class="text-[11px] text-base-content/40 mb-1">{label}</p>
						<p class="text-2xl font-black text-base-content">{value}</p>
						<p class="text-[11px] text-base-content/40 mt-1">{sub}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>