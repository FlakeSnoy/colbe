<script lang="ts">
	import { Separator } from 'bits-ui';
	import Twitter from '@lucide/svelte/icons/twitter';
	import Youtube from '@lucide/svelte/icons/youtube';
	import Facebook from '@lucide/svelte/icons/facebook';

	const links = [
		{ label: 'About us', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Jobs', href: '/jobs' },
		{ label: 'Press kit', href: '/press' },
	];

	const socials = [
		{ icon: Twitter, href: 'https://twitter.com/colbeapp', label: 'Twitter' },
		{ icon: Youtube, href: 'https://youtube.com/@colbe', label: 'YouTube' },
		{ icon: Facebook, href: 'https://facebook.com/colbe', label: 'Facebook' },
	];

	const year = new Date().getFullYear();
</script>

<footer class="w-full bg-neutral-950 pt-10 pb-8">
	<Separator.Root class="mb-10 h-px bg-white/6" />

	<div class="mx-auto max-w-6xl flex flex-col items-center gap-6 px-5 md:px-8">

		<!-- Nav links -->
		<nav class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
			{#each links as link}
				<a
					href={link.href}
					class="text-[13px] text-neutral-500 hover:text-white transition-colors duration-150"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Socials -->
		<div class="flex items-center gap-4">
			{#each socials as social}
				<a
					href={social.href}
					aria-label={social.label}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:text-white hover:bg-white/[0.07] transition-all duration-150"
				>
					<social.icon size={16} strokeWidth={1.75} />
				</a>
			{/each}
		</div>

		<!-- Copyright -->
		<p class="text-[12px] text-neutral-600">
			Copyright &copy; {year} &mdash; All rights reserved by Colbe
		</p>

	</div>
</footer>