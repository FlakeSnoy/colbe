import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';

const config = {
  preprocess: sequence([
    vitePreprocess(),
    preprocessMeltUI() // must be last
  ]),
  kit: {
    adapter: adapter()
  }
};

export default config;