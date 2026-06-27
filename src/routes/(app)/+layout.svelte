<script>
  import { Frame } from '$lib/index.js';
  import TabBar from '$lib/components/shared/TabBar.svelte';
  import { ChatSidebar } from '$lib/index.js';

  let { children } = $props();
</script>

<Frame>
  {#snippet rail()}<TabBar />{/snippet}
  {#snippet panel()}{@render children()}{/snippet}
  <!-- main content stays empty until /home/[id] loads -->
  <span></span>
</Frame>