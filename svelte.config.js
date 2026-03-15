import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
    alias: {
      $assets: "src/lib/assets",
      $components: "src/lib/components",
      $utils: "src/lib/utils",
    }
  }
};

export default config;
