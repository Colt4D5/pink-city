<script lang="ts">
  let { config } = $props();
  let headerLogoHeight = $state(248);
  let isHeaderVisible = $state(true);
  let isHeaderCompact = $state(false);
  let lastScrollY = $state(0);
  let scrollY = $state(0);

  $effect(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      if (scrollY <= 250) {
        isHeaderVisible = true;
        isHeaderCompact = false;
      } else {
        if (scrollY < lastScrollY) {
          isHeaderVisible = true;
          isHeaderCompact = true;
        } else if (scrollY > lastScrollY) {
          isHeaderVisible = false;
          isHeaderCompact = false;
        }
      }
      
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header>
  <div id="logo-container" bind:clientHeight={headerLogoHeight} class:hidden={!isHeaderVisible} class:compact={isHeaderCompact}>
    <img src={config.site.logo} alt={`Logo of ${config.site.name} | ${config.location.city}, ${config.location.state}`} class="logo" />
  </div>
  <div id="navbar" style={`margin-top: ${headerLogoHeight}px;`}>
    <nav>
      <ul>
        {#each config.menu.items as item}
          {#if !item.hidden}
            <li><a href={item.path}>{item.label}</a></li>
          {/if}
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  #logo-container {
    --alpha: 0.4;
    --line-inset: 1rem;
    background-color: hsl(var(--background-color) / var(--alpha));
    position: fixed;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    padding-block: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    z-index: 1000;
    transform: translateY(0);
    transition: all 0.3s ease-in-out;
    &.compact {
      padding-block: 2rem;
      .logo {
        height: 100px;
        width: auto;
        transition: none;
      }
    }
    &.hidden {
      transform: translateY(-100%);
    }
    .logo {
      height: 152px;
      width: auto;
      transition: all 0.3s ease-in-out;
    }
    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: hsl(var(--background-color));
    }
    &::before {
      top: var(--line-inset);
    }
    &::after {
      bottom: var(--line-inset);
    }
  }
  nav {
    background-color: hsl(var(--background-color) / 0.8);
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      list-style: none;
      padding: 0;
      margin: 0;
      font-family: var(--font-family-heading);
      text-transform: uppercase;
      font-size: 0.9rem;
      li {
        a {
          display: inline-block;
          padding: 1rem;
          color: hsl(var(--text-color));
          &:hover {
            color: hsl(var(--link-color-hover) / 0.5);
          }
        }
      }
    }
  }
</style>