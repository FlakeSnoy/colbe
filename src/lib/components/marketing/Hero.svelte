<script lang="ts">
</script>

<section class="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-950">

	<!-- Grid line background -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
					<path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#grid)" />
			<!-- Fade out bottom -->
			<rect width="100%" height="100%" fill="url(#fade-bottom)" />
			<defs>
				<linearGradient id="fade-bottom" x1="0" y1="0" x2="0" y2="1">
					<stop offset="60%" stop-color="#0a0a0a" stop-opacity="0"/>
					<stop offset="100%" stop-color="#0a0a0a" stop-opacity="1"/>
				</linearGradient>
			</defs>
		</svg>
	</div>

	<!-- Blue glow blob left -->
	<div class="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-blue-600/10 blur-[120px]" aria-hidden="true"></div>

	<!-- Content -->
	<div class="relative mx-auto max-w-6xl px-5 md:px-8 py-24 flex flex-col items-start gap-6 md:gap-8 md:max-w-2xl lg:max-w-3xl">

		<!-- Logo lockup -->
		<div class="flex items-center gap-3">
			<img src="/favicon.svg" alt="Colbe" class="h-10 w-10" />
			<span class="text-white font-semibold text-2xl tracking-[-0.02em]">Colbe</span>
		</div>

		<!-- Headline -->
		<h1 class="text-4xl md:text-6xl font-semibold text-white tracking-[-0.03em] leading-[1.1]">
			Chat with friends,<br/>
			<span class="text-neutral-500">call and explore more.</span>
		</h1>

		<!-- Description -->
		<p class="text-[15px] md:text-base text-neutral-500 leading-relaxed max-w-lg">
			Colbe brings your conversations, calls, and communities into one place.
			Stay connected with the people that matter.
		</p>

		<!-- CTA -->
		<div class="flex items-center gap-3 pt-2">
			<a
				href="/register"
				class="px-5 py-2.5 text-sm font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-full transition-all shadow-lg shadow-blue-600/20"
			>
				Get started — it's free
			</a>
			<a
				href="/about"
				class="px-5 py-2.5 text-sm text-neutral-400 hover:text-white rounded-full transition-colors hover:bg-white/6"
			>
				Learn more
			</a>
		</div>

	</div>

</section>