<script lang="ts">
  import { config } from '$lib/config';
  import Icons from '$components/Icons.svelte';
</script>


{#if config.social.facebook}
  <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Icon">
    <Icons width={42} height={42} icon="facebook" />
  </a>
{/if}

{#if config.social.instagram}
  <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Icon">
    <Icons width={42} height={42} icon="instagram" />
  </a>
{/if}

{#if config.social.pinterest}
  <a href={config.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest Icon">
    <Icons width={42} height={42} icon="pinterest" />
  </a>
{/if}

{#if config.social.tiktok}
  <a href={config.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok Icon">
    <Icons width={42} height={42} icon="tiktok" />
  </a>
{/if}

{#if config.social.x}
  <a href={config.social.x} target="_blank" rel="noopener noreferrer" aria-label="X Icon">
    <Icons width={42} height={42} icon="x" />
  </a>
{/if}

{#if config.social.youtube}
  <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube Icon">
    <Icons width={42} height={42} icon="youtube" />
  </a>
{/if}

{#if config.social.linkedin}
  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Icon">
    <Icons width={42} height={42} icon="linkedin" />
  </a>
{/if}