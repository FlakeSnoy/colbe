<script lang="ts">
	import { Tabs } from 'bits-ui';
	import { Eye, EyeOff, Mail, Phone, User } from '@lucide/svelte';
	import { authClient } from '$lib/auth-client.js';
	import { goto } from '$app/navigation';

	let showPassword = $state(false);
	let loading = $state(false);
	let error = $state('');
	let tab = $state('email');

	let email = $state('');
	let phone = $state('');
	let username = $state('');
	let password = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		loading = true;
		error = '';

		const isEmail    = tab === 'email';
		const isPhone    = tab === 'phone';
		const isUsername = tab === 'username';

		const authEmail = isEmail
			? email
			: isPhone
				? `${phone}@colbe.local`
				: `${username}@colbe.local`;

		const name = isUsername ? username : isEmail ? email.split('@')[0] : phone;

		const { data, error: err } = await authClient.signUp.email({
			email: authEmail,
			password,
			name,
			fetchOptions: { credentials: 'include' },
		});

		if (err) {
			error = err.message ?? 'Registration failed. Please try again.';
			loading = false;
			return;
		}

		// Store extra fields via profile API after signup
		if (data?.user?.id) {
			await fetch('/api/profile', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify({
					userId:   data.user.id,
					username: isUsername ? username : null,
					phone:    isPhone ? phone : null,
					displayName: name,
				}),
			});
		}

		await goto('/home');
	}
</script>

<svelte:head>
	<title>Create account | Colbe</title>
</svelte:head>

<div class="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
	<div class="w-full max-w-sm">

		<div class="flex items-center justify-center gap-2 mb-10">
			<a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
				<img src="/favicon.svg" alt="Colbe" class="h-6 w-6" />
				<span class="text-white font-medium text-sm tracking-tight">Colbe</span>
			</a>
		</div>

		<h1 class="text-2xl font-semibold text-white text-center tracking-tight mb-1">Create an account</h1>
		<p class="text-sm text-neutral-500 text-center mb-8">Join Colbe and start connecting.</p>

		{#if error}
			<div class="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
				{error}
			</div>
		{/if}

		<Tabs.Root bind:value={tab} class="mb-4">
			<Tabs.List class="flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-xl p-1 w-full">
				{#each [{ value: 'email', label: 'Email', icon: Mail }, { value: 'phone', label: 'Phone', icon: Phone }, { value: 'username', label: 'Username', icon: User }] as t}
					<Tabs.Trigger
						value={t.value}
						class="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-lg text-neutral-500 transition-all data-[state=active]:bg-neutral-800 data-[state=active]:text-white"
					>
						<t.icon size={12} strokeWidth={2} />
						{t.label}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>

		<form class="flex flex-col gap-3" onsubmit={handleSubmit}>
			{#if tab === 'email'}
				<input type="email" bind:value={email} placeholder="Email address" required
					class="w-full px-4 py-3 text-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-blue-500 text-white placeholder-neutral-600 rounded-xl outline-none transition-colors" />
			{:else if tab === 'phone'}
				<input type="tel" bind:value={phone} placeholder="+1 000 000 0000" required
					class="w-full px-4 py-3 text-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-blue-500 text-white placeholder-neutral-600 rounded-xl outline-none transition-colors" />
			{:else}
				<input type="text" bind:value={username} placeholder="Username" required autocomplete="off"
					class="w-full px-4 py-3 text-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-blue-500 text-white placeholder-neutral-600 rounded-xl outline-none transition-colors" />
			{/if}

			<div class="relative">
				<input type={showPassword ? 'text' : 'password'} bind:value={password} placeholder="Password" required minlength={8}
					class="w-full px-4 py-3 pr-11 text-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-700 focus:border-blue-500 text-white placeholder-neutral-600 rounded-xl outline-none transition-colors" />
				<button type="button" onclick={() => showPassword = !showPassword}
					class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors">
					{#if showPassword}<EyeOff size={15} strokeWidth={1.75} />{:else}<Eye size={15} strokeWidth={1.75} />{/if}
				</button>
			</div>
			<p class="text-xs text-neutral-700 -mt-1 px-1">Must be at least 8 characters</p>

			<button type="submit" disabled={loading}
				class="w-full mt-1 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors">
				{#if loading}
					<span class="flex items-center justify-center gap-2">
						<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
							<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
							<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
						</svg>
						Setting things up…
					</span>
				{:else}
					Create my account
				{/if}
			</button>
		</form>

		<p class="text-sm text-neutral-600 text-center mt-6">
			Already have an account?
			<a href="/login" class="text-white hover:text-blue-400 transition-colors ml-1 font-medium">Log in</a>
		</p>

		<p class="text-xs text-neutral-700 text-center mt-8 leading-relaxed">
			By continuing you agree to our
			<a href="/terms" class="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
			and our
			<a href="/privacy" class="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>.
		</p>
	</div>
</div>