<script lang="ts">
</script>

<section id="gallery">
  <div class="inner">
    {#each Array(20) as _, index}
      <div class="cake">
        <img src="/images/intro-cake.webp" height={Math.random() * 200 + 150} width="100%" alt="Pink City Cake Studio" />
      </div>
    {/each}
  </div>
</section>


<style>
  #gallery {
    margin: 10rem 0;
    .inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      columns: 200px;
      .cake {
        overflow: hidden;
        border-radius: 8px;
        img {
          object-fit: cover;
          width: 100%;
          transition: transform 0.3s ease-in-out;
        }
        &:hover img {
          transform: scale(1.05);
        }
      }
    }
  }
</style>