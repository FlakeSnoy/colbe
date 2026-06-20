<script lang="ts">
	import { Eye, EyeOff } from '@lucide/svelte';

	let email = $state('');
	let password = $state('');
	let showPassword = $state(false);
	let loading = $state(false);
	let error = $state('');
</script>

<svelte:head>
	<title>Log in — Colbe</title>
</svelte:head>

<div class="min-h-screen bg-neutral-950 flex">

	<!-- Left: form -->
	<div class="flex flex-1 flex-col items-center justify-center px-8 py-12 md:max-w-md lg:max-w-lg">

		<div class="w-full max-w-sm">
			<div class="flex items-center gap-2 mb-12">
				<img src="/favicon.svg" alt="Colbe" class="h-6 w-6" />
				<span class="text-white font-medium text-sm tracking-tight">Colbe</span>
			</div>

			<h1 class="text-2xl font-semibold text-white tracking-tight mb-1">Welcome back.</h1>
			<p class="text-sm text-neutral-500 mb-8">Log in to continue where you left off.</p>

			{#if error}
				<div class="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
					{error}
				</div>
			{/if}

			<form
				method="POST"
				class="flex flex-col gap-3"
				onsubmit={(e) => { e.preventDefault(); loading = true; }}
			>
				<input
					type="email"
					name="email"
					bind:value={email}
					placeholder="Email address"
					required
					class="w-full px-4 py-3 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
				/>

				<div class="relative">
					<input
						type={showPassword ? 'text' : 'password'}
						name="password"
						bind:value={password}
						placeholder="Password"
						required
						class="w-full px-4 py-3 pr-11 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
					/>
					<button
						type="button"
						onclick={() => showPassword = !showPassword}
						class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors"
					>
						{#if showPassword}<EyeOff size={16} />{:else}<Eye size={16} />{/if}
					</button>
				</div>

				<div class="flex items-center justify-between mt-1">
					<label class="flex items-center gap-2 cursor-pointer">
						<input type="checkbox" name="remember" class="accent-blue-600 w-3.5 h-3.5" />
						<span class="text-xs text-neutral-600">Remember me</span>
					</label>
					<a href="/forgot-password" class="text-xs text-neutral-600 hover:text-white transition-colors">Forgot password?</a>
				</div>

				<button
					type="submit"
					disabled={loading}
					class="w-full mt-2 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
				>
					{loading ? 'Logging in…' : 'Log in'}
				</button>
			</form>

			<p class="text-sm text-neutral-600 text-center mt-6">
				Don't have an account?
				<a href="/register" class="text-white hover:text-blue-400 transition-colors ml-1">Sign up</a>
			</p>
		</div>
	</div>

	<!-- Right: SVG art panel -->
	<div class="hidden md:flex flex-1 bg-neutral-900 items-center justify-center relative overflow-hidden">
		<!-- Subtle radial glow -->
		<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1d4ed820_0%,transparent_70%)]"></div>

		<div class="relative z-10 flex flex-col items-center gap-6 px-12 text-center">
			<svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="140" cy="140" r="110" stroke="#262626" stroke-width="1"/>
				<circle cx="140" cy="140" r="75" stroke="#262626" stroke-width="1"/>
				<circle cx="140" cy="140" r="40" stroke="#1d4ed8" stroke-width="1" opacity="0.3"/>

				<!-- Chat bubble main -->
				<rect x="50" y="80" width="120" height="68" rx="14" fill="#171717" stroke="#262626" stroke-width="1.5"/>
				<circle cx="74" cy="114" r="12" fill="#1d4ed8" opacity="0.25"/>
				<circle cx="74" cy="114" r="5" fill="#3b82f6"/>
				<rect x="94" y="106" width="60" height="7" rx="3.5" fill="#262626"/>
				<rect x="94" y="119" width="42" height="5" rx="2.5" fill="#1e293b"/>
				<path d="M68 148 L58 162 L88 148Z" fill="#171717" stroke="#262626" stroke-width="1.5" stroke-linejoin="round"/>

				<!-- Reply bubble -->
				<rect x="110" y="168" width="108" height="56" rx="14" fill="#1d4ed8" opacity="0.12" stroke="#1d4ed8" stroke-width="1" stroke-opacity="0.3"/>
				<rect x="126" y="184" width="64" height="7" rx="3.5" fill="#1d4ed8" opacity="0.35"/>
				<rect x="126" y="197" width="44" height="5" rx="2.5" fill="#1d4ed8" opacity="0.2"/>
				<path d="M210 200 L224 214 L200 222Z" fill="#1d4ed8" opacity="0.12" stroke="#1d4ed8" stroke-width="1" stroke-opacity="0.3" stroke-linejoin="round"/>

				<!-- Notification -->
				<circle cx="224" cy="88" r="16" fill="#171717" stroke="#262626" stroke-width="1.5"/>
				<text x="224" y="94" text-anchor="middle" fill="#3b82f6" font-size="12" font-family="Inter,sans-serif" font-weight="600">2</text>

				<!-- Online dots -->
				<circle cx="140" cy="30" r="3.5" fill="#3b82f6" opacity="0.5"/>
				<circle cx="250" cy="140" r="3.5" fill="#3b82f6" opacity="0.25"/>
				<circle cx="140" cy="250" r="3.5" fill="#3b82f6" opacity="0.15"/>

				<!-- Center pulse -->
				<circle cx="140" cy="140" r="7" fill="#3b82f6" opacity="0.8"/>
				<circle cx="140" cy="140" r="14" stroke="#3b82f6" stroke-width="1" opacity="0.3"/>
			</svg>

			<div>
				<p class="text-white font-medium text-lg tracking-tight mb-1">Chat with friends,</p>
				<p class="text-neutral-600 text-sm">call and explore more.</p>
			</div>
		</div>
	</div>

</div>