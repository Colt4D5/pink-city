<script lang="ts">
  import { config } from '$lib/config';
  import FacebookIcon from '$lib/assets/icons/FacebookIcon.svelte';
  import InstagramIcon from '$lib/assets/icons/InstagramIcon.svelte';
  import PinterestIcon from '$lib/assets/icons/PinterestIcon.svelte';
  import TikTokIcon from '$lib/assets/icons/TikTokIcon.svelte';
  import XIcon from '$lib/assets/icons/XIcon.svelte';
  import YouTubeIcon from '$lib/assets/icons/YouTubeIcon.svelte';
  import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svelte';
</script>


{#if config.social.facebook}
  <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Icon">
    <FacebookIcon width={42} height={42} />
  </a>
{/if}

{#if config.social.instagram}
  <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Icon">
    <InstagramIcon width={42} height={42} />
  </a>
{/if}

{#if config.social.pinterest}
  <a href={config.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest Icon">
    <PinterestIcon width={42} height={42} />
  </a>
{/if}

{#if config.social.tiktok}
  <a href={config.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok Icon">
    <TikTokIcon width={42} height={42} />
  </a>
{/if}

{#if config.social.x}
  <a href={config.social.x} target="_blank" rel="noopener noreferrer" aria-label="X Icon">
    <XIcon width={42} height={42} />
  </a>
{/if}

{#if config.social.youtube}
  <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube Icon">
    <YouTubeIcon width={42} height={42} />
  </a>
{/if}

{#if config.social.linkedin}
  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Icon">
    <LinkedInIcon width={42} height={42} />
  </a>
{/if}