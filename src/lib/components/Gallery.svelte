<script lang="ts">
    import { fade } from 'svelte/transition';
  let selectedImage = $state<string | null>(null);
  let currentImageIndex = $state<number>(0);
  const totalImages = 42;

  // Touch/swipe handling
  let touchStartX = $state<number>(0);
  let touchStartY = $state<number>(0);
  let isSwiping = $state<boolean>(false);

  function openImage(imageSrc: string) {
    selectedImage = imageSrc;
    // Extract the image number from the src
    const match = imageSrc.match(/pinkcitycake-(\d+)\.webp/);
    if (match) {
      currentImageIndex = parseInt(match[1]) - 1; // Convert to 0-based index
    }
  }

  function closeImage() {
    selectedImage = null;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    selectedImage = `/images/cake-images/pinkcitycake-${currentImageIndex + 1}.webp`;
  }

  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    selectedImage = `/images/cake-images/pinkcitycake-${currentImageIndex + 1}.webp`;
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeImage();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      previousImage();
    }
  }

  function handleTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    isSwiping = false;
  }

  function handleTouchMove(event: TouchEvent) {
    if (!isSwiping) {
      const touch = event.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartX);
      const deltaY = Math.abs(touch.clientY - touchStartY);
      
      // Only start swiping if horizontal movement is greater than vertical
      if (deltaX > deltaY && deltaX > 10) {
        isSwiping = true;
        event.preventDefault(); // Prevent scrolling
      }
    }
  }

  function handleTouchEnd(event: TouchEvent) {
    if (!isSwiping) return;
    
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const minSwipeDistance = 50; // Minimum distance for a swipe
    
    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe right - go to previous image
        previousImage();
      } else {
        // Swipe left - go to next image
        nextImage();
      }
    }
    
    isSwiping = false;
  }
</script>

<section id="gallery">
  <div class="inner">
    {#each Array(42) as _, index}
      <div class="cake">
        <button
          type="button"
          class="cake-image-button"
          onclick={() => openImage(`/images/cake-images/pinkcitycake-${index + 1}.webp`)}
          aria-label="View larger image"
          style="padding:0;border:none;background:none;cursor:pointer;width:100%;"
        >
          <img 
            src={`/images/cake-images/pinkcitycake-${index + 1}.webp`} 
            width="100%" 
            alt="Pink City Cake Studio | Moreno Valley, CA"
            draggable="false"
          />
        </button>
      </div>
    {/each}
  </div>
</section>

<!-- Modal for enlarged image -->
{#if selectedImage}
  <div
    class="modal-backdrop"
    role="button"
    tabindex="0"
    onclick={handleBackdropClick}
    onkeydown={handleKeydown}
    ontouchstart={handleTouchStart}
    ontouchmove={handleTouchMove}
    ontouchend={handleTouchEnd}
    transition:fade={{ duration: 150 }}
    aria-label="Close image modal"
  >
    <div class="modal-content">
      <button class="close-button" onclick={closeImage} aria-label="Close image">×</button>
      
      <!-- Previous button -->
      <button class="nav-button prev-button" onclick={previousImage} aria-label="Previous image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- Next button -->
      <button class="nav-button next-button" onclick={nextImage} aria-label="Next image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <img src={selectedImage} alt="Pink City Cake Studio | Moreno Valley, CA" />
      
      <!-- Image counter -->
      <div class="image-counter">
        {currentImageIndex + 1} / {totalImages}
      </div>
    </div>
  </div>
{/if}


<style>
  #gallery {
    margin: 10rem 0;
    .inner {
      /* width: min(100%, 1200px); */
      margin: 0 auto;
      padding: 0 1rem;
      columns: 1;
      column-gap: clamp(0.25rem, 3vw, 1rem);
      @media (min-width: 320px) {
        columns: 2;
      }
      @media (min-width: 480px) {
        columns: 3;
      }
      @media (min-width: 768px) {
        columns: 4;
      }
      @media (min-width: 1024px) {
        columns: 5;
      }
      @media (min-width: 1280px) {
        columns: 6;
      }
      @media (min-width: 1536px) {
        columns: 7;
      }
      @media (min-width: 1920px) {
        columns: 8;
      }
      .cake {
        overflow: hidden;
        img {
          object-fit: cover;
          width: 100%;
          transition: transform 0.3s ease-in-out;
          cursor: pointer;
          border: 3px solid black;
        }
        &:hover img {
          transform: scale(1.05);
        }
      }
    }
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(255 255 255 / 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
    transition: all 0.3s ease;
  }

  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
  }

  .close-button {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    z-index: 1001;

    &:hover {
      background-color: white;
      transform: scale(1.1);
    }

    &:focus {
      outline: 2px solid #007acc;
      outline-offset: 2px;
    }
  }

  .nav-button {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    z-index: 1001;

    &:hover {
      background-color: white;
      transform: translateY(-50%) scale(1.1);
    }

    &:focus {
      outline: 2px solid #007acc;
      outline-offset: 2px;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .prev-button {
    left: 20px;
  }

  .next-button {
    right: 20px;
  }

  .image-counter {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
</style>