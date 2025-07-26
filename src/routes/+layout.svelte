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

<div class="scroll-to-top">
  <a href="#body-top" aria-label="Scroll to top">
    <svg fill="currentColor" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 511.801 511.801" xml:space="preserve">
      <g>
        <g>
          <g>
            <path d="M263.535,248.453c-4.16-4.16-10.88-4.16-15.04,0L3.054,493.787c-4.053,4.267-3.947,10.987,0.213,15.04
              c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
              c3.947-4.16,3.947-10.667,0-14.827L263.535,248.453z"/>
            <path d="M18.201,263.493l237.76-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827
              L263.535,3.12c-4.16-4.16-10.88-4.16-15.04,0L3.054,248.453c-4.053,4.267-3.947,10.987,0.213,15.04
              C7.534,267.547,14.041,267.547,18.201,263.493z"/>
          </g>
        </g>
      </g>
      </svg>
  </a>
</div>


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
    width: 100vw;
  }
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: hsl(var(--primary-color) / 0.8);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease-in-out;
    color: #fff;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 24px;
      padding: 1rem;
    }
    &:hover {
      background-color: hsl(var(--primary-color) / 1);
    }
  }
</style>