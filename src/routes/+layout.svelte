<script lang="ts">
	import './layout.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	const { children } = $props();

	injectSpeedInsights();
</script>

{@render children()}
