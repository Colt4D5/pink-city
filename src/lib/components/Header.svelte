<script lang="ts">
  let { config } = $props();
  let headerLogoHeight = $state(248);
  let isHeaderVisible = $state(true);
  let isHeaderCompact = $state(false);
  let lastScrollY = $state(0);
  let scrollY = $state(0);
  let isMobileMenuOpen = $state(false);

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

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header>
  <div id="logo-container" bind:clientHeight={headerLogoHeight} class:hidden={!isHeaderVisible} class:compact={isHeaderCompact}>
    <img src={config.site.logo} alt={`Logo of ${config.site.name} | ${config.location.city}, ${config.location.state}`} class="logo" />
  </div>
  <div id="navbar" style={`margin-top: ${headerLogoHeight}px;`}>
    <nav>
      <!-- Mobile menu button -->
      <div id="hamburger-menu-container">
        <button class="mobile-menu-button" onclick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span class="hamburger-line" class:active={isMobileMenuOpen}></span>
          <span class="hamburger-line" class:active={isMobileMenuOpen}></span>
          <span class="hamburger-line" class:active={isMobileMenuOpen}></span>
        </button>
      </div>

      <!-- Desktop navigation -->
      <ul class="desktop-nav">
        {#each config.menu.items as item}
          {#if !item.hidden}
            <li><a href={item.path}>{item.label}</a></li>
          {/if}
        {/each}
      </ul>

      <!-- Mobile navigation -->
      <ul class="mobile-nav" class:open={isMobileMenuOpen}>
        <!-- Close button -->
        <li class="close-button-container">
          <button class="close-button" onclick={closeMobileMenu} aria-label="Close mobile menu">
            <span class="close-icon">×</span>
          </button>
        </li>
        {#each config.menu.items as item}
          {#if !item.hidden}
            <li><a href={item.path} onclick={closeMobileMenu}>{item.label}</a></li>
          {/if}
        {/each}
      </ul>

      <!-- Mobile menu overlay -->
      {#if isMobileMenuOpen}
        <button
          type="button"
          class="mobile-menu-overlay"
          onclick={closeMobileMenu}
          aria-label="Close mobile menu overlay"
        ></button>
      {/if}
    </nav>
  </div>
</header>

<style>
  header {
    width: 100vw;
  }
  #logo-container {
    --alpha: 0.4;
    --line-inset: 1rem;
    background-color: hsl(var(--background-color) / var(--alpha));
    position: fixed;
    top: 0;
    left: 0;
    height: auto;
    width: 100vw;
    padding-block: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    z-index: 1000;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
    &.compact {
      padding-block: 2rem;
      .logo {
        transition: none;
      }
    }
    &.hidden {
      transform: translateY(-100%);
    }
    .logo {
      width: min(85%, 800px);
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
    width: 100%;
    background-color: hsl(var(--background-color) / 0.8);
    display: block;
    position: relative;

    #hamburger-menu-container {
      display: flex;
      background: #fff;
      border: none;
      padding: 1rem;
      /* width: 100%; */
      justify-content: flex-end;
      align-items: center;
      .mobile-menu-button {
        cursor: pointer;
        background: none;
        border: none;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
  
        .hamburger-line {
          display: block;
          width: 25px;
          height: 3px;
          background-color: hsl(var(--text-color));
          transition: all 0.3s ease;
          transform-origin: center;
  
          &:nth-child(1).active {
            transform: rotate(45deg) translate(5px, 5px);
          }
          &:nth-child(2).active {
            opacity: 0;
          }
          &:nth-child(3).active {
            transform: rotate(-45deg) translate(7px, -6px);
          }
        }
      }
        @media (min-width: 768px) {
          display: none;
        }
    }

    ul.desktop-nav {
      display: none;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      list-style: none;
      padding: 0;
      margin: 0;
      font-family: var(--font-family-heading);
      text-transform: uppercase;
      font-size: 0.9rem;
      @media (min-width: 768px) {
        display: flex;
      }
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

    ul.mobile-nav {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: hsl(var(--background-color) / 0.95);
      backdrop-filter: blur(10px);
      z-index: 1001;
      padding: 6rem 2rem 2rem;
      margin: 0;
      list-style: none;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
      
      &.open {
        transform: translateX(0);
      }

      @media (min-width: 768px) {
        display: none;
      }

      .close-button-container {
        margin-bottom: 2rem;
        text-align: right;
        
        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          
          .close-icon {
            font-size: 2rem;
            color: hsl(var(--text-color));
            line-height: 1;
            transition: color 0.3s ease;
          }
          
          &:hover .close-icon {
            color: hsl(var(--link-color-hover) / 0.8);
          }
        }
      }

      li:not(.close-button-container) {
        margin-bottom: 1rem;
        text-align: center;
        
        a {
          display: block;
          padding: 1.5rem;
          color: hsl(var(--text-color));
          font-family: var(--font-family-heading);
          text-transform: uppercase;
          font-size: 1.2rem;
          text-decoration: none;
          border-bottom: 1px solid hsl(var(--text-color) / 0.1);
          transition: all 0.3s ease;
          
          &:hover {
            color: hsl(var(--link-color-hover) / 0.8);
            background-color: hsl(var(--text-color) / 0.05);
          }
        }
      }
    }

    .mobile-menu-overlay {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: transparent;
      z-index: 1000;
      
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
</style>