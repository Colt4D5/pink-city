<script lang="ts">
  import "$assets/css/fonts.css";
  import "$assets/css/vars.css";
  import "$assets/css/style.css";
  import { config } from '$lib/config';
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
  const { children } = $props();
</script>

<Header {config} />

<main>
  {@render children()}
</main>

<Footer {config} />

<style>
  :global(body) {
    background-image: url('/images/bg.webp');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
  main {
    /* padding-top: 6rem; */
    padding-bottom: 4rem;
  }
</style>