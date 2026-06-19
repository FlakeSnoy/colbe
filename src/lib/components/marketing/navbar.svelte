<script lang="ts">
	const links = [
		{ label: 'Product', href: '#features' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'Customers', href: '#testimonials' },
		{ label: 'FAQ', href: '#faq' }
	];
</script>

<nav class="navbar mx-auto max-w-7xl px-4 py-4 lg:px-8">
	<div class="navbar-start gap-3">
		<div class="avatar placeholder">
			<div class="bg-primary text-primary-content size-10 rounded-xl">
				<span class="text-lg font-black">C</span>
			</div>
		</div>
		<div>
			<p class="text-lg font-black tracking-tight">Colbe</p>
			<p class="text-xs uppercase tracking-[0.3em] text-base-content/60">SaaS platform</p>
		</div>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal gap-1 px-1 text-sm font-medium">
			{#each links as link}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>
	</div>

	<div class="navbar-end gap-2">
		<a class="btn btn-ghost btn-sm hidden sm:inline-flex" href="#pricing">Sign in</a>
		<a class="btn btn-primary btn-sm" href="#pricing">Start free</a>
	</div>
</nav>
