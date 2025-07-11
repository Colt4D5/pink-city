<script lang="ts">
  import Icon from '$components/Icons.svelte';
</script>

<section id="intro">
  <div class="inner">
    <div class="image-wrapper">
      <img src="/images/intro-cake.webp" alt="Pink City Cake Studio" class="intro-image" />
    </div>
    <div class="intro-text">
      <h2>Custom designed cakes for life's celebrations!</h2>
      <div class="heart-container text-center">
        <Icon icon="heart" width={42} height={36} fill={"#fff"} style="position:relative;z-index:2;" />
      </div>
    </div>
  </div>
</section>


<style>
  #intro {
    padding-top: 1rem;
    padding-bottom: 10rem;
    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      .image-wrapper {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 75%;
          left: 50%;
          width: 550px;
          height: 250px;
          transform: translateX(-50%);
          background-color: hsl(255 255 255 / 0.5);
          z-index: -1;
        }
      }
      .intro-text {
        background-color: hsl(var(--primary-color) / 1);
        padding: 2rem 1rem;
        max-width: 350px;
        h2 {
          margin-top: 0;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          text-align: center;
          text-transform: uppercase;
          position: relative;
        }
        .heart-container {
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 40%;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: var(--text-color);
            z-index: 1;
          }
        }
      }
    }
  }
</style>