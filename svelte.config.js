import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
    alias: {
      $assets: "src/lib/assets",
      $components: "src/lib/components",
      $utils: "src/lib/utils",
    }
  }
};

export default config;
