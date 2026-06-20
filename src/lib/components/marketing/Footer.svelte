<script lang="ts">
	import { Separator } from 'bits-ui';

	const links = [
		{ label: 'About us', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Jobs', href: '/jobs' },
		{ label: 'Press kit', href: '/press' },
	];

	const year = new Date().getFullYear();
</script>

<footer class="w-full bg-neutral-950 pt-10 pb-8">
	<Separator.Root class="mb-10 h-px bg-white/6" />

	<div class="mx-auto max-w-6xl flex flex-col items-center gap-6 px-5 md:px-8">

		<nav class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
			{#each links as link}
				<a href={link.href} class="text-[13px] text-neutral-500 hover:text-white transition-colors duration-150">
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-4">
			<!-- X (Twitter) -->
			<a href="https://twitter.com/colbeapp" aria-label="X / Twitter" target="_blank" rel="noopener noreferrer"
				class="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:text-white hover:bg-white/[0.07] transition-all duration-150">
				<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
				</svg>
			</a>
			<!-- YouTube -->
			<a href="https://youtube.com/@colbe" aria-label="YouTube" target="_blank" rel="noopener noreferrer"
				class="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:text-white hover:bg-white/[0.07] transition-all duration-150">
				<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/>
				</svg>
			</a>
			<!-- Facebook -->
			<a href="https://facebook.com/colbe" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
				class="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:text-white hover:bg-white/[0.07] transition-all duration-150">
				<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z"/>
				</svg>
			</a>
		</div>

		<p class="text-[12px] text-neutral-600">
			Copyright &copy; {year} &mdash; All rights reserved by Colbe
		</p>

	</div>
</footer>