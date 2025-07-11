<script lang="ts">
	import Icon from "./Icons.svelte";

</script>

<section id="separator">
  <div class="inner">
    <p style="color:#fff;font-style:italic;">Keepin' it real...</p>

    <p>Our <span style="color:#fff;">Cakes</span> are<br>handcrafted<br>with love... <span style="color:#fff;">and real butter. <Icon icon="heart" width={33} height={28} fill={"#fff"} /></span></p>
  </div>
</section>


<style>
  #separator {
    background-color: hsl(var(--primary-color) / 0.8);
    font-size: 1.75rem;
    text-transform: uppercase;
    padding-block: 1rem;
    .inner {
      width: min(100%, 800px);
      margin: 0 auto;
    }
  }
</style>