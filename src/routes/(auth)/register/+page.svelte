<script lang="ts">
	import { Eye, EyeOff } from '@lucide/svelte';

	let email = $state('');
	let password = $state('');
	let showPassword = $state(false);
	let loading = $state(false);
	let error = $state('');
</script>

<svelte:head>
	<title>Create account — Colbe</title>
</svelte:head>

<div class="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
	<div class="w-full max-w-sm">

		<!-- Logo -->
		<div class="flex items-center justify-center gap-2 mb-10">
			<img src="/favicon.svg" alt="Colbe" class="h-7 w-7" />
			<span class="text-white font-medium text-base tracking-tight">Colbe</span>
		</div>

		<h1 class="text-2xl font-semibold text-white text-center tracking-tight mb-1">Create an account</h1>
		<p class="text-sm text-neutral-500 text-center mb-8">Join Colbe and start connecting.</p>

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
			<div>
				<input
					type="email"
					name="email"
					bind:value={email}
					placeholder="Email address"
					required
					class="w-full px-4 py-3 text-sm bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
				/>
			</div>

			<div class="relative">
				<input
					type={showPassword ? 'text' : 'password'}
					name="password"
					bind:value={password}
					placeholder="Password"
					required
					minlength={8}
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
			<p class="text-xs text-neutral-700 -mt-1">Must be at least 8 characters</p>

			<button
				type="submit"
				disabled={loading}
				class="w-full mt-2 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
			>
				{loading ? 'Creating account…' : 'Create my account'}
			</button>
		</form>

		<p class="text-sm text-neutral-600 text-center mt-6">
			Already have an account?
			<a href="/login" class="text-white hover:text-blue-400 transition-colors ml-1">Log in</a>
		</p>

		<p class="text-xs text-neutral-700 text-center mt-8 leading-relaxed">
			By continuing you agree to our
			<a href="/terms" class="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
			and
			<a href="/privacy" class="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>.
		</p>

	</div>
</div>