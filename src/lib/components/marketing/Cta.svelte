<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
</script>

<section class="bg-neutral-950 py-24 px-6 border-t border-neutral-900">
	<div class="mx-auto max-w-5xl">

		<div class="grid md:grid-cols-2 gap-px bg-neutral-900">

			<!-- Left: main CTA -->
			<div class="group bg-neutral-950 hover:bg-neutral-900 transition-colors duration-200 p-10 flex flex-col justify-between gap-12">
				<p class="text-xs font-medium text-blue-500 tracking-widest uppercase">Get started</p>
				<div>
					<h2 class="text-3xl md:text-4xl font-semibold text-white tracking-[-0.03em] leading-tight mb-4">
						Ready to join<br/>Colbe?
					</h2>
					<p class="text-sm text-neutral-600 leading-relaxed max-w-xs group-hover:text-neutral-400 transition-colors duration-200">
						Create your account in seconds. No credit card required.
					</p>
				</div>
				<a
					href="/register"
					class="inline-flex items-center gap-2 self-start text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-colors"
				>
					Create account
					<ArrowRight size={14} strokeWidth={2} />
				</a>
			</div>

			<!-- Right: secondary / already have account -->
			<div class="group bg-neutral-950 hover:bg-neutral-900 transition-colors duration-200 p-10 flex flex-col justify-between gap-12">
				<p class="text-xs font-medium text-neutral-700 tracking-widest uppercase">Already on Colbe?</p>
				<div>
					<h2 class="text-3xl md:text-4xl font-semibold text-neutral-600 tracking-[-0.03em] leading-tight mb-4 group-hover:text-white transition-colors duration-200">
						Welcome<br/>back.
					</h2>
					<p class="text-sm text-neutral-700 leading-relaxed max-w-xs group-hover:text-neutral-500 transition-colors duration-200">
						Pick up right where you left off. Your conversations are waiting.
					</p>
				</div>
				<a
					href="/login"
					class="inline-flex items-center gap-2 self-start text-sm text-neutral-500 hover:text-white transition-colors"
				>
					Log in
					<ArrowRight size={14} strokeWidth={2} />
				</a>
			</div>

		</div>

	</div>
</section>