<script lang="ts">
  const cakeFlavors = [
    { name: "Chocolate Butter Pound Cake", image: "/images/flavors/cake/chocolate.webp" },
    { name: "Vanilla Butter Pound Cake", image: "/images/flavors/cake/vanilla.webp" },
    { name: "Rainbow Freckles Pound Cake", image: "/images/flavors/cake/rainbow.webp" },
    { name: "Tickled Pink Pound Cake<br>(Strawberry & Vanilla)", image: "/images/flavors/cake/tickled-pink.webp" },
    { name: "Tuxedo<br>(Chocolate & Vanilla", image: "/images/flavors/cake/tuxedo.webp" },
  ];
  const fillingFlavors = [
    { name: "Biscoff Cookie Butter", image: "/images/flavors/fillings/biscoff.webp" },
    { name: "Strawberry Milkshake", image: "/images/flavors/fillings/strawberry.webp" },
    { name: "Chocolate Chip Cookie Dough", image: "/images/flavors/fillings/chocolate-chip.webp" },
    { name: "Snickers", image: "/images/flavors/fillings/snickers.webp" },
    { name: "Chocolate Fudge", image: "/images/flavors/fillings/chocolate-fudge.webp" },
    { name: "Oreo Creme", image: "/images/flavors/fillings/oreo.webp" },
    { name: "Golden Oreo Creme", image: "/images/flavors/fillings/golden-oreo.webp" },
    { name: "Mango Mousse", image: "/images/flavors/fillings/mango.webp" },
    { name: "Raspberry", image: "/images/flavors/fillings/raspberry.webp" },
    { name: "Espresso Mousse", image: "/images/flavors/fillings/espresso.webp" },
    { name: "Nutella Mousse", image: "/images/flavors/fillings/nutella.webp" },
    { name: "Peanut Butter Mousse", image: "/images/flavors/fillings/peanut-butter.webp" },
  ];
</script>

<section id="flavors">
  <div class="inner">
    <div id="title-container">
      <h2>CAKE & FILLING FLAVORS</h2>
      <hr>
      <p>Delish! So Many To Choose From!</p>
    </div>
    <div class="flavor-category">
      <div class="flavor-list">
        {#each cakeFlavors as flavor}
          <div class="flavor cake">
            <img src={flavor.image} alt={flavor.name} />
            <p>{@html flavor.name}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="flavor-category">
      <div class="flavor-list">
        {#each fillingFlavors as flavor}
          <div class="flavor filling">
            <img src={flavor.image} alt={flavor.name} />
            <p>{@html flavor.name}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>


<style>
  #flavors {
    background-color: hsl(var(--primary-color) / 0.8);
    margin-block: 6rem;
    .inner {
      padding-bottom: 6rem;
      #title-container {
        text-align: center;
        width: min(100%, 400px);
        padding-block: 6rem;
        margin: 0 auto;
        h2 {
          font-size: 2.75rem;
          margin: 0;
        }
        p {
          font-family: var(--font-family-button);
          font-size: 1.5rem;
          margin: 0;
        }
      }
      .flavor-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        width: min(100%, 1000px);
        margin: 0 auto 5rem;
        text-align: center;
        .flavor {
          width: min(40%, 250px);
          @media (min-width: 768px) {
            width: auto;
          }
        }
        &:has(.flavor.cake) {
          gap: 1rem;
          @media (min-width: 768px) {
            gap: 2rem;
          }
          img {
            max-width: 145px;
            @media (min-width: 768px) {
              max-width: 250;
            }
          }
        }
        &:has(.flavor.filling) {
          gap: 1rem;
          @media (min-width: 768px) {
            gap: 2rem;
          }
          img {
            max-width: 125px;
            @media (min-width: 768px) {
              max-width: 200;
            }
          }
        }
        p {
          font-size: clamp(0.8em, 2vw, 1.2em);
          text-wrap: balance;
        }
      }
    }
  }
</style>