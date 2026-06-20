<script lang="ts">
	const features = [
		{
			label: '01',
			title: 'Real-time messaging',
			description: 'Send messages, files, and reactions instantly. Conversations feel alive.',
		},
		{
			label: '02',
			title: 'Voice & video calls',
			description: 'Call anyone from within a chat or the calls tab. Schedule ahead or dial right now.',
		},
		{
			label: '03',
			title: 'Status & updates',
			description: 'Share moments with your circles. Watch reels and follow channels you care about.',
		},
		{
			label: '04',
			title: 'Study with AI',
			description: 'Built-in AI that helps you learn, summarise, and retain — right inside Colbe.',
		},
	];
</script>

<section class="bg-neutral-950 py-24 px-6 border-t border-neutral-900">
	<div class="mx-auto max-w-5xl">

		<p class="text-xs font-medium text-blue-500 tracking-widest uppercase mb-12">Features</p>

		<div class="grid md:grid-cols-2 gap-px bg-neutral-900">
			{#each features as f}
				<div class="group bg-neutral-950 p-8 transition-colors duration-200 hover:bg-neutral-900 cursor-default">
					<span class="text-xs text-neutral-700 font-mono mb-4 block">{f.label}</span>
					<h3 class="text-base font-medium text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-200">{f.title}</h3>
					<p class="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">{f.description}</p>
				</div>
			{/each}
		</div>

	</div>
</section>