<script lang="ts">
	const features = [
		{
			title: 'Onboarding that converts',
			copy: 'Guide new users from signup to activation with product tours, checklists, and timed nudges.'
		},
		{
			title: 'Feedback in one place',
			copy: 'Capture product ideas, support notes, and customer requests without switching tools.'
		},
		{
			title: 'Insights for the whole team',
			copy: 'See adoption, churn risk, and usage trends in a dashboard built for fast decisions.'
		}
	];

	const highlightCards = [
		'Role-based access for every team size',
		'Real-time updates and activity tracking',
		'Automations that reduce manual work'
	];
</script>

<section id="features" class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
	<div class="mx-auto max-w-3xl text-center">
		<div class="badge badge-neutral badge-outline">Features</div>
		<h2 class="mt-4 text-3xl font-black tracking-tight lg:text-5xl">Everything you need to run a modern SaaS motion.</h2>
		<p class="mt-4 text-base leading-7 text-base-content/70 lg:text-lg">
			A focused set of tools for customer success, product growth, and support operations, wrapped in a clean interface.
		</p>
	</div>

	<div class="mt-12 grid gap-6 lg:grid-cols-3">
		{#each features as feature}
			<div class="card bg-base-100 border-base-300 shadow-sm border transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
				<div class="card-body gap-4">
					<div class="badge badge-primary badge-outline w-fit">Included</div>
					<h3 class="card-title text-2xl">{feature.title}</h3>
					<p class="text-base-content/70 leading-7">{feature.copy}</p>
					<div class="card-actions mt-2">
						<a class="link link-primary" href="#pricing">Learn more</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-6 grid gap-4 rounded-3xl bg-base-200/70 p-6 lg:grid-cols-3 lg:p-8">
		{#each highlightCards as item}
			<div class="flex items-center gap-3 rounded-2xl bg-base-100 p-4 shadow-sm">
				<div class="bg-primary size-3 rounded-full"></div>
				<p class="font-medium">{item}</p>
			</div>
		{/each}
	</div>
</section>
